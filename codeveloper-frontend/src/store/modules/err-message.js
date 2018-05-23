// import * as messages from './messages'
import { ko } from '../../locale'

export default (action,code) => { 
    switch(code){
        case 4:
            return ko.CANNOT_ADD_CONTRIBUTOR_ME
        case 1:
            return ko.NO_PERMITION
        case 2:
            return ko.NO_CONTRIBUTOR
        case 3:
            return ko.EXIST_CONTRIBUTOR
        case 9:
            return ko.DATABASE_ERROR
        case 10:
            return ko.NOT_FOUND_FILE
        default:
            return ko.DEFAULT_ERROR
    }
}

