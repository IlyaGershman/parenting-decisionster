import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../../components/ActivityForm";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditPet = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: activity, error } = useSWR(
    id ? `/api/activities/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!activity) return <p>Loading...</p>;

  const activityForm = {
    name: activity.name,
    image_url: activity.image_url,
  };

  return (
    <Form
      formId="edit-pet-form"
      activityForm={activityForm}
      forNewPet={false}
    />
  );
};

export default EditPet;
