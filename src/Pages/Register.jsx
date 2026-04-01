import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className='flex flex-col mx-auto min-h-screen justify-center items-center'>
            <div className=" ml-5 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <div className="card-body scroll-px-0.5">
                    <h2 className='font-semibold text-2xl'>LogIn</h2>

                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <Link to className="btn btn-primary mt-4 mb-2">Login</Link>
                        <p className='mx-auto'>Don't have an account? <Link to="/auth/register" className='text-primary' >Create an account</Link> </p>
                    </fieldset>
                </div>
            </div>

            <div className="flex mx-auto w-3/15 flex-col">
                <div className="divider">OR</div>
            </div>
            <button className="btn w-3/15 bg-transparent text-black border-[#005fd8] rounded-2xl">
                <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="black" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                Continue With Facebook
            </button>
            <button className="btn w-3/15 mt-3 rounded-2xl border-[#005fd8] bg-white text-black">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Continue With Google
            </button>

        </div>
        </div>
    );
};

export default Register;