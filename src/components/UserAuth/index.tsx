'use client';
import Google from '@/app/images/auth-google.svg';
import Facebook from '@/app/images/auth-facebook.svg';
import Email from '@/app/images/auth-email.svg';
import PasswordHide from '@/app/images/password-hide.svg';
import './UserAuth.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from '@/libs/schema';
import { loginUser, passwordHasher, signUp } from '@/utils/auth';
import { Bounce, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const UserAuth = () => {
  const [isLoginHide, setIsLoginHide] = useState<boolean>(true);
  const [isRegisterHide, setIsRegisterHide] = useState<boolean>(true);
  const [isRegisterRepeatHide, setIsRegisterRepeatHide] =
    useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const router = useRouter();

  type FormLoginProps = {
    userEmail: string;
    userPassword: string;
  };

  type FormRegisterProps = {
    userEmail: string;
    userPassword: string;
    userConfirmPassword: string;
  };

  // Login
  const {
    register: loginForm,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginError },
  } = useForm<FormLoginProps>({
    resolver: yupResolver(LoginSchema),
  });
  const loginSubmit: SubmitHandler<FormLoginProps> = async data => {
    const email = data.userEmail;
    const password = data.userPassword;

    const loggedInUser = await loginUser(email, password);

    if (loggedInUser) {
      toast.success('Log in success!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });

      router.push('/');
    } else {
      toast.error('Email or Password is wrong!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  //  Sign Up
  const {
    register: registerForm,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerError },
  } = useForm<FormRegisterProps>({ resolver: yupResolver(RegisterSchema) });
  const signUpSubmit: SubmitHandler<FormLoginProps> = async data => {
    const email = data.userEmail;
    const password = data.userPassword;

    const hashedPassword = await passwordHasher(password);

    const signedUpUser = await signUp(email, hashedPassword);

    if (signedUpUser) {
      toast.success('Sign up success!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      setIsLogin(true);
    } else {
      toast.error('Sign up failed!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }

    return signedUpUser;
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-register-choice">
          <h1 className="auth-title">Sign Up</h1>
          <div className="auth-register-btn-group">
            <button className="auth-social-btn">
              <Google width={24} height={24} /> Continue with Google
            </button>
            <button className="auth-social-btn">
              <Facebook width={24} height={24} /> Continue with Facebook
            </button>
            <button
              className="auth-social-btn"
              onClick={() => setIsLogin(false)}
            >
              <Email width={24} height={24} /> Sign Up with Email
            </button>
          </div>
          <p className="auth-register-terms-text">
            By signing up, you agree to the Terms of Service and acknowledge
            you’ve read our Privacy Policy.
          </p>
        </div>
        <div className="auth-form">
          <h1 className="auth-title">
            {isLogin ? 'Log in' : 'Sign Up with Email'}
          </h1>
          {/* Login Start */}
          {isLogin && (
            <form
              className="form-group"
              onSubmit={handleLoginSubmit(loginSubmit)}
            >
              <div className="form-input-group">
                <label htmlFor="userEmail" className="form-label">
                  Email
                </label>
                <input
                  id="userEmail"
                  type="email"
                  {...loginForm('userEmail')}
                  className="form-input"
                />
                {loginError.userEmail && (
                  <span className="form-error">
                    {loginError.userEmail.message}
                  </span>
                )}
              </div>
              <div className="form-input-group">
                <label htmlFor="userEmail" className="form-label">
                  Password
                </label>
                <input
                  id="userEmail"
                  type={isLoginHide ? 'password' : 'text'}
                  {...loginForm('userPassword')}
                  className="form-input"
                />
                {loginError.userPassword && (
                  <span className="form-error">
                    {loginError.userPassword.message}
                  </span>
                )}
                <Link href="#" className="form-forgot">
                  Forgot your password?
                </Link>
                <PasswordHide
                  width={24}
                  height={24}
                  className="form-password-hide-btn"
                  onClick={() => setIsLoginHide(prev => !prev)}
                />
              </div>
              <div className="form-btn-container">
                <button type="submit" className="form-btn">
                  Log in
                </button>
              </div>
            </form>
          )}
          {/* Login End */}
          {/* Sign Up Start */}
          {!isLogin && (
            <form
              className="form-group"
              onSubmit={handleRegisterSubmit(signUpSubmit)}
            >
              <div className="form-input-group">
                <label htmlFor="userRegisterEmail" className="form-label">
                  Email
                </label>
                <input
                  id="userRegisterEmail"
                  type="email"
                  {...registerForm('userEmail')}
                  className="form-input"
                />
                {registerError.userEmail && (
                  <span className="form-error">
                    {registerError.userEmail.message}
                  </span>
                )}
              </div>
              <div className="form-input-group">
                <label htmlFor="userRegisterPassword" className="form-label">
                  Password
                </label>
                <input
                  id="userRegisterPassword"
                  type={isRegisterHide ? 'password' : 'text'}
                  {...registerForm('userPassword')}
                  className="form-input"
                />
                {registerError.userPassword && (
                  <span className="form-error">
                    {registerError.userPassword.message}
                  </span>
                )}
                <PasswordHide
                  width={24}
                  height={24}
                  className="form-password-hide-btn"
                  onClick={() => setIsRegisterHide(prev => !prev)}
                />
              </div>
              <div className="form-input-group">
                <label htmlFor="userRegisterPassword" className="form-label">
                  Repeat Password
                </label>
                <input
                  id="userRegisterPassword"
                  type={isRegisterRepeatHide ? 'password' : 'text'}
                  {...registerForm('userConfirmPassword')}
                  className="form-input"
                />
                {registerError.userConfirmPassword && (
                  <span className="form-error">
                    {registerError.userConfirmPassword.message}
                  </span>
                )}
                <button
                  className="form-redirect-login"
                  onClick={() => setIsLogin(true)}
                >
                  You have an Account?
                </button>
                <PasswordHide
                  width={24}
                  height={24}
                  className="form-password-hide-btn"
                  onClick={() => setIsRegisterRepeatHide(prev => !prev)}
                />
              </div>
              <div className="form-btn-container">
                <button type="submit" className="form-btn">
                  Register
                </button>
              </div>
            </form>
          )}
          {/* Sign Up End */}
        </div>
      </div>
    </>
  );
};

export default UserAuth;
