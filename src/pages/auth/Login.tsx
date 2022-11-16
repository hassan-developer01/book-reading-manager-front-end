import {useForm} from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import {Link, useLocation, useNavigate} from "react-router-dom";
import loginBG from "@img/login-bg.jpg"
import useAuth from "@hooks/use-auth";
import {useEffect} from "react";
import "./auth.css";
import useLayout from "@/app/hooks/use-layout";

type LoginFormDataType = {
  email: string,
  password: string,
  rememberMe: boolean
}

function Login() {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [,setAuth] = useAuth();
  const [,enable] = useLayout();
  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormDataType>({
    defaultValues: {
      email: 'admin@email.com',
      password: 'iamadmin',
      rememberMe: false
    }
  });

  useEffect(() => {
    const loginPath = "/login";
    if (pathname !== loginPath) navigate(loginPath)
  }, [pathname]);

  const loginSuccessHandler = (data: any) => {
    console.log('success login', data);

    // TODO fetch login data in here
    setAuth({
      user: 'admin',
      tokenType: 'jwt',
      accessToken: 'token'
    });

    navigate('/');
    enable();
  }

  const loginFailHandler = (data: any) => console.log('failed login', data);

  return (
    <div className="container-fluid" style={{backgroundImage: `url(${loginBG})`}}>
      <div id="authBox" className="p-0 p-sm-4 p-md-6 d-flex justify-content-center align-items-center">
        <div className="row w-100" >
          <div id="formBox" className="col-12 col-md-8 col-lg-5 m-auto bg-white py-5" >
            <div className="w-75 mx-auto">
              <h3 className="text-center mb-3 border-bottom border-primary border-2 py-3 top-0">صفحه ورود به ادمین پنل</h3>
              <form onSubmit={handleSubmit(loginSuccessHandler, loginFailHandler)} noValidate={true} >
                <div className="mb-3">
                  <label htmlFor="loginEmailField" className="form-label">ایمیل: </label>
                  <input
                    className="form-control"
                    id="loginEmailField"
                    type="email"
                    placeholder="ایمیل خودتان را وارد کنید."
                    {...register('email', {
                      required: "لطفا ایمیلتان را وارد کنید.",
                      validate: {
                        validEmail: value => isEmail(value) || 'ایمیل وارد شده معتبر نمی‌باشد.',
                      }
                    })}
                  />
                  {
                    errors.email &&
                    <div className="text-danger mt-2"><p>{errors.email.message}</p></div>
                  }
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPasswordField" className="form-label">رمز عبور: </label>
                  <input
                    className="form-control"
                    id="loginPasswordField"
                    type="password"
                    placeholder="رمز عبور خودتان را وارد کنید."
                    {...register('password', {
                      required: "لطفا رمز عبور را وارد کنید.",
                      minLength: {
                        value: 8,
                        message: 'رمز عبور حداقل باید ۸ کاراکتر باشد.'
                      },
                      maxLength: {
                        value: 64,
                        message: 'رمز عبور حداکثر باید ۶۴ کاراکتر باشد.'
                      }
                    })}
                  />
                  {
                    errors.password &&
                    <div className="text-danger mt-2"><p>{errors.password.message}</p></div>
                  }
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="loginRememberMeField"
                      type="checkbox"
                      {...register('rememberMe')}
                    />
                    <label
                      htmlFor="loginRememberMeField"
                      className="form-check-label">مرا به خاطر بسپار</label>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">ورود به پنل</button>
                  </div>
                </div>
              </form>
              <div>
                <Link to="/register" >
                  <div className="d-grid">
                    <button className="btn btn-outline-info">هنوز اکانت ندارم</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login