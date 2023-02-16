import { useState } from "react"
export const Login = () =>{
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(email)
    console.log(pass)
}
return(
    <div>
        <form onSubmit={handleSubmit}>
            <label  htmlFor= "email" >Email</label>
            <input value={email} onChange= {(e)=> setEmail(e.target.value)} type="email" placeholder="enter your email" name="email" />
            
            <label  htmlFor= "password" >Password</label>
            <input value ={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="enter your password" name="password" />
            <button type="Submit">Log In</button>
        </form>
            <button>No account? Register Now!</button>
    </div>
)
    
}