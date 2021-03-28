import React , {  useState} from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import CustomAlert from "./CustomAlert";
import 'react-toastify/dist/ReactToastify.css';
var randtoken = require('rand-token');

const LoginPage = () => {
  const [ state, setState ] = useState({
      email: '',
      password : '',
  })

  const [showPassword, handleClickShowPassword] = useState(false)

  let users = [
    { name: "rajat", email : "rajat12@gmail.com" , password : 1234, userId: 1 },
    { name: "ram", email : "ram25@gmail.com" , password : 1987, userId: 2 },
    { name: "mohan", email : "mohan1@gmail.com" , password : 7896, userId: 3 }
  ]

  const handleChange = (e) => {
    const { name , value } = e.target;
    setState({
        ...state,
        [name] : value
    })
  }

  const validateUser = () => {
    for(let user of users ){
      if((user['email'] === state.email) && user['password'].toString() === state.password ){
        const obj = {
          email : state.email,
          password : state.password,
          name : user['name']
        }
        localStorage.setItem('currentUser', JSON.stringify(obj)) 
        return true;
      }
    }
      return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;

     if(!email){
      CustomAlert({
        message : "Please enter the email .?"
      })
    }
    else if(!password){
      CustomAlert({
        message : "Please enter the password .?"
      })
    }
    else{
        if(validateUser()){
          let token = randtoken.generate(16);
          localStorage.setItem('token', token)
          window.location.assign('./dashboard')
         
        }
        else{
          CustomAlert({
            message : "User not found."
          })
        }
    }
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Login</h3>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
            style={{
              marginBottom: "25px",
              width: "80%",
            }}
          />

          <FormControl variant="outlined"
          style={{
            marginBottom: "25px",
            width: "80%",
          }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={state.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault() }
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <div>
          <button type="submit" className="btn btn-outline-info login-button">login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
