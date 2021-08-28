import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './TaskList.css'
import { FaTrashAlt } from 'react-icons/fa';
import { DeleteTask, DoneTask } from '../../redux/Actions/actions';
import EditTask from '../EditTask/EditTask';
import { Button } from 'react-bootstrap';
const TaskList = () => {
            
      const list = useSelector((state) => state.reducerTask.list);
      const filtred = useSelector((state) => state.reducerTask.filtered);

            const dispatch = useDispatch()


            return (
                  <div>
                        {console.log(filtred)}
            <div className="jumbotron list-content">
            <ul className="list-group">
                  <li  className="list-group-item title" >
                  My Tasks
                  </li>
            
                   {(filtred ? list.filter((el) => el.isDone === true) : list).map((el, i) =>    
                        el.isDone ?
                        
                  <li className="list-group-item text-left flex-row align-items-start"  key={i}>
                              
                  <label className="myInput mx-auto">{el.text}<br /></label>
            <div className=' display-inline-block'>
                  <EditTask el={ el}/> 
                                    
                  <label className="pull-right m-sm-3 mb-3 ">
                        <Button  className="btn btn-danger  btn-xs " onClick={()=>(dispatch(DeleteTask(el.id)))} > <FaTrashAlt /></Button>
                  </label>
                              <label className="pull-right m-sm-3">
                                    <button  className="btn btn-success  btn-xs " onClick={()=>dispatch(DoneTask(el.id))} > isDone</button>
                                          </label></div>
                              </li>

                              :


                              <li className="list-group-item text-left" key={i}>
                              
                  <label className="myInputUndone  ">{el.text }<br/></label>
                              <EditTask el={ el}/> 


                  <label className="pull-right m-sm-3">
                        <button  className="btn btn-danger  btn-xs " onClick={()=>(dispatch(DeleteTask(el.id)))} > <FaTrashAlt /></button>
                  </label>
                              <label className="pull-right m-sm-3">
                                    <button  className="btn btn-secondary  btn-xs " onClick={()=>dispatch(DoneTask(el.id))} > UnDone</button>
                              </label>
                  <div className="break"></div>
                              </li>

                  )}
                  
            </ul>
                        </div>
                  </div>
            )
      }

      export default TaskList