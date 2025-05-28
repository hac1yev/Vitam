import { useTranslation } from "react-i18next";
import BreadcrumbNav from "../components/Breadcrumb/BreadcrumbNav";
import WorksonmeTable from "../components/Tables/WorksonmeTable";
import { useMemo } from "react";

const Home = () => {
    const { t } = useTranslation('common');

    const order = useMemo(() => {
        return [
            {
                title: t('breadcrumb_homepage_subtitle1'),
                url: '/'
            }
        ]; 
    }, [t]);

    return (
        <main className="content px-4">
            <BreadcrumbNav page={t('breadcrumb_homepage_header')} order={order} />
            <WorksonmeTable />
        </main>
    );
};

export default Home;