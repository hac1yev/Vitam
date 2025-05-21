import BreadcrumbNav from "../components/Breadcrumb/BreadcrumbNav";
import DemoTable from "../components/Tables/DemoTable";
import WorksonmeTable from "../components/Tables/WorksonmeTable";

const Home = () => {
    return (
        <main className="content">
            <BreadcrumbNav />
            <DemoTable />
        </main>
    );
};

export default Home;