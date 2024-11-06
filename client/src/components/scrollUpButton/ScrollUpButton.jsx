import { useEffect } from "react";

export default function ScrollUpButton() {
    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleScrollButton = () => {
        const scrollUpButton = document.querySelector(".scroll-up");
        if (window.scrollY > 200) {
            scrollUpButton.classList.remove("hidden");
        } else {
            scrollUpButton.classList.add("hidden");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleScrollButton);
        return () => {
            window.removeEventListener("scroll", toggleScrollButton);
        };
    }, []);

    return (
        <div>
            <button
                className="scroll-up w-50px h-50px leading-50px text-center text-primaryColor bg-white hover:text-whiteColor hover:bg-primaryColor rounded-full fixed right-5 bottom-[60px] shadow-scroll-up z-medium text-xl dark:text-whiteColor dark:bg-primaryColor dark:hover:text-whiteColor-dark hidden"
                onClick={handleScrollUp}
            >
                <i className="icofont-rounded-up" />
            </button>
        </div>
    );
}
