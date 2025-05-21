import BreadcrumbNav from "../components/Breadcrumb/BreadcrumbNav";
import StartedFlowsTable from "../components/Tables/StartedFlowsTable";

const Flows = () => {
    return (
        <main className="content">
            <BreadcrumbNav />
            <StartedFlowsTable />
        </main>
    );
};

export default Flows;