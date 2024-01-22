import { FieldValues } from "react-hook-form";
import { createStore } from "redux";
import { string } from "yup";

const initialState={
    userList:[{name: 'abc',
    age: '23',
    sex: 'Female',
    mobile: '1234343',
    idType: 'adhar',}]
}
const userReducer =(state=initialState,action: { type: string; payload: any; })=>{
    console.log("inside reducer");
    if(action.type === 'add_user'){
        console.log("actionnnn----------->>>>>>>>>>>>>>>>>>>>>>.",action.payload)
        return {...state,
        userList:[...state.userList,action.payload]}
    };
    return state;

}

const store = createStore(userReducer);

export default store;   