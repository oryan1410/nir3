import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Recepies from './Components/Recepies';
import MyKitchen from './MyKitchen';
import NewRecepie from './Components/NewRecepie';
import NewIngridient from './Components/NewIngridient';
import IngModal from './Components/IngModal';




function App() {
  return (
    <div className="App" >
      <div style={styles.container}>
        {/* <MyKitchen /> */}

        <NewRecepie />
        {/* <NewIngridient/> */}
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: "100%",
    backgroundStyle: "cover",
    backgroundColor: '#566573'
  }
}
export default App;
