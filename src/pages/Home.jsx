import BreadcrumbNav from "../components/Breadcrumb/BreadcrumbNav";
import WorksonmeTable from "../components/Tables/WorksonmeTable";

const Home = () => {
    return (
        <main className="content">
            <BreadcrumbNav />
            <WorksonmeTable />
        </main>
    );
};

export default Home;