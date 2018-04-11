import axios from 'axios'

const actions = {
    getUser: function (context) {
        axios.get(`/user`)
        .then((result) => {
          //statusCode 비교가 필요함.
          return context.commit('updateUser',result.data.user)
        })
    },
    getFileList: function (context, payload) {
        axios.get(`/file`)
        .then((result) => {
            //statusCode 비교가 필요함.
            this.code = result.data.code
            return context.commit('updateFileList', result.data.files)
        })
    },
    getFile(context, payload) {
        axios.get(`/file/${payload}`)
        .then((result) => {
          //statusCode 비교가 필요함.
          return context.commit('updateFile', result.data.code)
        })
    },
    updateFile(context, payload) {
        axios.post(`/file/${payload.idx}`, {code: payload.code})
        return context.commit('updateFile', payload.code)
    }
}

export default actions