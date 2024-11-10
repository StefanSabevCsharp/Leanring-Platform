import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../../modal/Modal";
import { DataContext } from "../../../../context/dataContext";

export default function EditButton({ course }) {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const navigate = useNavigate();

    const handleEdit = async () => {
        navigate(`/courses/edit/${course._id}`);
    };
    return (
        <>
            <button
                onClick={() => setShowConfirmModal(true)}
                type="button"
                className="w-full text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border mb-10px leading-1.8 border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
            >
                Edit
            </button>
            {showConfirmModal && (
                <ConfirmModal
                    message="Are you sure you want to EDIT this course?"
                    onConfirm={handleEdit}
                    onCancel={() => setShowConfirmModal(false)}
                />
            )}
        </>
    );
}