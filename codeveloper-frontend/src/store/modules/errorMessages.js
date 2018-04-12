/**
 * 만족스러운 코드는 아님.
 * 방안1. action을 입력받에 그에 맞는 메시지 매핑
 * 방안2. 백엔드 재개발(메시지를 반환하거나, 관련 에러키 반환)
 * 
 * 일단 방안 1로 진행.
 */
import * as messages from './messages'
export default (action,code) => { // 중복되는 statusCode 발생시 action 검사를 통해 메시지 매핑할 것!
    switch(code){
        case 400:
            return messages.CANNOT_ADD_CONTRIBUTOR_ME
        case 403:
            return messages.NO_PERMITION
        case 404:
            return messages.NO_CONTRIBUTOR
        case 409:
            return messages.EXIST_CONTRIBUTOR
        case 500:
            return messages.DATABASE_ERROR
        default:
            return messages.DEFAULT_ERROR
    }
}

