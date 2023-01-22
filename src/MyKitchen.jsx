import { useState } from "react"
import { useEffect } from "react"
import { Recepie } from "./Components/Recepie"
import React from 'react';






export default function MyKitchen(props) {

  const apiURL2 = "https://localhost:44347/api/Ingridient"
  const apiURL = "https://localhost:44347/api/Recepie"
  const [recepies, setrecepies] = useState([])


  useEffect(() => {
    getAll()
  }, [])

  const getAll = () => {
    fetch(apiURL, {
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
          console.log("result", result)
          let temp = []
          console.log(result)
          result.map((recepie) => {
            temp.push(recepie)
          })
          setrecepies(temp)
        })



  }

  


  return (
    <div style={styles.container}>
    <div className="row" style={styles.Recepies}>
      <div className="col-12">
      <h1 >Recepies made!</h1>
      </div>

      {recepies.map((recepie) => {
        return (
          <Recepie
            key={recepie.id}
            name={recepie.name}
            id={recepie.id}
            time={recepie.time}
            cookingMethod={recepie.cookingMethod}
            image={recepie.image}
            ingridients={recepie.Ingridients}
          />

        );
      })}

    </div>
    </div>
  )



}

const styles = {
  Recepies: {
    justifyContent: "center",
    display:"flex",
    textAlign: "center",
    alignItems: 'center',
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    


    padding: 20,

}
}