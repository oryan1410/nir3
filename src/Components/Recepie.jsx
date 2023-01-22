import { Card } from "react-bootstrap"
import IngModal from "./IngModal"



export function Recepie(props) {

  console.log("ingridients", props.ingridients)

  const TotalCalories = () => {
    let total = 0;
    props.ingridients.map((ingridient) => {
      total += ingridient.calories
    }
    )
    return total
  }

  return (


    <div style={{ margin: 14, position: "relative", justifyContent: 'center' }} className="p-auto flip-card col-md-5 col-lg-4 mx-auto ">
      <Card style={{ width: '18rem', boxShadow: '1px 2px 9px #', minWidth: '18rem', margin: 'auto' }}>
        <Card.Img variant="top" src={props.image} style={{ width: "100%", height: "120px" }} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Method= {props.cookingMethod}<br />
            time= {props.time}<br/>
            TotalCalories= {TotalCalories()}
          </Card.Text>
          <IngModal ingridients={props.ingridients} />


        </Card.Body>
      </Card>


    </div>




  )
}