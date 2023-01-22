import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Ingridient from './Ingridient';
import { Card } from "react-bootstrap"

export default function IngModal(props) {
  {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      console.log(props.ingridients)
    }, [])

    return (
      <>
      
        <Button variant="primary" onClick={handleShow}>
          View ingridients
        </Button>

        <Modal show={show} onHide={handleClose} animation={false} size="xl" >
         
            <h1>this recepie ingridients</h1>
          
           <Modal.Body style={styles.Body}>
         
         <div className='row'>
            {props.ingridients.map((ingridient) => {
              return (
                <Ingridient
                  key={ingridient.name}
                  id={ingridient.id}
                  name={ingridient.name}
                  image={ingridient.image}
                  calories={ingridient.calories}
                  showCheckBox={false}
                
                />
              )
            }
            )}
            </div>
         
         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
     
      </>
    );
    
  }

}

const styles = {
  Body: {
    justifyContent: "center",  
  
    textAlign: "center",
  }
}

