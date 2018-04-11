import axios from 'axios'
import * as types from './action-types'
import * as mutationTypes from './mutation-types'

const actions = {
    [types.GET_USER]: function (context) {
        axios.get(`/user`)
        .then((result) => {
          //statusCode 비교가 필요함.
          return context.commit(mutationTypes.UPDATE_USER,result.data.user)
        })
    },
    [types.GET_FILE_LIST]: function (context, payload) {
        axios.get(`/file`)
        .then((result) => {
            //statusCode 비교가 필요함.
            this.code = result.data.code
            return context.commit(mutationTypes.UPDATE_FILE_LIST, result.data.files)
        })
    },
    [types.GET_FILE](context, payload) {
        axios.get(`/file/${payload}`)
        .then((result) => {
          //statusCode 비교가 필요함.
          context.commit(mutationTypes.UPDATE_CURRENT_IDX, payload)
          return context.commit(mutationTypes.UPDATE_FILE, result.data.code)
        })
    },
    [types.UPDATE_FILE](context, payload) {
        axios.post(`/file/${payload.idx}`, {code: payload.code})
        return context.commit(mutationTypes.UPDATE_FILE, payload.code)
    }
}

export default actions