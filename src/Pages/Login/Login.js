import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from.pathname || "/";
    useEffect(()=>{
        if (user || gUser) {
            navigate(from ,{replace:true});
        }
    },[user,gUser,from,navigate])

    if ( loading || gLoading) {
        return <Spinner></Spinner>
    }

    if (error || gError) {

        signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {

                                    value: true.valueOf,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input
                            type="password"
                            placeholder="Your password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {

                                    value: true.valueOf,
                                    message: 'Email is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password should be six characters or more'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                        </label>
                    </div>


                    {signInError}
                    <input className='btn w-full max-w-xs' type="submit" value="Login" />
                </form>
                <p>New to village doctor <Link className='text-secondary' to ="/register">Creat New account</Link></p>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline"
                >Continue with google</button>
            </div>
        </div>
    </div>
    );
};

export default Login;