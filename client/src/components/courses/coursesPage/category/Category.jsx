import { Link } from 'react-router-dom';
import { categories } from '../../../../utils/categories';
export default function Category() {
   
    return (

        <div
            className="pt-30px pr-15px pl-10px pb-23px 2xl:pt-10 2xl:pr-25px 2xl:pl-5 2xl:pb-33px mb-30px flex flex-col items-center"
            data-aos="fade-up"
        >
            <h4
                className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold leading-30px mb-25px text-center"
            >
                Categories
            </h4>
            <ul className="flex gap-x-4 flex-wrap justify-center">
                {categories.map((category,index) => (
                    <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor text-sm font-medium px-4 py-2 border border-borderColor dark:border-borderColor-dark flex justify-between leading-7 transition-all duration-300">
                    <Link
                        to={category.path}>
                        {category.title}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    );
}