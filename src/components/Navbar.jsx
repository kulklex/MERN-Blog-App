import { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Context } from "../context/Context";

export default function Navbar() {
  const {user, dispatch} = useContext(Context)
  const PublicFolder = `${process.env.REACT_APP_SERVER_HOST_NAME}/images/`


  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }
  return (
    <>
      <div className="w-full h-12 sticky top-0 flex items-center font-serif">
        <div className="hidden lg:block topLeft">
          <div className="headerTitles flex flex-col items-center font-serif text-gray-600">
              <span className="headerTitleLg  top-[20%] text-3xl">Blog</span>
          </div>
        </div>
        <div className="topCenter m-1">
          <ul className="topList flex justify-between md:m-0 md:p-0 list-none">
            <li className="topListItem text-lg font-light"><Link to="/">HOME</Link></li>
            <li className="topListItem text-lg font-light"><Link to="/">ABOUT</Link></li>
            <li className="topListItem text-lg font-light"><Link to="/">CONTACT</Link></li>
            {user && (<li className="topListItem text-lg font-light"><Link to="/write">WRITE</Link></li>)}
           {user && ( <li onClick={handleLogout} className="topListItem text-lg font-light cursor-pointer">LOGOUT</li>)}
          </ul>
        </div>
        <div className="md:topRight flex flex-row items-center justify-center">
         {user ? (
         <Link to="/settings">
         <img
            className="topImg mx-2 lg:mx-4 rounded-2xl bg-cover w-10 h-10 cursor-pointer"
            src={PublicFolder + user?.user?.profilePic} alt=""
          />
          </Link>
          ) : (<Link className="link" to='/login'>LOGIN</Link>)}
          
        </div>
      </div>
    </>
  );
}
