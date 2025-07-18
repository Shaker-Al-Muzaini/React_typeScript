type HorizontalPosition = "left" | "center" | "right";
type verticalPosition = "top" | "center" | "bottom";
type teypPositionProps={
    position:
    | Exclude<`${HorizontalPosition}-${verticalPosition}`, "center-center">
    |"center";

}
function Toster ({position}:teypPositionProps) {
    return(
        <div>
            <h1>is  {position}</h1>
        </div>
    )

}

export default Toster;