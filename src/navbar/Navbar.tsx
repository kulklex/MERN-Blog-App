import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const user = true
  const admin = true
  return (
    <>
      <div className="w-full h-12 sticky top-0 flex items-center font-serif">
        <div className="topLeft">
          <div className="flex flex-row m-2 ">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">
              <svg
                className="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-red-600 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className=" hover:text-gray-900 dark:hover:text-white">
              <svg
                className="w-6 h-6 text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            <a href="#" className=" hover:text-gray-900 dark:hover:text-white">
              <svg
                className="w-6 h-6 text-green-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-red-600 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="topCenter">
          <ul className="topList flex justify-between m-0 p-0 list-none">
            <li className="topListItem text-lg font-light"><Link to="/">HOME</Link></li>
            <li className="topListItem text-lg font-light"><Link to="/">ABOUT</Link></li>
            <li className="topListItem text-lg font-light"><Link to="/">CONTACT</Link></li>
            <li className="topListItem text-lg font-light"><Link to="/write">WRITE</Link></li>
           {user && ( <li className="topListItem text-lg font-light"><Link to="/">LOGOUT</Link></li>)}
          </ul>
        </div>
        <div className="topRight flex flex-row items-center justify-center">
         {user ? (<img
            className="topImg rounded-sm bg-cover w-10 h-10"
            src="data:image/jpeg;base64,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"
            alt=""
          />) : (<Link className="link" to='/login'>LOGIN</Link>)}
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="searchIcon mx-4 text-lg text-gray-600 cursor-pointer h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
