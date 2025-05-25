import { useEffect } from 'react';
import BreadcrumbNav from '../components/Breadcrumb/BreadcrumbNav';
import StartFlowContainer from '../components/StartFlow/StartFlowContainer';
import { useDispatch } from 'react-redux';
import { FormDataSliceActions } from '../store/formData-slice';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FormDataSliceActions.clearDesignAndSolutionItems());
  }, [dispatch]);

  return (
    <main className='content px-4'>
        <BreadcrumbNav page="Akışlar" order={order} />
        <StartFlowContainer />
    </main>
  );
}