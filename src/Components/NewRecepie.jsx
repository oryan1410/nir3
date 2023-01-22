import React, { useState, useEffect } from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
import Ingridient from './Ingridient';

export default function NewRecepie(props) {
  const apiURL = "https://localhost:44347/api/Recepie"
  const apiURL2 = "https://localhost:44347/api/Ingridient"
  const [Name, setName] = useState("")
  const [Image, setImage] = useState("")
  const [Method, setMethod] = useState("")
  const [Time, setTime] = useState()
  const [Ing, setIng] = useState([])
  const [RecIng, setRecIng] = useState([])
  const [Recepies, setRecepies] = useState([])

  useEffect(() => {
    getAll()
  }, [])


  const getAll = () => {

    fetch(apiURL2, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json ; charset=utf-8',
        'accept': 'application/json; charset=utf-8',
      })
    }).then(response => {
      console.log(response)
      console.log('respons.status', response.status)
      console.log('respons.ok', response.ok)
      return response.json();
    })
      .then(
        (result) => {
          let temp = []

          result.map((recepie) => {
            temp.push(recepie)
          })
          setIng(temp)
        })

  }

  const validateInputs = () => {
    console.log("checked")
    if (Name === "" || Image === "" || Method === "" || Time === "") {
      alert("Please fill all fields")
    }
    else {
      addRecepie()
    }
  }



  const addRecepie = () => {
    const r = {
      name: Name,
      image: Image,
      cookingMethod: Method,
      time: Time,
      ingridients: RecIng
    }

    console.log("RecIng", RecIng)
    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(r),
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        "accept": "application/json; charset=UTF-8",
      })
    }).then(res => {
      if (res.ok) {
        alert("Recepie added")
        clearForm()
       
        console.log(res)

      }
      else {
        alert("Error")
      }

    })


  }

  const clearForm = () => {
    console.log("clear")
    setName('')   
    setImage('')
    setMethod("")
    setTime("")
    setRecIng([])
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    const texts = document.querySelectorAll('input[type=text]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
        texts.forEach(text => text.value = "");
  }
  const changeCheckBox = (key, isChecked) => {
    let ingredient = Ing.find(ingredient => ingredient.name === key)

    if (isChecked) {
      console.log("rec", RecIng)
      setRecIng([...RecIng, ingredient])

    } else {
      setRecIng(RecIng.filter(ingredient => ingredient.name !== key))
    }
  }
  return (
    <div style={{width:"100%"}}>
      <h1 style={{marginTop:"5px", fontSize: "50px", textAlign: "center" }}>Add Recepie</h1>
      <div className="col-12">
        <Form>
          <Form.Text style={{ fontSize: "20px", textAlign: "left" }}>Name</Form.Text>
          <Form.Control placeholder="Enter Name" type="text" id="name" onChange={(e) => setName(e.target.value)}></Form.Control>
          <Form.Text style={{ fontSize: "20px", textAlign: "left" }}>Image</Form.Text>
          <Form.Control placeholder="Enter Image Url" type="text" id="image" onChange={(e) => setImage(e.target.value)}></Form.Control>
          <Form.Text style={{ fontSize: "20px", textAlign: "left" }}>Time</Form.Text>
          <Form.Control placeholder="Enter Time" type="number" id="Time" onChange={(e) => setTime(e.target.value)}></Form.Control>
          <Form.Text style={{ fontSize: "20px", textAlign: "left" }}>Cooking Method</Form.Text>
          <Form.Control placeholder="Enter Method" type="text" id="Method" onChange={(e) => setMethod(e.target.value)}></Form.Control>
          <div className="row">
            
            <h1 className="col-12" style={{marginTop:"20px", fontSize: "30px", textAlign: "center", textDecoration:"underline" }}>Ingridients Avialable</h1>
            {Ing.map((ingredient) => {
              console.log(ingredient.name)
              return (
                <Ingridient
                  key={ingredient.name}
                  id={ingredient.id}
                  name={ingredient.name}
                  image={ingredient.image}
                  calories={ingredient.calories}
                  showCheckBox={true}
                  checkBoxChange={changeCheckBox}
                />

              )
            })}
          </div>
          <Button style={{ fontSize: "20px", position: "absolute", left: "20px", bottom: "-50px" }} onClick={() => validateInputs()}>Add</Button>

        </Form>
      </div>
    </div >
  )
}