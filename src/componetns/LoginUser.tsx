import {useContext} from "react";
import {UserContect} from "../context/UserContect.tsx";

function LoginUser ()  {
    const UserContext=useContext(UserContect);
    const handelLogin=()=>{
        UserContext?.setUser({name: "John Doe", email: "s@gmail"});

    };
    const handelLogout =()=>{
        UserContext?.setUser(null);
    }

    return (
        <div>
            <button onClick={handelLogin} >Login</button>
            <button onClick={handelLogout} >Logout </button>
            <h2>is name {UserContext?.user?.name}</h2>
            <h3>is email {UserContext?.user?.email}</h3>
        </div>

    );
}

export default LoginUser;