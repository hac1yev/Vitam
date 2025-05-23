import BreadcrumbNav from '../components/Breadcrumb/BreadcrumbNav';
import StartFlowContainer from '../components/StartFlow/StartFlowContainer';

const order = [
    {
        title: "Akışlar",
        url: '/flows'
    },
    {
        title: "Akış başlat",
        url: '/flows/start'
    },
]; 

export default function StartFlow() {
  return (
    <main className='content px-4'>
        <BreadcrumbNav page="Akışlar" order={order} />
        <StartFlowContainer />
    </main>
  );
}