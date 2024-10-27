import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCourseById } from "../../../../dataService/courseService";
import ConfirmModal from "../../../modal/Modal";


export default function DeleteButton({ course }) {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response = await deleteCourseById(course._id);
            console.log(response?.message);
            navigate("/courses");
        } catch (error) {
            navigate("/404");
        } finally {
            setShowConfirmModal(false);
        }
    };

    return (
        <div>
            <button
                onClick={() => setShowConfirmModal(true)}
                type="button"
                className="w-full text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px mb-10px leading-1.8 border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-secondaryColor dark:hover:bg-whiteColor-dark"
            >
                Delete
            </button>
            {showConfirmModal && (
                <ConfirmModal
                    message="Are you sure you want to delete this course?"
                    onConfirm={handleDelete}
                    onCancel={() => setShowConfirmModal(false)}
                />
            )}
        </div>
    );
}
