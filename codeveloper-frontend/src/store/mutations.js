import * as types from './mutation-types'

const mutations = {
    [types.UPDATE_USER]: function (state, payload) {
        return state.user = payload
    },
    [types.UPDATE_CURRENT_IDX]: function (state, payload) {
        return state.currentIdx = payload
    },
    [types.UPDATE_FILE]: function (state, payload) {
        return state.code = payload
    },
    [types.UPDATE_FILE_LIST]: function (state, payload){
        return state.files = payload
    }

}

export default mutations