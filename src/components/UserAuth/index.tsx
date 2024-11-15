'use client';
import Google from '@/app/images/auth-google.svg';
import Facebook from '@/app/images/auth-facebook.svg';
import Email from '@/app/images/auth-email.svg';
import PasswordHide from '@/app/images/password-hide.svg';
import './UserAuth.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

const UserAuth = () => {
  const [isLoginHide, setIsLoginHide] = useState<boolean>(true);
  const [isRegisterHide, setIsRegisterHide] = useState<boolean>(true);
  const [isRegisterRepeatHide, setIsRegisterRepeatHide] =
    useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  type FormLoginProps = {
    userEmail: string;
    userPassword: string;
  };

  type FormRegisterProps = {
    userEmail: string;
    userPassword: string;
    userConfirmPassword: string;
  };

  const { register: loginForm, handleSubmit: handleLoginSubmit } =
    useForm<FormLoginProps>();
  const { register: registerForm, handleSubmit: handleRegisterSubmit } =
    useForm<FormRegisterProps>();
  const onSubmit: SubmitHandler<FormLoginProps> = data => {
    console.log(data);
  };

  return (
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
          <button className="auth-social-btn" onClick={() => setIsLogin(false)}>
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
        {isLogin && (
          <form className="form-group" onSubmit={handleLoginSubmit(onSubmit)}>
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
        {!isLogin && (
          <form
            className="form-group"
            onSubmit={handleRegisterSubmit(onSubmit)}
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
      </div>
    </div>
  );
};

export default UserAuth;
