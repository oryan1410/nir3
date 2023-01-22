import { Form, Button } from "react-bootstrap";
import { useState } from "react";



export default function NewIngridient(props) {

  const apiURL = "https://localhost:44347/api/Ingridient"

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState()

  const validateInputs = () => {
    console.log("checked")
    if (name === "" || image === "" || calories === "") {
      alert("Please fill all fields")
     
    }
    else {
      addIngridient()
    }
  }

  const addIngridient = () => {
    const i = {
      name: name,
      image: image,
      calories: calories
    }
    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(i),
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        "accept": "application/json; charset=UTF-8",      
      })
    }).then(res => {
      if (res.ok) {
        alert("Ingridient added")
        console.log(res)
        
      }
      else {
        alert("Error")
      }

    })
  }

  return (
    <div className="col-12">
      <Form>
        <Form.Text style={{ fontSize: "20px", textAlign: "left" }}>name</Form.Text>
        <Form.Control placeholder="Enter Name" type="text" id="name" onChange={(e) => setName(e.target.value)}></Form.Control>
        <Form.Text style={{ fontSize: "20px", textAlign: "left" }}>image</Form.Text>
        <Form.Control placeholder="Enter Image Url" type="text" id="image" onChange={(e) => setImage(e.target.value)}></Form.Control>
        <Form.Text style={{ fontSize: "20px", textAlign: "left" }}>calories</Form.Text>
        <Form.Control placeholder="Enter Calories" type="number" id="calories" onChange={(e) => setCalories(e.target.value)}></Form.Control>
        <Button style={{marginTop:"10px",marginBottom:"10px", fontSize: "20px", position: "relative", left: "20px", }} onClick={() => validateInputs()}>Add</Button>
      </Form>
    </div>
  )
}

