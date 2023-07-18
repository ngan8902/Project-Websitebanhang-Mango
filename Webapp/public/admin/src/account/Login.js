import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




function Login({ setLogined}) {
  // const [Username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [dayofweek, setDayofweek] = useState('');
  // const [showsignup, setshowsignup] = useState(false);


  // let submit = () => {
  //   getLogin(Username, password).then(function(response){
  //    let data = response.data;
  //    if(data && !data.error) {
  //     setLogined(true);
  //     setEditInfo(data[0])
  //    } else {

  //     }
  //   })
  // }

  // let clickCreateAccount = () => {
  //   setshowsignup(true)
  // }

  

  // const active = () =>{
  //   let Username = localStorage.getItem('username');
  //   let Password = localStorage.getItem('password');
  //   if(Username && Password){
  //     setUsername(Username);
  //     setPassword(Password);
  //     submit();
  //   }
  // }

//   let getLogin = (username,password) => {
//     const options = {
//       method: 'GET',
//       url: 'http://localhost:8000/api/getuser',
//       params: {
//         username: username,
//         password: password
//       },
//       headers: {
//         'content-type': 'application/json',
//         'Accept': 'application/json'
//       }
//     };
//     return axios.request(options)
//   } 

  return (
    <div>
      {
        (showsignup) ? <Signup></Signup> 
        : <div className="App" >

        <header className="App-header" style={{ backgroundColor: 'white'} }>
        <h1>Login From</h1>
        <form className='from-login'>
            <div class="form-outline mb-4">
                <input type="email" id="form2Example1" value={Username} onChange={(e) => {  setUsername(e.target.value) }} class="form-control" placeholder={"Email address"}/>
                <label class="form-label" for="form2Example1"></label>
            </div>

            <div class="form-outline mb-4" >
                <input type="password" id="form2Example2" value={password} onChange={(e) => { setPassword(e.target.value) }} class="form-control" placeholder='Password' />
                <label class="form-label" for="form2Example2"></label>
            </div>

        <div class="row mb-4">
            <div class="col d-flex justify-content-center">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
            </div>

            <div class="col">
                <a href="#!" onClick={() => {clickCreateAccount() }}>Đăng ký tài khoản mới!</a>
            </div>
        </div>

        <button onClick={() => { submit() }}type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
        </form>
        </header>
        
    </div>
      }
    </div>
  );
}
export default Login;