import { Link } from "react-router-dom";
import RecentPostCard from "./recentPostCard/RecentPostCard";
import BlogContactForm from "../../blogContactForm/BlogContactForm";
import { categories } from "../../../../utils/categories";

export default function BlogSidebar( { blogs }) {
    const recentBlogs = blogs.slice(0, 4);
    
    return (
        <>
            {/* blog sidebar */}
            <div className="lg:col-start-9 lg:col-span-4">
                <div className="flex flex-col">
                   
                    <div
                        className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark text-center"
                        data-aos="fade-up"
                    >
                        
                        <div className="mb-30px flex justify-center">
                            <img
                                src="/assets/images/mypic.jpg"
                                alt=""
                                className="w-24 h-24 rounded-full"
                            />
                        </div>
                        <div className="mb-3">
                            <h3 className="mb-7px">
                                <a
                                    href="https://www.linkedin.com/in/stefan-sabev-952a5620a/"
                                    className="text-xl font-bold text-blackColor2 dark:text-blackColor2-dark"
                                >
                                   Stefan Sabev
                                </a>
                            </h3>
                            <p className="text-xs text-contentColor2 dark:text-contentColor2-dark">
                                Frond End Developer
                            </p>
                        </div>
                        {/* description */}
                        <p className="text-sm text-contentColor dark:text-contentColor-dark mb-15px">
                        Passionate about crafting responsive, user-friendly web applications using modern front-end technologies. With a keen eye for design and performance, I aim to create seamless digital experiences.

                        </p>
                        {/* social */}
                        <div>
                            <ul className="flex gap-10px justify-center items-center">
                                <li>
                                    <a
                                        href="https://www.facebook.com/stefan.sabev.94"
                                        className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                    >
                                        <i className="icofont-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/stefan-sabev-952a5620a/"
                                        className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                    >
                                        <i className="icofont-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/stevenbg91/"
                                        className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                    >
                                        <i className="icofont-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/StefanSabevCsharp"
                                        className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                    >
                                        <i className="icofont-github" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* categories */}
                    <div
                        className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                        data-aos="fade-up"
                    >
                        <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                            Course Categories
                        </h4>
                        <ul className="flex flex-col gap-y-4">
                            {categories.map((category, index) => (
                                <li key={index} className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor transition-all duration-300 text-sm font-medium px-4 py-2 border border-borderColor2 hover:border-primaryColor dark:border-borderColor2-dark dark:hover:border-primaryColor flex justify-between leading-7">
                                    <Link to={category.path}>{category.title}</Link>
                                    <span>{category.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* recent posts */}
                    <div
                        className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                        data-aos="fade-up"
                    >
                        <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                            Recent Blogs
                        </h4>
                        <ul className="flex flex-col gap-y-25px">
                            {recentBlogs.map((blog, index) => (<RecentPostCard blog={blog} key={index} index={index} />))}
                           
                        </ul>
                    </div>
                  
                    {/* contact form */}
                   <BlogContactForm />
                    {/* tags */}
                   
                    {/* social area */}
                    <div
                        className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                        data-aos="fade-up"
                    >
                        <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                            Follow Me
                        </h4>
                        <div>
                            <ul className="flex gap-10px items-center">
                                <li>
                                    <a
                                        href="https://www.facebook.com/stefan.sabev.94"
                                        className="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                                    >
                                        <i className="icofont-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/stefan-sabev-952a5620a/"
                                        className="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                                    >
                                        <i className="icofont-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/stevenbg91/"
                                        className="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                                    >
                                        <i className="icofont-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/StefanSabevCsharp"
                                        className="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                                    >
                                        <i className="icofont-github" />
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}