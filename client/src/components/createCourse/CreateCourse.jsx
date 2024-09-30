import { useState } from "react";
import CreateCourseBanner from "./createCourseBanner/CreateCourseBanner";
import PageRight from "./pageRight/PageRight";
import FirstForm from "./firstForm/FirstForm";
import SecondForm from "./secondForm/SecondForm";
import ThirdForm from "./thirdForm/ThirdForm";
import FourthForm from "./fourthForm/FourthForm";

export default function CreateCourse() {
    const [activeLi, setActiveLi] = useState(1);
    const [firstFormData, setFirstFormData] = useState({});
    const [secondFormData, setSecondFormData] = useState({});
    const [thirdFormData, setThirdFormData] = useState({});
    
    

    const openLiElement = (liPosition) => {
        if(activeLi === liPosition) {
            setActiveLi(0);
            return;
        }
        setActiveLi(liPosition);
        console.log(liPosition);
    }

    const stylesLi = "accordion mb-5";
    const stylesLiActive = "accordion mb-5 active";

    const closedStyle = "accordion-content transition-all duration-500 overflow-hidden h-0"
    const openStyle = "accordion-content transition-all duration-500 overflow-hidden"

    return (
        <>
            <CreateCourseBanner />
            <div>
                <div className="container pt-100px pb-100px" data-aos="fade-up">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-30px gap-y-5">
                        {/* create course left */}
                        <div data-aos="fade-up" className="lg:col-start-1 lg:col-span-8">
                            <ul className="accordion-container curriculum create-course">
                                {/* accordion */}
                                <li  className={activeLi == 1 ? stylesLiActive : stylesLi}>
                                    <div className="bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-t-md">
                                        {/* controller */}
                                        <div className="py-5 px-30px">
                                            <div onClick={() => openLiElement(1)} className="cursor-pointer accordion-controller flex justify-between items-center text-lg text-headingColor font-semibold w-full dark:text-headingColor-dark font-hind leading-27px rounded-t-md">
                                                <div>
                                                    <span>Course Info</span>
                                                </div>
                                                <svg
                                                    className="transition-all duration-500 rotate-0"
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    fill="#212529"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className={activeLi == 1 ? openStyle : closedStyle}>
                                            <FirstForm />
                                        </div>
                                    </div>
                                </li>
                               
                                {/* accordion */}
                                <li  className={activeLi == 2 ? stylesLiActive : stylesLi}>
                                    <div className="bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark ">
                                        {/* controller */}
                                        <div className="py-5 px-30px">
                                            <div onClick={() => openLiElement(2)} className="cursor-pointer accordion-controller flex justify-between items-center text-lg text-headingColor font-semibold w-full dark:text-headingColor-dark font-hind leading-27px">
                                                <div>
                                                    <span>Course Intro Video</span>
                                                </div>
                                                <svg
                                                    className="transition-all duration-500 rotate-0"
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    fill="#212529"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className={activeLi == 2 ? openStyle : closedStyle}>
                                            <SecondForm />
                                        </div>
                                    </div>
                                </li>
                                {/* accordion */}
                                <li  className={activeLi == 3 ? stylesLiActive : stylesLi}>
                                    <div className="bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark">
                                        {/* controller */}
                                        <div className="py-5 px-30px">
                                            <div onClick={() => openLiElement(3)} className="cursor-pointer accordion-controller flex justify-between items-center text-lg text-headingColor font-semibold w-full dark:text-headingColor-dark font-hind leading-27px">
                                                <div>
                                                    <span>Course Builder</span>
                                                </div>
                                                <svg
                                                    className="transition-all duration-500 rotate-0"
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    fill="#212529"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className={activeLi == 3 ? openStyle : closedStyle}>
                                           <ThirdForm />
                                        </div>
                                    </div>
                                </li>
                                {/* accordion */}
                                <li className={activeLi == 4 ? stylesLiActive : stylesLi}>
                                    <div className="bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark">
                                        {/* controller */}
                                        <div onClick={() => openLiElement(4)}  className="py-5 px-30px">
                                            <div className="cursor-pointer accordion-controller flex justify-between items-center text-lg text-headingColor font-semibold w-full dark:text-headingColor-dark font-hind leading-27px">
                                                <div>
                                                    <span>Additional Information</span>
                                                </div>
                                                <svg
                                                    className="transition-all duration-500 rotate-0"
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    fill="#212529"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className={activeLi == 4 ? openStyle : closedStyle}>
                                            <FourthForm />
                                        </div>
                                    </div>
                                </li>
                                {/* accordion */}
                                
                            </ul>
                            <div className="mt-10 leading-1.8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-30px gap-y-5">
                                <div data-aos="fade-up" className="lg:col-start-1 lg:col-span-4">
                                    <a
                                        href="#"
                                        className="text-whiteColor bg-primaryColor w-full p-13px hover:text-whiteColor hover:bg-secondaryColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-secondaryColor text-center"
                                    >
                                        Preview
                                    </a>
                                </div>
                                <div data-aos="fade-up" className="lg:col-start-5 lg:col-span-8">
                                    <a
                                        href="#"
                                        className="text-whiteColor bg-primaryColor w-full p-13px hover:text-whiteColor hover:bg-secondaryColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-secondaryColor text-center"
                                    >
                                        Create Course
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* create course right*/}
                        <PageRight />
                    </div>
                </div>
            </div>

        </>
    );
}