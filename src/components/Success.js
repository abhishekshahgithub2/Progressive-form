import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';

export class Success extends Component {
    render() {
        return (
            <div>
                <h1>Submitted Succesfully</h1>
                 <div class="w5">
                    <ProgressBar now={100} />
                </div>
            </div>
        )
    }
}

export default Success
