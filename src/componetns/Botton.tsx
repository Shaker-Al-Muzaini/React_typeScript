import * as React from "react";

type HandelBotton={
    handelClick: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void;

}
const Botton = ({handelClick}:HandelBotton) => {
    return (
        <div>
            <button onClick={(event)=>handelClick(event,1)}>Click</button>
        </div>
    );
};

export default Botton;