import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTask, filtered } from '../../redux/Actions/actions'
import { Button } from 'react-bootstrap'

function AddTask() {
      
const [myInput, setMyInput] = useState("")
const filtred = useSelector((state) => state.reducerTask.filtered);

const dispatch = useDispatch()
const add = () => {
            if (myInput) {
            dispatch(addTask({ text: myInput, isDone: false, id: Date.now() }));
            setMyInput("");
            }
            else {
                  alert('empty input ')
            }

      }

            return (
                  <div>
                        <div className="container m-5 p-2 rounded mx-auto bg-light">
                              
      <div className="row m-1 p-4">
            <div className="col">
                  <div className="p-1 h1 text-primary text-center mx-auto">
                  <h1>My Todo List</h1>
                  </div>
            </div>
      </div>
                              


      <div className="row m-1 p-3">
            <div className="col col-11 mx-auto">
                  <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                                                
                  <div className="col">
                  <input className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text"
                  placeholder="Add new .." onChange={(e) => setMyInput(e.target.value)}
                  value={myInput}/>
                  </div>
                                                


            
                  <div className="col-auto px-0 mx-0 mr-2">
                        <button type="button" className="btn btn-primary" onClick={add}>Add</button>
                  </div>
                  </div>
            </div>
      </div>
                              

      <div className="p-2 mx-4 border-black-25 border-bottom"></div>
      
      <div className="row m-1 p-3 px-5 justify-content-end">
            <div className="col-auto d-flex align-items-center">
                  <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
                                          
                        <Button
                        variant="info"
                        className="mr-3"
                        onClick={() => dispatch(filtered())}
                        >
                        {filtred ? "isDone" : "All"}
                                          </Button>
            </div>
      
      </div>
      </div>
                  </div>
            )
      }

      export default AddTask