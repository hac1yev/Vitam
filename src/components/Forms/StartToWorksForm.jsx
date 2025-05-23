import DynamicForm from "./DynamicForm";

const StartToWorksForm = () => {
    return (
        <DynamicForm nextStep='prosesi-tamamla-formu' currentStep='islere-start-ver-formu' />
    );
};

export default StartToWorksForm;