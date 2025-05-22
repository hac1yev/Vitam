import * as React from 'react';
import { Box, Typography } from '@mui/material';
import AddSolutionForm from './AddSolutionForm';
import SmetaDesignForm from './SmetaDesignForm';
import SendToSmetaForm from './SendToSmetaForm';
import StartToWorksForm from './StartToWorksForm';
import CompleteProcessForm from './CompleteProcessForm';

const steps = ['Həlləri əlavə et', 'Smeta dizayn göndər', 'Smetaya göndər', 'İşlərə start ver', 'Prosesi tamamla'];
const stepComponents = [
  AddSolutionForm,
  SmetaDesignForm,
  SendToSmetaForm,
  StartToWorksForm,
  CompleteProcessForm,
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const FormComponent = stepComponents[activeStep];

  return (
    <Box sx={{ width: '100%' }}>
      {activeStep === steps.length ? (
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed — you're finished!
        </Typography>
      ) : (
        <Box sx={{ mt: 2, mb: 1 }}>
          <FormComponent setActiveStep={setActiveStep} />
        </Box>
      )}
    </Box>
  );
}