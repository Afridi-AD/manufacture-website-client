import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Spinner from '../Shared/Spinner';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    //   const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [token] =useToken(user || gUser)
      const navigate = useNavigate();
    let signInError;

    if ( loading || gLoading ) {
        return <Spinner></Spinner>
    }

    if (error || gError ) {

        signInError = <p className='text-red-500'>{error?.message || gError?.message }</p>
    }

    if (token) {
        console.log( user || gUser);
        navigate('/appointment');
    }
    const onSubmit = async data => {
        console.log(data);
       await createUserWithEmailAndPassword(data.email, data.password);
        // await updateProfile({displayName:data.name});
        // console.log('update done');

       
       

    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Register</h2>
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
                            <span className="label-text">Name</span>

                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {

                                    value: true.valueOf,
                                    message: 'Name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            


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
                                    message: 'Password is required'
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
                    <input className='btn w-full max-w-xs' type="submit" value="Register" />
                </form>
                <p>Already have an account <Link className='text-secondary' to ="/login">Please login</Link></p>
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

export default SignUp;