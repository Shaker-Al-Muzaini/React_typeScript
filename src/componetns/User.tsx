import {useState} from "react";
import type {Users} from "../teyps/app.ts";
const User = () => {
    const [user,setuser]=useState<Users>({} as Users);

    return (
        <div>
            <button onClick={()=>setuser({name:"shaker",email:"sh@gmail.com"})}>Login</button>
            <button onClick={()=>setuser({} as Users)}>logout</button>
            <h2>is name {user?.name} </h2>
            <h3>is email {user?.email} </h3>

        </div>
    );
};

export default User;