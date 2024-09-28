import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/authContext";

export default function TopElement() {
  const {user} = useContext(AuthContext);
  return (
    <>
      <section>
        <div className="container-fluid-2">
          <div className="bg-naveBlue p-5 md:p-10 rounded-5 flex justify-center md:justify-between items-center flex-wrap gap-2">
            <div className="flex items-center flex-wrap justify-center sm:justify-start">
              <div className="mr-5">
                <img
                  src="../../assets/images/dashbord/dashbord__2.jpg"
                  alt=""
                  className="w-27 h-27 md:w-22 md:h-22 lg:w-27 lg:h-27 rounded-full p-1 border-2 border-darkdeep7 box-content"
                />
              </div>
              <div className="text-whiteColor font-bold text-center sm:text-start">
                <h5 className="text-xl leading-1.2 mb-5px">Hello</h5>
                <h2 className="text-2xl leading-1.24">{`${user.firstName} ${user.lastName} `}</h2>
              </div>
              
            </div>
            
            <div>
              <Link
                to="/courses"
                className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor rounded group text-nowrap flex gap-1 items-center"
              >
                Join New Course
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    
    </>


  );
}