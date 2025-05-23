import DynamicForm from "./DynamicForm";

const CompleteProcessForm = () => {
    return (
        <DynamicForm nextStep={'/flows'} currentStep='prosesi-tamamla-formu' />
    );
};

export default CompleteProcessForm;