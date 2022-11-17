import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import registerBG from "@img/register-bg.jpg";
import isEmail from "validator/lib/isEmail";
import "./auth.css";
import useRegister from "@hooks/api/auth-api/use-register";

type RegisterFormDataType = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordConfirm: string,
}

function Register() {
  const [send] = useRegister();
  const {register, handleSubmit, formState: {errors}, watch} = useForm<RegisterFormDataType>({
    defaultValues: {
      firstName: 'hassan',
      lastName: 'asadi',
      email: 'hassan@email.com',
      password: 'password',
      passwordConfirm: 'password'
    }
  });

  const loginSuccessHandler = (data: any) => {
    console.log('success register', data);

    // TODO fetch register data in here
    send(data);
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
                  <label htmlFor="registerFirstName" className="form-label">First Name: </label>
                  <input
                    className="form-control"
                    id="registerFirstName"
                    type="text"
                    placeholder="Please enter your first name."
                    {...register('firstName', {
                      required: "Please enter your first name.",
                      validate: {
                        validFirstName: value => /^[A-Za-z\s]*$/.test(value) || 'Your first name is not valid.',
                      }
                    })}
                  />
                  {
                    errors.firstName &&
                    <div className="text-danger mt-2"><p>{errors.firstName.message}</p></div>
                  }
                </div>

                <div className="mb-3">
                  <label htmlFor="registerLastName" className="form-label">Last Name: </label>
                  <input
                    className="form-control"
                    id="registerLastName"
                    type="type"
                    placeholder="Please enter your last name"
                    {...register('lastName', {
                      required: "Please enter your last name.",
                      validate: {
                        validFirstName: value => /^[A-Za-z\s]*$/.test(value) || 'Your last name is not valid.',
                      }
                    })}
                  />
                  {
                    errors.lastName &&
                    <div className="text-danger mt-2"><p>{errors.lastName.message}</p></div>
                  }
                </div>

                <div className="mb-3">
                  <label htmlFor="loginEmailField" className="form-label">Email: </label>
                  <input
                    className="form-control"
                    id="loginEmailField"
                    type="email"
                    placeholder="Please enter your email"
                    {...register('email', {
                      required: "Please enter your email.",
                      validate: {
                        validEmail: value => isEmail(value) || 'Your email is not valid.',
                      }
                    })}
                  />
                  {
                    errors.email &&
                    <div className="text-danger mt-2"><p>{errors.email.message}</p></div>
                  }
                </div>

                <div className="mb-3">
                  <label htmlFor="loginPasswordField" className="form-label">Password: </label>
                  <input
                    className="form-control"
                    id="loginPasswordField"
                    type="password"
                    placeholder="Please insert your password."
                    {...register('password', {
                      required: "Please insert your password.",
                      minLength: {
                        value: 8,
                        message: "Your password's length need to be at least 8 characters."
                      },
                      maxLength: {
                        value: 64,
                        message: 'Your password\'s length need to be at most 64 characters.'
                      }
                    })}
                  />
                  {
                    errors.password &&
                    <div className="text-danger mt-2"><p>{errors.password.message}</p></div>
                  }
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPasswordConfirmField" className="form-label">confirm your password: </label>
                  <input
                    className="form-control"
                    id="loginPasswordConfirmField"
                    type="password"
                    placeholder="Please insert your password confirmation."
                    {...register('passwordConfirm', {
                      required: "Please insert your password confirmation.",
                      validate: {
                        sameAsPassword: value => value === watch('password') || 'Your password confirmation does not match for your inserted password.'
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
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                </div>
              </form>
              <div>
                <Link to="/login" >
                  <div className="d-grid">
                    <button className="btn btn-outline-info">I have account</button>
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