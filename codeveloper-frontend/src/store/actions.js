import axios from 'axios'

const actions = {
    getUser: function (context) {
        const baseURI = '/user'
        axios.get(`${baseURI}`)
        .then((result) => {
          //statusCode 비교가 필요함.
          return context.commit('updateUser',result.data.user)
        })
    },
    getFileList: function (context, payload) {
        const baseURI = '/file'
        axios.get(`${baseURI}`)
        .then((result) => {
            //statusCode 비교가 필요함.
            this.code = result.data.code
            return context.commit('updateFileList', result.data.files)
        })
    },
    getFile(context, payload) {
        const baseURI = '/file'
        axios.get(`${baseURI}/${payload}`)
        .then((result) => {
          //statusCode 비교가 필요함.
          return context.commit('updateFile', result.data.code)
        })
    },
    updateFile(context, payload) {
        const baseURI = '/file'
        axios.post(`${baseURI}/${payload.idx}`, {code: payload.code})
        return context.commit('updateFile', payload.code)

    }
}

export default actions