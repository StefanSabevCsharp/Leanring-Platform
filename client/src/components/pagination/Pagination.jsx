export default function Pagination({ setPage, totalPages, page }) {
  const handlePageClick = (pageNum) => {
    setPage(pageNum);
    setTimeout(() => {
      window.scrollTo({ top: 800, behavior: "smooth" });
    }, 100); 
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
      setTimeout(() => {
        window.scrollTo({ top: 800, behavior: "smooth" });
      }, 100);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
      setTimeout(() => {
        window.scrollTo({ top: 800, behavior: "smooth" });
      }, 100);
    }
  };


  return (
    <div>
      <ul className="flex items-center justify-center gap-15px mt-60px mb-30px">

        <li>
          <button
            onClick={handlePrevious}
            disabled={page === 1}
            className={`w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center ${page === 1
                ? "cursor-not-allowed text-blackColor2 bg-whitegrey1 dark:text-blackColor2-dark dark:bg-whitegrey1-dark"
                : "text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor"
              }`}
          >
            <i className="icofont-double-left" />
          </button>
        </li>


        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i + 1}>
            <button
              onClick={() => handlePageClick(i + 1)}
              className={`w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center ${page === i + 1
                  ? "text-whiteColor bg-primaryColor dark:bg-primaryColor"
                  : "text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor"
                }`}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center ${page === totalPages
                ? "cursor-not-allowed text-blackColor2 bg-whitegrey1 dark:text-blackColor2-dark dark:bg-whitegrey1-dark"
                : "text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor"
              }`}
          >
            <i className="icofont-double-right" />
          </button>
        </li>
      </ul>
    </div>
  );
}
