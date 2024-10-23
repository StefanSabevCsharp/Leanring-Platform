import { Link } from "react-router-dom";
import AbstractBanner from "../abstractBanner/AbstractBanner";

export default function NotFound() {
  return (
    <>
    <AbstractBanner name="Error Page" path="Home" page="Error" />
    <section>
  <div className="container py-100px">
    <div className="w-full lg:max-w-770px lg:mx-auto text-center">
      <img
        src="/assets/images/icon/error__1.png"
        alt=""
        className="w-full mb-60px"
      />
      <h3 className="text-size-35 md:text-size-40 lg:text-size-50 leading-10 md:leading-14.5 lg:leading-20 text-blackColor dark:text-blackColor-dark font-bold">
        Oops... It looks like you ‘re lost !
      </h3>
      <p className="text-lg text-contentColor dark:text-contentColor-dark leading-22px">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted
      </p>
      <div className="mt-50px text-center">
        <Link
          to="/"
          className="text-size-15 font-semibold text-whiteColor bg-primaryColor border border-primaryColor px-43px py-4 hover:text-primaryColor hover:bg-whiteColor rounded inline-block dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
        >
          Back To Home <i className="icofont-simple-right" />
        </Link>
      </div>
    </div>
  </div>
</section>

    </>
  );
}