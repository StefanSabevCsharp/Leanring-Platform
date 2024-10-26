import { useState, useEffect } from "react";
import { useSubscribeButton } from "../../../../hooks/useSubscribeButton";

export default function SubscribeButton({ courseId, initialIsSubscribed }) {
    const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed);
    const [handleSubscribe, isSubscribing] = useSubscribeButton(courseId);

    const toggleSubscription = async () => {
        const updatedSubscriptionStatus = await handleSubscribe(isSubscribed);
        setIsSubscribed(updatedSubscriptionStatus);
    };

    return (
        <button
            onClick={toggleSubscription}
            disabled={isSubscribing}
            type="button"
            className={`w-full text-size-15 px-25px py-10px border mb-10px leading-1.8 rounded group inline-block ${
                isSubscribed
                    ? "text-whiteColor bg-secondaryColor border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor"
                    : "text-whiteColor bg-primaryColor border-primaryColor hover:text-primaryColor hover:bg-whiteColor"
            } dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark`}
        >
            {isSubscribing
                ? isSubscribed ? "Unsubscribing..." : "Subscribing..."
                : isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
    );
}
