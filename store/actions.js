const CHANGE_SCREEN_WIDTH = 'CHANGE_SCREEN_WIDTH';
const CHANGE_SCREEN_HEIGHT = 'CHANGE_SCREEN_HEIGHT';
const CHANGE_USER_DATA = 'CHANGE_USER_DATA';
const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS';
function actChangeScreenWidth(width){
    return {
        type: CHANGE_SCREEN_WIDTH,
        payload: {width}
    }
}

function actChangeScreenHeight(height){
    return {
        type: CHANGE_SCREEN_HEIGHT,
        payload: {height}
    }
}
function actChangeUserData(userData){
    return {
        type: CHANGE_USER_DATA,
        payload: {...userData}
    }
}
function actChangeLoginStatus(status){
    return {
        type: CHANGE_LOGIN_STATUS,
        payload: status
    }
}
export{
    CHANGE_SCREEN_WIDTH,
    actChangeScreenWidth,
    CHANGE_SCREEN_HEIGHT,
    actChangeScreenHeight,
    CHANGE_USER_DATA,
    actChangeUserData,
    CHANGE_LOGIN_STATUS,
    actChangeLoginStatus
}