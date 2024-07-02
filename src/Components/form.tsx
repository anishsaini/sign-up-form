import react, { useState } from 'react'

const SignUp: React.FC = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rows, setRows] = useState<Array<{ firstName: string, lastName: string, email: string, password: string }>>([])



  return (
    <div className='container'>
        <div className='form'>
            <div className='first-name'>
                <label>First Name</label>
                <input type="text" />
            </div>
            <div className='last-name'>
                <label>Last Name</label>
                <input type="text" />
            </div>
            <div className='email'>
                <label>Email</label>
                <input type="text" />
            </div>
            <div className='password'>
                <label>Password</label>
                <input type="text" />
            </div>
        </div>    

        
      
    </div>
  )
}

export default SignUp
