import * as React from "react";

type LayoutProps = {
    children?: React.ReactNode;
}
function Layout(props:LayoutProps) {
    return (
        <div>
            <h1 style={{color:"blue"}} >welcome My Layout App</h1>
            <h2 >{props.children}</h2>
        </div>
    );
}

export default Layout;