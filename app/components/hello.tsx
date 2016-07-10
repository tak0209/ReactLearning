import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1 style={{fontSize: 2+'em', backgroundColor:'lightblue'}}>Hi from {this.props.compiler} and {this.props.framework}123</h1>;
    }
}   