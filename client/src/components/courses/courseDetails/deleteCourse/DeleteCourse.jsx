import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { deleteCourseById } from "../../../../dataService/courseService";
import { DataContext } from "../../../../context/dataContext";

export default function DeleteCourse() {
    const { userData, setUserData } = useContext(DataContext);
    const { _Id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const deleteCourse = async () => {
            try {
                await deleteCourseById(_Id);
                setUserData((prev) => {
                    return {
                        ...prev,
                        createdCourses: prev.createdCourses.filter((courseId) => courseId !== _Id)
                    }
                })
                navigate("/courses");
            } catch (error) {
                console.error("Error deleting course:", error);
                navigate("/404");
            }
        };

        deleteCourse();
    }, [_Id, navigate]);

    return null;
}
