import * as messages from './messages'
export default (action,code) => { 
    switch(code){
        case 4:
            return messages.CANNOT_ADD_CONTRIBUTOR_ME
        case 1:
            return messages.NO_PERMITION
        case 2:
            return messages.NO_CONTRIBUTOR
        case 3:
            return messages.EXIST_CONTRIBUTOR
        case 9:
            return messages.DATABASE_ERROR
        default:
            return messages.DEFAULT_ERROR
    }
}

