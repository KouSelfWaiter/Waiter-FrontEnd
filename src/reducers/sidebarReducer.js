import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions/actions";

//sidebarReducer, bir React uygulamasındaki kenar çubuğu (sidebar) durumunu yönetmek için kullanılır. Bu durum, kenar çubuğunun açık veya kapalı olması gibi özellikler içerebilir.
const sidebarReducer = (state, action) => {
    switch(action.type){
        case OPEN_SIDEBAR:
            return {
                ...state,
                isSidebarOpen : true
            }
        case CLOSE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen : false
            }
        default:
            return state;
    }
}

export default sidebarReducer;