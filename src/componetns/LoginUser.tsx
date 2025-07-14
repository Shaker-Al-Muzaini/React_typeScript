import {useState} from "react";

const LoginUser = () => {
    const [isLogin,setLogin] = useState<boolean>(false);
    const handelLogin=()=>{
        setLogin(true)
    };
    const handelLogout =()=>{

        setLogin(false)
    }
    return (
        <div>
            <button onClick={handelLogin}>Login</button>
            <button onClick={handelLogout}>Logout</button>
            <h2>User {isLogin? "is Login ": "is logout"}</h2>
        </div>
    );
};

export default LoginUser;