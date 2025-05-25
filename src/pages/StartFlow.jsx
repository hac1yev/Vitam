import { useEffect } from 'react';
import BreadcrumbNav from '../components/Breadcrumb/BreadcrumbNav';
import StartFlowContainer from '../components/StartFlow/StartFlowContainer';
import { useDispatch, useSelector } from 'react-redux';
import { FormDataSliceActions } from '../store/formData-slice';
import LoadingComponent from '../components/LoadingComponent';

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
  const isLoading = useSelector((state) => state.formDataReducer.isLoading);

  useEffect(() => {
    dispatch(FormDataSliceActions.clearDesignAndSolutionItems());
  }, [dispatch]);

  return (
    <main className='content px-4'>
        {isLoading && <LoadingComponent />}
        <BreadcrumbNav page="Akışlar" order={order} />
        <StartFlowContainer />
    </main>
  );
}