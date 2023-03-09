import { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Context } from "../context/Context";

export default function Navbar() {
  const {user, dispatch} = useContext(Context)
  const PublicFolder = `${process.env.REACT_APP_SERVER_HOST_NAME}/images/`


  const handleLogout = () => {
    if (window.confirm("You're about to logout")) {
      dispatch({type: "LOGOUT"})
    }
  }
  return (
    <>
      <div className="w-full h-12 sticky top-0 flex items-center font-serif z-[999]">
        <div className="topLeft ml-2">
          <i className="topIcon text-blue-400 text-lg mr-[10px] cursor-pointer fab fa-facebook-square"></i>
          <i className="topIcon text-blue-500 text-lg mr-[10px] cursor-pointer fab fa-twitter-square"></i>
          <i className="topIcon text-[#444] text-lg mr-[10px] cursor-pointer fab fa-pinterest-square"></i>
          <i className="topIcon text-red-600 text-lg mr-[10px] cursor-pointer fab fa-instagram"></i>
          <i className="topIcon text-blue-400 text-lg mr-[10px] cursor-pointer fab fa-linkedin"></i>
        </div>
        <div className="topCenter">
          <ul className="topList flex justify-center m-0 p-0 list-none">
            <li className="topListItem text-lg font-light mr-5"><Link to="/">HOME</Link></li>
            <li className="topListItem text-lg font-light mr-5"><Link to="/">ABOUT</Link></li>
            {user && (<li className="topListItem text-lg font-light mr-5"><Link to="/write">WRITE</Link></li>)}
            {user && ( <li onClick={handleLogout} className="topListItem text-lg font-light mr-5 cursor-pointer">LOGOUT</li>)}
            
            {!user && (<li className="topListItem text-lg font-light mr-5"><Link to="/login">LOGIN</Link></li>)}            
            {!user && (<li className="topListItem text-lg font-light mr-5"><Link to="/register">REGISTER</Link></li>)}
          </ul>
        </div>
        <div className="topRight flex flex-[3] items-center justify-center">
         {user ? (
         <Link to="/settings">
         <img
            className="topImg mx-2 lg:mx-4 rounded-2xl bg-cover w-10 h-10 cursor-pointer"
            src={PublicFolder + user?.user?.profilePic} alt=""
          />
          </Link>
          ) : (<>
          </>)}
          
        </div>
      </div>
    </>
  );
}
