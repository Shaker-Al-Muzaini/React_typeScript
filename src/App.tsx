import './App.css'
import HelloShaker from "./componetns/HelloShaker.tsx";
import Status from "./componetns/Status.tsx";
import Hedar from "./componetns/Hedar.tsx";
import Layout from "./componetns/Layout.tsx";

function App() {
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
        </Layout>

    </>
  )
}

export default App
