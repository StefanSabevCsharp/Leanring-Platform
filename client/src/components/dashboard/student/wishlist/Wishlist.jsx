import CourseCard from "../../../courseCard/CourseCard";

export default function Wishlist({ user }) {
    
    return (
        <div className="lg:col-start-4 lg:col-span-9">
            {/* courses area */}
            <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
                {/* heading */}
                <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
                    <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                        Wishlist
                    </h2>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-30px">
                        
                      {user.wishlist.length == 0 ? 
                      (<h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">There are no courses in wishlist</h2>) 
                      : 
                      user.wishlist.map((course) => 
                      (<CourseCard courseInfo={course} />))}
                    </div>
                </div>
            </div>
        </div>

    );
}