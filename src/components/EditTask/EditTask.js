import React, { useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../../redux/Actions/actions';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement('#root')
 
function EditTask({el}) {
  
  const [updatedText, setUpdatedText] = useState(el.text);
    const dispatch = useDispatch();

   
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal(){
      setIsOpen(false);
    }
      return (
        <div>
          <label className="pull-right m-sm-3 ">
            <button className="btn btn-primary btn-xs  " onClick={() => { openModal(); setUpdatedText(el.text) }}><FaEdit/></button>

          </label>
          <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            >
      
            
            <form>
                        <Form.Group as={Row} >
            <Form.Label column sm="2">
                  Title
            </Form.Label>
            <Col sm="50">
                  <Form.Control placeholder="text" onChange={(e)=>setUpdatedText(e.target.value)}  value={updatedText}   />
            </Col>
                                    </Form.Group>
          
              <Button variant="outline-success" onClick={() => { dispatch(editTask(el.id, updatedText));closeModal()}}
                          >Edit</Button>


                                    
                        <Button variant="outline-danger" style={{float:'right'}}  onClick={closeModal}>close</Button>
                        
                  </form>
            </Modal>
      </div>
    );
}


export default EditTask