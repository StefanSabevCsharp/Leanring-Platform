import { useEffect, useState } from "react";
import useGetBlogs from "../../hooks/useGetBlogs";
import AbstractBanner from "../abstractBanner/AbstractBanner";
import SingleBlogCard from "./singleBlogCard/SingleBlogCard";
import Pagination from "../pagination/Pagination";
import BlogSidebar from "./blogDetails/blogSidebar/BlogSidebar";

export default function Blog() {
  const [blogs, loading, error] = useGetBlogs();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const indexOfLastBlog = page * perPage;
  const indexOfFirstBlog = indexOfLastBlog - perPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  console.log(blogs)

  useEffect(() => {
    if (blogs) {
      setTotalPages(Math.ceil(blogs.length / perPage));
    }
  }, [blogs, perPage]);

  if (blogs && blogs.length === 0) {
    return (
      <>
        <AbstractBanner name="Blog Page" path="Home" page="Blog Page" />

        <div className="container tab py-10 md:py-50px lg:py-60px 2xl:py-100px">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black dark:text-blackColor-dark mb-5">
              No Blogs found
            </h2>
            <p className="text-base text-black dark:text-blackColor-dark">
              Please check back later
            </p>
          </div>
        </div>
      </>

    )

  }
 

    return (
      <>
        <AbstractBanner name="Blog Page" path="Home" page="Blog Page" />
        <section>
          <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
              {/* blogs */}
              <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
                {/* blog 1 */}
                {currentBlogs.map((blog) => (<SingleBlogCard blog={blog} key={blog._Id} />))}
                

                {/* pagination */}
                <Pagination setPage={setPage} totalPages={totalPages} page={page} />
              </div>
              {/* blog sidebar */}
              <BlogSidebar blogs={blogs} />
            </div>
          </div>
        </section>
      </>

    );
  
}