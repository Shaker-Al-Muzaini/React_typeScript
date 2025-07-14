import './App.css'
import HelloShaker from "./componetns/HelloShaker.tsx";
import Status from "./componetns/Status.tsx";
import Hedar from "./componetns/Hedar.tsx";
import Layout from "./componetns/Layout.tsx";
import Botton from "./componetns/Botton.tsx";
import Inpot from "./componetns/Inpot.tsx";
import Component from "./componetns/Component.tsx";
import Prodect from "./componetns/Prodect.tsx";
import LoginUser from "./componetns/LoginUser.tsx";
import User from "./componetns/User.tsx";
function App() {
    const prodactData = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            description: "This is product 1",
        }
        ,
        {
            id: 2,
            name: "Product 2",
            price: 200,
            description: "This is product 2",
        },
        {
            id: 3,
            name: "Product 3",
            price: 300,
            description: "This is product 3",
        },
    ];

    const OpjDate={
        firstN:"ali",
        LastN:"omf",
        ScN:"ngh"
    }

    const arrDate=[
        {
            id:1,
            FN:"omer",
            LN:"shaker",
        },
        {
            id:2,
            FN:"ali",
            LN:"ahmed",
        },
        {
            id:3,
            FN:"nor",
            LN:"tamer",
        },

    ]

  return (
    <>
        <Layout>
        <Hedar>
           Welcome to Header
        </Hedar>
        <HelloShaker name="Ahmed" login={false} OpjDate={OpjDate} ScN={OpjDate.ScN} arrDate={arrDate}/>
        <Status status="error"/>
        <Botton handelClick={(e,id)=>console.log(e.target,id)}/>
        <Inpot value='' handerlInpot={(event)=>console.log(event.target.value)}/>
        <Component styles={{backgroundColor: 'lightblue', padding: '20px', borderRadius: '5px',textAlign: 'center'}}/>
        <Prodect prodactData={prodactData}/>
        <LoginUser/>
            <User/>
        </Layout>

    </>
  )
}

export default App
