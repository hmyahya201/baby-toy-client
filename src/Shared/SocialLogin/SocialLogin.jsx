import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
   const {googleSignIn} = useContext(AuthContext);
   const location = useLocation()
   const navigate = useNavigate()
   const from = location.state?.from.pathname || "/";
   const handleGooleLogin = ()=>{
      googleSignIn()
      .then(result=>{
         console.log(result.user)
         navigate(from, {replace: true})
      })
      .then(error=>console.log(error))
   }
   return (
      <div>
         <div className="divider">OR</div>
         <div className="text-center">
            <button onClick={handleGooleLogin} className="btn btn-circle btn-outline">
              G
            </button>
         </div>
      </div>
   );
};

export default SocialLogin;