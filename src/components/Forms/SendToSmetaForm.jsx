import StaticForm from "./StaticForm";

const SendToSmetaForm = ({ setActiveStep }) => {
    return (
        <StaticForm 
            setActiveStep={setActiveStep}
            step="send-to-smeta-form"
        />
    );
};

export default SendToSmetaForm;