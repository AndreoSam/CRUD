import { authConst } from "../Actions/ActionConst";

const initialState = {
    fname: "",
    lname: "",
    address: "",
    pincode: "",
    message: "",
    error: "",
    loading: true,
    userlist: [],
    userobj: {},
}

export const crudReducers = (state = initialState, action) => {
    switch (action.type) {
        //request
        case `${authConst.REQUEST}_REQUEST`:
            return (state = {
                ...state,
                loading: true
            })

        //fail request
        case `${authConst.FAIL}_REQUEST`:
            return (state = {
                ...state,
                loading: false,
                error: action.payload
            })

        //get request
        case `${authConst.GET}_REQUEST`:
            return (state = {
                ...state,
                loading: false,
                error: "",
                userlist: action.payload,
                userobj: {}
            })
        default: return state;
    }
}