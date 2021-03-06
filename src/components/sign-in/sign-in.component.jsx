
import React from 'react';
import FormInput from '../form-input/form-input.componet'; 
import CustomButton from '../custom-body/custom-body.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email:'', password:''})
    }
    handleChange = event =>{
        const{value,name} = event.target

        this.setState({ [name] :value})
    } 
    

render () {
    return (
        <div className='sign-in'>
            <h2> I  already have an account</h2>
            <span> sign in with your email and pasword</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name = 'email' type ='email'  handleChange={this.handleChange} value = {this.state.email}  label='email' required/>
                
                <FormInput 
                name = 'password'
                 type ='password'
                 handleChange={this.handleChange}
                value = {this.state.email}
                label='password'
                 required/>
                <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Google signin
            </CustomButton>
          </div>
               

                
            </form>
        </div>
    )
}
}
export default SignIn