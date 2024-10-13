import { addCourseToWishList, removeCourseFromWishlist } from "../../../../dataService/wishlistService";

export const addToWishlist = async (_id, userId, userData, setIsAddingToWishlist) => {
    try {
        setIsAddingToWishlist(true);
        const response = await addCourseToWishList(_id, userId)
        userData.wishlist.push(_id);
    } catch (err) {
        console.error("Error adding to wishlist:", err);
    } finally {
        setIsAddingToWishlist(false);
    }
};

export const removeFromWishlist = async (_id, userId, userData, setIsRemovingFromWishlist) => {
    try {
        setIsRemovingFromWishlist(true);
        const response = await removeCourseFromWishlist(_id, userId)
        userData.wishlist = userData.wishlist.filter((id) => id !== _id);
      } catch (err) {
        console.error("Error adding to wishlist:", err);
      } finally {
        setIsRemovingFromWishlist(false);
      }
};