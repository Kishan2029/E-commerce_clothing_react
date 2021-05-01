import React from 'react'
import FormInput from '../Form-Input/Form-Input'
import CustomButton from '../Custom-button/Custom-button'
import {auth,signInWithGoogle} from '../../Firebase/Firebase'
import './SignIn.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit =async event => {
        event.preventDefault()

        const{email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({ email: '', password: '' })
        }catch(error){
            console.log(error)
        }

        
    }
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email" 
                     type="email" 
                     value={this.state.email} 
                     handleChange={this.handleChange} 
                     label="email"
                     required />
                    {/* <lable>Email</lable> */}

                    <FormInput name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label="password"
                    required />
                    {/* <lable>Password</lable> */}
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle}  isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn
