import BreadcrumbNav from "../components/Breadcrumb/BreadcrumbNav";
import WorksonmeTable from "../components/Tables/WorksonmeTable";

const order = [
    {
        title: "Ana sayfa",
        url: '/'
    }
]; 

const Home = () => {
    return (
        <main className="content px-4">
            <BreadcrumbNav page="Ana sayfa" order={order} />
            <WorksonmeTable />
        </main>
    );
};

export default Home;