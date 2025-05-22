
import { useEffect } from "react";
import StaticForm from "./StaticForm";

const AddSolutionForm = ({ setActiveStep }) => {  
  useEffect(() => {
    
  }, []);

  return (
    <StaticForm 
      setActiveStep={setActiveStep} 
      step="add-solution-form"
    />
  );
};

export default AddSolutionForm;
