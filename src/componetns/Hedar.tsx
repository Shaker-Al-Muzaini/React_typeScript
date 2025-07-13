type HedarProps = {
    children?:string;
}
function Hedar(props:HedarProps) {
    return (
        <div>
            <h2 style={{color:"green"}}>{props.children}</h2>
        </div>
    );
}

export default Hedar;