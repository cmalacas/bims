import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import LoginLayout from '@/Layouts/LoginLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
        <Head title="Login" />
        <LoginLayout>
           
            <form onSubmit={ submit } className="login100-form validate-form">
                
                <span className="login100-form-title p-b-43">
                    Login to continue
                </span>
                
                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input 
                        className="input100" 
                        type="text" 
                        name="email" 
                        value={data.email}
                        onChange={ handleOnChange }
                    />
                    <span className="focus-input100"></span>
                    <span className="label-input100">Email</span>
                </div>
                
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input 
                        className="input100" 
                        type="password" 
                        name="pass" 
                        value={data.password}
                        onChange={ handleOnChange }
                    />
                    <span className="focus-input100"></span>
                    <span className="label-input100">Password</span>
                </div>
                
                <div className="flex-sb-m w-full p-t-3 p-b-32">
                    <div className="contact100-form-checkbox">
                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                        <label className="label-checkbox100">
                            Remember me
                        </label>
                    </div>
                <div>

                <a href="#" className="txt1">
                    Forgot Password?
                </a>
            </div>
        </div>
        <div className="container-login100-form-btn">
            <button className="login100-form-btn">
                Login
            </button>
        </div>        
    </form>

    
        </LoginLayout>
        </>
    );
}
