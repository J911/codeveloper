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
        .catch((e) => {
            switch(e.response.status){
                case 403:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "권한이 존재하지 않습니다."})
                default:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "알수없는 에러가 발생했습니다."})
            }
        })
    },
    [types.GET_FILE_LIST]: function (context, payload) {
        axios.get(`/file`)
        .then((result) => {
            //statusCode 비교가 필요함.
            this.code = result.data.code
            return context.commit(mutationTypes.UPDATE_FILE_LIST, result.data.files)
        })
        .catch((e) => {
            switch(e.response.status){
                case 403:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "권한이 존재하지 않습니다."})
                case 500:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "데이터베이스 에러가 발생했습니다."})
                default:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "알수없는 에러가 발생했습니다."})
            }
        })
    },
    [types.GET_FILE]: function (context, payload) {
        axios.get(`/file/${payload}`)
        .then((result) => {
          //statusCode 비교가 필요함.
          context.commit(mutationTypes.UPDATE_CURRENT_IDX, payload)
          return context.commit(mutationTypes.UPDATE_FILE, result.data.code)
        })
        .catch((e) => {
            switch(e.response.status){
                case 403:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "권한이 존재하지 않습니다."})
                case 500:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "데이터베이스 에러가 발생했습니다."})
                default:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "알수없는 에러가 발생했습니다."})
            }
        })
    },
    [types.UPDATE_FILE]: function (context, payload) {
        axios.post(`/file/${payload.idx}`, {code: payload.code})
        return context.commit(mutationTypes.UPDATE_FILE, payload.code)
    },
    [types.GET_CONTRIBUTORS](context) {
        axios.get(`/user/contributor`)
        .then((result) => {
          //statusCode 비교가 필요함.
          return context.commit(mutationTypes.UPDATE_CONTRIBUTORS, result.data.contributors)
        })
        .catch((e) => {
            switch(e.response.status){
                case 403:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "권한이 존재하지 않습니다."})
                case 500:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "데이터베이스 에러가 발생했습니다."})
                default:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "알수없는 에러가 발생했습니다."})
            }
        })
    },
    [types.ADD_CONTRIBUTOR]: function (context, payload) {
        axios.post(`/user/contributor`, {contributor: payload})
        .then((result) => {
            console.log(result)
            context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "추가되었습니다!"})
            return context.commit(mutationTypes.ADD_CONTRIBUTOR, result.data.contributor)
        })
        .catch((e) => {
            switch(e.response.status){
                case 400:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "본인은 추가할 수 없습니다."})
                case 403:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "권한이 존재하지 않습니다."})
                case 404:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "유저가 존재하지 않습니다."})
                case 409:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "이미 추가된 멤버입니다."})
                case 500:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "데이터베이스 에러가 발생했습니다."})
                default:
                    return context.commit(mutationTypes.SHOW_MESSAGE_BOX, {contents: "알수없는 에러가 발생했습니다."})
            }
        })
    }
    
}

export default actions