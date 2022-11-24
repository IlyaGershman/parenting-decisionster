import Form from "../../components/ActivityForm";

const NewActivity = () => {
  const activityForm = {
    name: "",
    image_url: "",
  };

  return <Form formId="add-pet-form" activityForm={activityForm} />;
};

export default NewActivity;
