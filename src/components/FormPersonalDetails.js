import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();

        if ( this.props.values.occupation != '' && this.props.values.city != '' && this.props.values.bio != '')
        {
            this.props.nextStep();
        }

    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {handleChange,values} = this.props;
        return (
            <div>
                <h1>Personal Details</h1>
                <input 
                    placeholder='Enter Occupation'
                    type='text'
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                    style={styles2.inp}
                />    
                <br />
                <input 
                    placeholder='Enter city'
                    type='text'
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                    style={styles2.inp}
                />
                <br />
                <input 
                    placeholder='Enter bio'
                    type='text'
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                    style={styles2.inp}
                />
                <br />
                <button onClick={this.continue}>Continue</button>
                <button onClick={this.back}>Back</button>

                <div class="w5">
                    <ProgressBar now={50} />
                </div>

            </div>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

const styles2 = {
    inp: {
        margin: 10
    }
}

export default FormPersonalDetails
