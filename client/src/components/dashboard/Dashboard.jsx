import StudentDashboard from "./student/dashboard/Dashboard";
import StudentNavigation from "./student/navigation/StudentNavigation";
import TopElement from "./topElement/TopElement";

export default function Dashboard() {

    //TODO: to check db for user role and render the appropriate dashboard
    return (
        <>
            <TopElement />
            <section>
                <div className="container-fluid-2">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px pt-30px pb-100px">
                        <div className="lg:col-start-1 lg:col-span-3">
                            {/* navigation menu */}
                            <StudentNavigation />
                        </div>
                        {/* dashboard content */}
                        <StudentDashboard />
                    </div>
                </div>
            </section>

        </>

    );
}