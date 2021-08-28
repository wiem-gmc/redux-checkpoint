import { ADD_TASK,DONE_TASK ,DELETE_TASK, EDIT_TASK, FILTERED} from "../constants/actionsTypes";


const initialState = { 
      list: [],
      filtered: false,
};

const reducerTask = (state = initialState, action) => {
      
      switch (action.type) {

            case ADD_TASK:
                  return { ...state, list: [...state.list, action.payload] };
            
            case DONE_TASK:
                  return {
                        ...state, list: state.list.map((el) => (el.id === action.id ? { ...el, isDone: !el.isDone } : el)),
                  };
            
            case DELETE_TASK:
                  return {
                        ...state, list: state.list.filter((el) => (el.id !== action.payload )),
                  };
            
            case EDIT_TASK:
                  return {
                        ...state, list: state.list.map((el) => (el.id === action.id ? { ...el, text: action.text } : el)),
                  };
            
             case FILTERED:
                  return {
                        ...state, filtered : !state.filtered,
                  };
            
            

            default:
                  return state;
      }
      

};

export default reducerTask