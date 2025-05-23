import BreadcrumbNav from "../components/Breadcrumb/BreadcrumbNav";
import StartedFlowsTable from "../components/Tables/StartedFlowsTable";

const order = [
    {
        title: "Akışlar",
        url: '/flows'
    }
]; 

const Flows = () => {
    return (
        <main className="content px-4">
            <BreadcrumbNav page={'Akışlar'} order={order} />
            <StartedFlowsTable />
        </main>
    );
};

export default Flows;