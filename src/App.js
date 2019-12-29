import React from 'react';
import { connect } from "react-redux";
import {increment} from "./actions";


class App extends React.Component {
    componentDidMount() {
        this.props.increment();
    }

    render(){
        return (
            <div className="App">

                <p>hello {this.props.ctr}</p>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state ", state );
    return {
        ctr: state
    }
};

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

