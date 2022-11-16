import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import registerBG from "@img/register-bg.jpg";
import isEmail from "validator/lib/isEmail";
import "./auth.css";

type RegisterFormDataType = {
  email: string,
  password: string,
  passwordConfirm: string,
}

function Register() {
  const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormDataType>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  });

  const loginSuccessHandler = (data: any) => {
    console.log('success register', data);

    // TODO fetch register data in here
  }

  const loginFailHandler = (data: any) => console.log('failed register', data);

  return (
    <div className="container-fluid" style={{backgroundImage: `url(${registerBG})`}}>
      <div id="authBox" className="p-4 d-flex justify-content-center align-items-center">
        <div className="row w-100" >
          <div id="formBox" className="col-10 col-md-8 col-lg-5 m-auto bg-white py-5" style={{zIndex: 9, borderRadius: '15px', opacity: .96}}>
            <div className="w-75 mx-auto">
              <h3 className="text-center mb-3 border-bottom border-primary border-2 py-3 top-0">صفحه ثبت نام</h3>
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
                  <label htmlFor="loginPasswordConfirmField" className="form-label">تایید رمز عبور: </label>
                  <input
                    className="form-control"
                    id="loginPasswordConfirmField"
                    type="password"
                    placeholder="تایید رمز عبور خودتان را وارد کنید."
                    {...register('passwordConfirm', {
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
                    errors.passwordConfirm &&
                    <div className="text-danger mt-2"><p>{errors.passwordConfirm.message}</p></div>
                  }
                </div>
                <div className="mb-3">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">ثبت نام</button>
                  </div>
                </div>
              </form>
              <div>
                <Link to="/login" >
                  <div className="d-grid">
                    <button className="btn btn-outline-info">اکانت دارم</button>
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

export default Register