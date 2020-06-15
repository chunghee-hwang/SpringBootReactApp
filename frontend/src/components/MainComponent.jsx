import React, { Component } from "react";
import axios from 'axios';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        axios.get("/api/hello")
            .then(res => {
                console.log(res);
                this.setState({
                    message: res.data.message
                });
            }).catch(console.error);
    }

    render() {
        return (
            <div>
                Main 페이지<br />
                서버로부터 온 메시지: {this.state.message}
            </div>
        );
    }
}
export default MainComponent;