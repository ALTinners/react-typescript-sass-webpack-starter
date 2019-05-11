import * as React from "react";
import { FormEvent } from "react";
import "./style.scss";

export interface MyComponentProps {
    compiler: string,
    framework: string
}

export interface MyComponentState {

}

export class MyComponent extends React.Component<MyComponentProps, MyComponentState> {

    constructor(props: MyComponentProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            </div>
        );
    }
}