import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [formData, setFormData] = useState({});

    const navigate  = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // Do whatever you need with the form data here
        const { email, password } = formData;
        console.log(email,password);
        console.log("API Data :"+props.username+props.password);
        if((email===props.username)&&(password===props.password)){
            console.log("Data match");
            navigate("/welcome",{ state: { email } });
        }
        else{
            console.log("Credentials doesnot match")
            alert("Kindly Enter Correct Username and Password")
        }
      };
    
  return (
    <>
      <div className="container my-5" style={{width:"400px"}}>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <img id="personimg" className='rounded mx-auto d-block' style={{width:"250px"}} src={require("./person.jpg")}alt="pictures" />
            <h2 className='text-center'>Welcome!</h2>
            <label htmlFor="personimg" className='text-center'>Let's Connect to your workspace.<br/>
            Please Enter Your Email and Password To continue
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" onChange={handleInputChange} className="form-control" id="exampleInputPassword1" required/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <div>
            <a  href="/" className='text-primary float-end'>Forget Password?</a>
          </div>
          <br/>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    </>
  );
}

export default Login;
