const mutations = {
    updateUser: function (state, payload) {
        return state.user = payload
    },
    updateFileList: function (state, payload){
        return state.files = payload
    },
    updateFile: function (state, payload) {
        return state.code = payload
    }
}

export default mutations