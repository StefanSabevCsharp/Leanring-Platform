import useGetBlogs from "../../hooks/useGetBlogs";
import BigBlogCard from "./bigBlog/BigBlogCard";
import SmallBlogCard from "./smallBlog/SmallBlogCard";

export default function News() {
  const [blogs, loading] = useGetBlogs(3);
  if(loading){
    return <div>Loading...</div>
  }
  if(!loading && blogs.length === 0){
    return <div>No blogs found</div>
  }
  if (!loading && blogs.length !== 0) {
    return (
      <section>
        <div className="container pt-100px pb-70px">
          {/* heading */}
          <div className="mb-5 md:mb-10" data-aos="fade-up">
            <div className="relative">
              <div>
                <div className="text-center">
                  <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                    News &amp; Blogs
                  </span>
                </div>
              </div>
              <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor text-center dark:text-blackColor-dark">
                Leatest News &amp; Blog
              </h3>
            </div>
          </div>
          {/* blogs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
            {/* blog 1 */}
            <BigBlogCard blog={blogs[0]} />
            {/* blog 2 & 3 */}
            <div className="lg:col-start-9 lg:col-span-4">
              <div className="flex flex-col gap-y-30px">
                {/* blog 2 */}
                <SmallBlogCard blog={blogs[1]} />
                {/* blog 3 */}
                <SmallBlogCard blog={blogs[2]} />

              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}