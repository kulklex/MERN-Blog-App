import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../models/postModel";

export default function Sidebar() {
  const [cats, setCats] = useState<Category[]>([])

  useEffect(() => {
    const getCats = () =>  {
      axios.get("/categories")
      .then((res) => {
        setCats(res.data)
      })
      .catch((err) => console.log(err))
    }
    getCats()
  })
  return (
    <div className="sideBar bg-white rounded-lg flex flex-col items-center">
      <div>
      {/* <div className="sideBarItem flex flex-col items-center">
        <span className="sideBarTitle ">ABOUT ME</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="sideBarImg  w-[70%] h-[50%]"
        />
        <p className="sideBarText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div> */}
      </div>
      <div className="sideBarItem flex flex-col items-center">
        <span className="sideBarTitle border-t-2  m-2 p-1 w-[80%]">CATEGORIES</span>
        <ul className="sideBarList list-none mb-4">
          {cats.map((category) => (
            <Link to={`/?cat=${category.name}`}><li key={category._id} className="sideBarListItem inline-block w-1/2 mt-4 cursor-pointer">{category.name}</li></Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem flex flex-col items-center">
        <span className="sideBarTitle border-t-2  m-2 p-1 w-[80%]">FOLLOW US</span>
        <div className="sideBarSocial mt-4 flex justify-center">
        <div className="flex flex-row justify-between m-2 ">
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
      </div>
    </div>
  );
}
