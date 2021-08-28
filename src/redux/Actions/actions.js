import{ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK, FILTERED} from "../constants/actionsTypes"

export const addTask = (payload) => {
      return {
            type: ADD_TASK,
            payload,
      }
}

export const DoneTask = (id) => {
      return {
            type: DONE_TASK,
            id,
      }
}

export const DeleteTask = (payload) => {
      return {
            type: DELETE_TASK,
            payload,
      }
}


export const editTask = (id,text) => {
      return {
            type: EDIT_TASK,
            id,
            text,
      }
      
}


export const filtered = () => {
      return {
            type: FILTERED,

      }
      
}