import { useReducer } from "react";
type CounterState ={
    count:number;
}
type UpdateAction = {
    type:"increment" | "decrement";
    payload: number;
}
type ResetAction = {
    type: "resat";
}
const initialState = { count: 0 };
type ConuterAction=UpdateAction | ResetAction;


const reducer = (state:CounterState, action:ConuterAction) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload  };
        case "decrement":
            return { count: state.count - action.payload };
        case "resat":
            return initialState;
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
                Decrement 5
            </button>
            <button onClick={()=>dispatch({type:"resat"})}>
                Resat
            </button>
        </div>
    );
};

export default Counter;