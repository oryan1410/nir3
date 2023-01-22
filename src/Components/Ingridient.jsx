import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Modal } from "bootstrap";



export default function Ingridient(props) {

  const checkBoxChange = (e) => {
    if (e.target.checked) {
      props.checkBoxChange(props.name, true);
    } else {
      props.checkBoxChange(props.name, false);
    }
  }


  return (
    <div style={{ margin: 14, position: "relative" }} className="p-auto flip-card col-sm-12 col-md-4 mx-auto ">
      <Card style={{minWidth:'50%' ,maxWidth: '16rem', boxShadow: '1px 2px 9px #', minHeight:"244px", margin: "auto" }}>
        
        <Card.Img variant="top" src={props.image} style={{ width: "100%", height: "120px" }} />
       
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
           
            calories= {props.calories}<br />
          </Card.Text>
          {props.showCheckBox &&
            <label>Add to Recipe <input onChange={checkBoxChange} type='checkbox' title='Add to Recipe'  /></label>
          }
        </Card.Body>
      </Card>


    </div>

  )
}