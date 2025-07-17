import './App.css'
import Prauved from "./componetns/Prauved.tsx";
import Profile from "./componetns/Profile.tsx";

function App() {
 
  return (
    <>
      <Prauved isLogin Component={Profile}/>

    </>
  )
}

export default App
