import { Recepie } from "./Recepie";


export default function Recepies(props) {
  return (
    <div className="row">
      
      {props.recepiess.map((recepie) => {
        return (
          <Recepie
            name={recepie.name}
            id={recepie.id}
            time={recepie.time}
            cookingMethod={recepie.cookingMethod}
            image={recepie.image}
          />
        );
      })}
        </div>
  )

}