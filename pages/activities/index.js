import Link from "next/link";
import dbConnect from "/lib/dbConnect";
import Activity from "../../models/Activity";

const PetsPage = ({ activities }) => (
  <>
    {/* Create a card for each pet */}
    {activities.map((activity) => (
      <div key={activity._id}>
        <div className="card">
          <img src={activity.image_url} />
          <h5 className="pet-name">{activity.name}</h5>
          <div className="main-content">
            <p className="pet-name">{activity.name}</p>
            <p className="owner">Owner: {activity.owner_name}</p>

            <div className="btn-container">
              <Link
                href="/pets/[id]/edit"
                as={`/pets/${activity._id}/edit`}
                legacyBehavior
              >
                <button className="btn edit">Edit</button>
              </Link>
              <Link
                href="/pets/[id]"
                as={`/pets/${activity._id}`}
                legacyBehavior
              >
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Activity.find({});
  const activities = result.map((doc) => {
    const activity = doc.toObject();
    activity._id = activity._id.toString();
    return activity;
  });

  console.log(JSON.stringify(activities, null, 2));

  return { props: { activities: activities } };
}

export default PetsPage;
