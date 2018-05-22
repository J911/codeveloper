import axios from 'axios'
import * as types from './action-types'
import * as mutationTypes from './mutation-types'

import errMessage from './modules/err-message'

const actions = {
    [types.GET_USER]: function (context) {
        return axios.get(`/user`)
        .then((result) => {
            setTimeout(()=>context.commit(mutationTypes.HIDE_LOADING), 1000)
            context.commit(mutationTypes.UPDATE_USER,result.data.user)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errMessage(types.GET_USER,e.response.data.errorCode)}))
    },
    [types.GET_FILE_LIST]: function (context, payload) {
        axios.get(`/file`)
        .then((result) => {
            // this.code = result.data.code
            context.commit(mutationTypes.UPDATE_FILE_LIST, result.data.files)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errMessage(types.GET_FILE_LIST,e.response.data.errorCode)}))

    },
    [types.GET_MASTER_FILE_LIST]: function (context, payload) {
        axios.get(`/file/master`,  { params: { master: payload }})
        .then((result) => {
            // this.code = result.data.code
            context.commit(mutationTypes.UPDATE_MASTER_FILE_LIST, result.data)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errMessage(types.GET_FILE_LIST,e.response.data.errorCode)}))

    },
    [types.GET_FILE]: function (context, payload) {
        axios.get(`/file/${payload}`)
        .then((result) => {
          context.commit(mutationTypes.UPDATE_CURRENT_IDX, {idx: payload})
          context.commit(mutationTypes.UPDATE_FILE, result.data.code)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errMessage(types.GET_FILE,e.response.data.errorCode)}))
    },
    [types.GET_MASTER_FILE]: function (context, payload) {
        axios.get(`/file/master/${payload.idx}`, {params: {master:payload.master}})
        .then((result) => {
          context.commit(mutationTypes.UPDATE_CURRENT_IDX, {idx: payload.idx, master:payload.master})
          context.commit(mutationTypes.UPDATE_FILE, result.data.code)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errMessage(types.GET_FILE,e.response.data.errorCode)}))
    },
    [types.NEW_FILE]: function (context, payload) {
        return axios.post(`/file`, {filename: payload})
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errMessage(types.GET_FILE,e.response.data.errorCode)}))
    },

    [types.UPDATE_FILE]: function (context, payload) {
        if(context.state.ide.file.currentMaster)
            axios.post(`/file/master/${payload.idx}`, {master:context.state.ide.file.currentMaster, code: payload.code})
        else
            axios.post(`/file/${payload.idx}`, {code: payload.code})
        context.commit(mutationTypes.UPDATE_FILE, payload.code)
    },

    [types.GET_HOSTS](context) {
        return axios.get(`/user/host`)
        .then((result) => result.data.hosts)
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errMessage(types.GET_HOSTS,e.response.data.errorCode)}))
    },

    [types.GET_CONTRIBUTORS](context) {
        axios.get(`/user/contributor`)
        .then((result) => context.commit(mutationTypes.UPDATE_CONTRIBUTORS, result.data.contributors))
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errMessage(types.GET_CONTRIBUTORS,e.response.data.errorCode)}))
    },
    
    [types.ADD_CONTRIBUTOR]: function (context, payload) {
        axios.post(`/user/contributor`, {contributor: payload})
        .then((result) => {
            context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "Success!"})
            context.commit(mutationTypes.ADD_CONTRIBUTOR, result.data.contributor)
        })
        .catch((e) => context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: errMessage(types.ADD_CONTRIBUTOR,e.response.data.errorCode)}))
    }
    
}

export default actions