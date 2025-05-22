import StaticForm from "./StaticForm";

const SmetaDesignForm = ({ setActiveStep }) => {
    return (
        <StaticForm 
            setActiveStep={setActiveStep}
            step="smeta-design-form"
        />
    );
};

export default SmetaDesignForm;