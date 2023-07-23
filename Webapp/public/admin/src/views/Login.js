import React from "react";


function Login() {
    return (
        <div className="App" id="loginpage" >
            <header className="App-header" style={{ backgroundColor: 'white' }}>
                <h1 className="text-login">Đăng Nhập</h1>
                <form className='from-login'>
                    <div className="form-outline mb-4">
                        <input type="text" id="form2Example1" className="form-control" placeholder={"Tên đăng nhập"} />
                        <label className="form-label" htmlFor="form2Example1">*</label>
                    </div>

                    <div className="form-outline mb-4" >
                        <input type="password" id="form2Example2" className="form-control" placeholder={"Mật khẩu"} />
                        <label className="form-label" htmlFor="form2Example2">*</label>
                    </div>

                    <div className="row mb-2">
                        <div className="col">
                            <a href="#!" style={{fontSize: '1rem'}}>Đăng ký tài khoản mới!</a>
                        </div>
                    </div>

                    <button type="button" className="btn btn-block mb-4">Đăng nhập</button>
                </form>
            </header>

        </div>

    );
}

export default Login;
