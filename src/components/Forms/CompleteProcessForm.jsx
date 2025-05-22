import StaticForm from "./StaticForm";

const CompleteProcessForm = ({ setActiveStep }) => {
    return (
        <StaticForm 
            setActiveStep={setActiveStep}
            step="complete-process-form"
        />
    );
};

export default CompleteProcessForm;