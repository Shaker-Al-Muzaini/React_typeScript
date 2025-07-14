import * as React from "react";

type StyleProps={
    styles: React.CSSProperties;
}
const Component = (props:StyleProps) => {
    return (
        <div style={props.styles}>
            tis is my component
        </div>
    );
};

export default Component;