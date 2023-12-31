import { Link } from 'react-router-dom';
import img from '../../assets/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProviders/AuthProviders';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .then(error=>console.log(error))
        console.log(name, email, password);
        form.reset()

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
                <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
                   <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sing Up" />
                         </div>
                   </form>
                   <p>Have an account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
                   <SocialLogin/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;