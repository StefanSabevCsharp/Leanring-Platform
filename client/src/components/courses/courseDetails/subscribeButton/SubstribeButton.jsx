import { useContext } from "react";
import { useSubscribeButton } from "../../../../hooks/useSubstribeButton";
import { DataContext } from "../../../../context/dataContext";

export default function SubscribeButton({courseId, isSubscribed}) {
    const [handleSubscribe, isSubscribing] = useSubscribeButton(courseId);
    const { userData } = useContext(DataContext);
    console.log(isSubscribed);
    return (
        <>
        {!isSubscribed ? 
        ( <button
            onClick={handleSubscribe}
            disabled={isSubscribing}
            type="submit"
            className="w-full text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px mb-10px leading-1.8 border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-secondaryColor dark:hover:bg-whiteColor-dark"
        >
           {isSubscribing ? "Subscribing..." : "Subscribe"}
        </button>) 
        :
         (<button
            onClick={handleSubscribe}
            disabled={isSubscribing}
            type="submit"
            className="w-full text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px mb-10px leading-1.8 border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-secondaryColor dark:hover:bg-whiteColor-dark"
        >
         Unsubscribe
        </button>)}
        </>
       
    );
}