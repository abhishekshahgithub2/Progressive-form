import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values} = this.props;
        return (
            <div style={styles.top}>
                FirstName is : {values.firstName} <br/>
                LastName is: {values.lastName} <br/>
                Email is: {values.email} <br/>
                Occupation is: {values.occupation} <br/>
                City: {values.city} <br/>
                Bio: {values.bio} <br/>
                <div>
                    <button onClick={this.continue}>Confirm & Continue</button>
                    <button onClick={this.back}>Back</button>
                </div>

                <div class="w5">
                    <ProgressBar now={75} />
                </div>

            </div>
        )
    }
}

const styles = {
    top: {
        margin: 20
    }
}

export default Confirm
