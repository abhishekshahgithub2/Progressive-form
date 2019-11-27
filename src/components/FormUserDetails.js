import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';
import '../App.css';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        if ( this.props.values.firstName != '' && this.props.values.lastName != '' && this.props.values.email != '')
        {
            this.props.nextStep();
        }
        
    }

    render() {
        const {handleChange,values} = this.props;
        return (
            <div>

                <h1> User Details </h1>
                <input 
                    placeholder='Enter FirstName'
                    type='text'
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    style={styles2.inp}
                    required
                />    
                <br />
                <input 
                    placeholder='Enter LastName'
                    type='text'
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    style={styles2.inp}
                />
                <br />
                <input 
                    placeholder='Enter Email'
                    type='text'
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    style={styles2.inp}
                />
                <br />
                <button onClick={this.continue}>Continue</button>

                

                <div class="w5">
                    <ProgressBar now={25} />
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

export default FormUserDetails
