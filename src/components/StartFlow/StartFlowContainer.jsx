import { useEffect } from 'react';
import { Box } from '@mui/material';
import axios from '../../api/axios';
import { useDispatch } from 'react-redux';
import { FormDataSliceActions } from '../../store/formData-slice';
import { useSearchParams } from 'react-router-dom';
import AddSolutionForm from '../Forms/AddSolutionForm';
import SmetaDesignForm from '../Forms/SmetaDesignForm';
import SendToSmetaForm from '../Forms/SendToSmetaForm';
import StartToWorksForm from '../Forms/StartToWorksForm';
import CompleteProcessForm from '../Forms/CompleteProcessForm';

export default function StartFlowContainer() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step') || 'helleri-elave-et-formu';  

   useEffect(() => {
    async function fetchData() {
      // setLoading(true);
      try {
        const [smetaStatus, projectList, customerType, customerList, managerList, solutionList, regionList, cancelList] = await Promise.all([
          axios.post("/api/smetaStatsu/smetaStatsuList").then(res => res.data),
          axios.post("/api/proyekt/proyektList").then(res => res.data),
          axios.post("/api/mushteriNov/mushteriNovList").then(res => res.data),
          axios.post("/api/mushteri/mushteriList").then(res => res.data),
          axios.post("api/menecer/menecerList?FirmaNo=109").then(res => res.data),
          axios.post("/api/heller/hellerList").then(res => res.data),
          axios.post("/api/bolge/bolgeList").then(res => res.data),
          axios.post("/api/LegvSebebleri/legvSebebleriList").then(res => res.data),
        ]);
        dispatch(FormDataSliceActions.getAllFormData({ smetaStatus, projectList, customerType, customerList, managerList, solutionList, regionList, cancelList }));
      } catch (err) {
        console.error("Failed to fetch step data", err);
      } finally {
        // setLoading(false);
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <Box sx={{ width: '100%' }}>
      {step === 'helleri-elave-et-formu' && <AddSolutionForm />}
      {step === 'smeta-dizayn-formu' && <SmetaDesignForm />}
      {step === 'smetaya-gonder-formu' && <SendToSmetaForm />}
      {step === 'islere-start-ver-formu' && <StartToWorksForm />}
      {step === 'prosesi-tamamla-formu' && <CompleteProcessForm />}
    </Box>
  );
}