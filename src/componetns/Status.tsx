type StatusProps={
    status:"loading" |"success" |"error";

}
const Status = (props:StatusProps) => {
    let message;
    if (props.status ==="loading"){
        message="loading...";
    }else if (props.status ==="success"){
        message="Data loaded successfully!";
    }else if (props.status ==="error"){
        message="Error loading data!";
    }
    return (
        <div>
            <h1>Status - <span style={{color: 'red'}}>{message}</span></h1>
        </div>
    );
};

export default Status;