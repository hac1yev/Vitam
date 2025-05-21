import BreadcrumbNav from "../components/Breadcrumb/BreadcrumbNav";
import StartedFlowsTable from "../components/Tables/StartedFlowsTable";

const Flows = () => {
    return (
        <main className="content px-4">
            <BreadcrumbNav />
            <StartedFlowsTable />
        </main>
    );
};

export default Flows;