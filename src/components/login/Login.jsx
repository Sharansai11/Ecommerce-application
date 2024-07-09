import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function onSignUpFormSubmit(userCred) {
        navigate("/home");
    }


    return (
        <section className="bg-gray-50">
            <div className="px-4 py-20 mx-auto" style={{ maxWidth: '500px' }}>

                <h1 className="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">
                    Sign in to your account
                </h1>
                <div className="pb-1 space-y-4">
                    <div className="card shadow">
                        <div className="card-title text-center border-bottom" >
                            <h2 className="p-3">Signin</h2>
                        </div>
                        <div className="card-body">
                           
                            <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
                               
                                <div className="mb-4">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" {...register("username")} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" {...register("password")} />
                                </div>
                                <div className="d-flex flex-column align-items-start justify-content-between sm:flex-row">
                                    <label className="d-flex align-items-center">
                                        <input type="checkbox" className="form-check-input" />
                                        <span className="ms-2 text-xs font-medium text-gray-700">Agree to Privacy Policy</span>
                                    </label>
                                    <button type="submit" className="btn btn-primaryw-100 mt-3 sm:w-auto sm:mt-0">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <p className="my-0 text-xs font-medium text-center text-gray-700 sm:my-5">
                    Don't have an account?
                    <Link to='/signup' className="text-purple-700 hover:text-purple-900"> Sign up</Link>
                </p>
            </div>
        </section>
    );
}

export default Signin;
