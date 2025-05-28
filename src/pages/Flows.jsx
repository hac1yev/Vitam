import BreadcrumbNav from "../components/Breadcrumb/BreadcrumbNav";
import StartedFlowsTable from "../components/Tables/StartedFlowsTable";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";


const Flows = () => {
    const { t } = useTranslation("common");

    const order = useMemo(() => {
        return [
            {
                title: t("breadcrumb_flows_subtitle1"),
                url: '/flows'
            }
        ];
    }, [t]);

    return (
        <main className="content px-4">
            <BreadcrumbNav page={t("breadcrumb_flows_header")} order={order} />
            <StartedFlowsTable />
        </main>
    );
};

export default Flows;