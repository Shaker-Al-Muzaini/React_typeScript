import './App.css'
import Prauved from "./componetns/Prauved.tsx";
import Profile from "./componetns/Profile.tsx";
import Toster from "./componetns/Toster.tsx";

function App() {

    return (
        <>
            <Prauved isLogin Component={Profile}/>
            <Toster position="center"/>

        </>
    )
}

export default App
