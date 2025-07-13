import * as React from "react";

type InptProos ={
    value:string;
    handerlInpot: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inpot = ({value,handerlInpot}:InptProos) => {
    return (
        <div>
            <input onChange={handerlInpot} type="text" value={value} />
        </div>
    );
};

export default Inpot;