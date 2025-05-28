import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import BreadcrumbNav from '../components/Breadcrumb/BreadcrumbNav';
import StartFlowContainer from '../components/StartFlow/StartFlowContainer';
import LoadingComponent from '../components/LoadingComponent';
import { FormDataSliceActions } from '../store/formData-slice';

const StartFlow = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.formDataReducer.isLoading);
  const { t } = useTranslation('common');

  useEffect(() => {
    dispatch(FormDataSliceActions.clearDesignAndSolutionItems());
  }, [dispatch]);

  const order = useMemo(() => {
    return [
      {
        title: t('breadcrumb_flows_subtitle1'),
        url: '/flows',
      },
      {
        title: t('breadcrumb_flows_subtitle2'),
        url: '/flows/start',
      },
    ];
  }, [t]);

  return (
    <main className='content px-4'>
      {isLoading && <LoadingComponent />}
      <BreadcrumbNav page={t('breadcrumb_flows_header')} order={order} />
      <StartFlowContainer />
    </main>
  );
};

export default StartFlow;