import { useContext, useState } from "react";
import AuthContext from "../../../../../context/authContext";
import { DataContext } from "../../../../../context/dataContext";
import { addToWishlist, removeFromWishlist } from "../handleWishlist";

export default function WishlistButton({ courseId }) {
    const { user } = useContext(AuthContext);
    const { userData } = useContext(DataContext);
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
    const [isRemovingFromWishlist, setIsRemovingFromWishlist] = useState(false);
    const isInWishlist = userData?.wishlist?.includes(courseId);

    const handleWishlistClick = async () => {
        if (!user) {
            return;
        }
        const { _id: userId } = user;

        if (!isInWishlist) {
            await addToWishlist(courseId, userId, userData, setIsAddingToWishlist);
        } else {
            await removeFromWishlist(courseId, userId, userData, setIsRemovingFromWishlist);
        }
    };

    return (
        <button
            onClick={handleWishlistClick}
            className={`rounded-lg px-3 py-1 transition-all duration-300 ${!isInWishlist
                ? 'bg-opacity-15 text-gray-400 border border-gray-400 hover:bg-gray-100'
                : 'bg-primaryColor text-white'
                }`}
        >
            <i className={`icofont-heart-alt text-base ${isInWishlist ? 'text-red-500' : 'text-gray-400'}`} />
        </button>
    );
};
