export default function PageRight() {
    return (
      <div data-aos="fade-up" className="lg:col-start-9 lg:col-span-4">
        <div className="p-30px border-2 border-primaryColor">
          <h2 className="text-lg font-bold mb-4">Validation Guidelines</h2>
          <ul>
            {/* Validation Instructions */}
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The course title must be between <strong>3 and 100 characters</strong>.
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The "About Course" section must be between <strong>10 and 1000 characters</strong>.
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The description must be between <strong>10 and 1000 characters</strong>.
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The language must be between <strong>3 and 30 characters</strong>.
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The selected category must be one of the following: 
                <strong>Web Design, Graphic, English, Spoken English, Art Painting, App Development, Web Application, Php Development</strong>.
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The course image URL must be valid and have a supported image extension 
                (e.g., <strong>.jpg, .jpeg, .png, .gif, .bmp, .svg, .webp</strong>).
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The start date must be in the format <strong>DD.MM.YY</strong> or <strong>DD/MM/YYYY</strong>.
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The discounted price must be a valid number greater than or equal to <strong>0</strong>.
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The regular price must be a valid number greater than or equal to <strong>0</strong>.
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                The discounted price must be less than the regular price.
              </p>
            </li>
            <li className="my-7px flex gap-10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" className="text-greencolor" />
              </svg>
              <p className="text-lg text-contentColor dark:text-contentColor-dark leading-1.45">
                All fields marked with an asterisk (*) are required.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  