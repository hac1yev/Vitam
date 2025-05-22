import StaticForm from "./StaticForm";

const StartToWorksForm = ({ setActiveStep }) => {
    return (
        <StaticForm 
            setActiveStep={setActiveStep}
            step="start-to-work-form"
        />
    );
};

export default StartToWorksForm;