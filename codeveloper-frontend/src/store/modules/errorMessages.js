export default (code) => {
    switch(code){
        case 400:
            return "본인은 추가할 수 없습니다."
        case 403:
            return "권한이 존재하지 않습니다."
        case 404:
            return "유저가 존재하지 않습니다."
        case 409:
            return "이미 추가된 멤버입니다."
        case 500:
            return "데이터베이스 에러가 발생했습니다."
        default:
            return "알수없는 에러가 발생했습니다."
    }
}

