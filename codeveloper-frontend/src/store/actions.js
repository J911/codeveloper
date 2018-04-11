import axios from 'axios'
import * as types from './action-types'
import * as mutationTypes from './mutation-types'

import errorMessages from './modules/errorMessages'

const actions = {
    [types.GET_USER]: function (context) {
        axios.get(`/user`)
        .then((result) => {
          return context.commit(mutationTypes.UPDATE_USER,result.data.user)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errorMessages(e.response.status)}))
    },

    [types.GET_FILE_LIST]: function (context, payload) {
        axios.get(`/file`)
        .then((result) => {
            this.code = result.data.code
            return context.commit(mutationTypes.UPDATE_FILE_LIST, result.data.files)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errorMessages(e.response.status)}))

    },

    [types.GET_FILE]: function (context, payload) {
        axios.get(`/file/${payload}`)
        .then((result) => {
          context.commit(mutationTypes.UPDATE_CURRENT_IDX, payload)
          return context.commit(mutationTypes.UPDATE_FILE, result.data.code)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errorMessages(e.response.status)}))
    },

    [types.UPDATE_FILE]: function (context, payload) {
        axios.post(`/file/${payload.idx}`, {code: payload.code})
        return context.commit(mutationTypes.UPDATE_FILE, payload.code)
    },

    [types.GET_CONTRIBUTORS](context) {
        axios.get(`/user/contributor`)
        .then((result) => {
          return context.commit(mutationTypes.UPDATE_CONTRIBUTORS, result.data.contributors)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errorMessages(e.response.status)}))
    },

    [types.ADD_CONTRIBUTOR]: function (context, payload) {
        axios.post(`/user/contributor`, {contributor: payload})
        .then((result) => {
            context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "추가되었습니다!"})
            return context.commit(mutationTypes.ADD_CONTRIBUTOR, result.data.contributor)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errorMessages(e.response.status)}))
    }
    
}

export default actions