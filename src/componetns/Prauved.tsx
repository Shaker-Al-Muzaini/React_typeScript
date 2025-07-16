import Login from "./Login.tsx";
import type {teypNameProps} from "./Profile.tsx";
import React from "react";

type PrauvedteypProps={
    isLogin:boolean;
    Component: React.ComponentType<teypNameProps>;
}
function Prauved  ({isLogin,Component}:PrauvedteypProps)  {
    if (isLogin){
        return <Component name="shaker" />
    }
    else{
        return <Login/>
    }
}

export default Prauved;