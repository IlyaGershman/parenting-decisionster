import Link from "next/link";

const Index = ({}) => {
  return (
    <div className="btn-container">
      <Link href="/pets/" as={`/pets/`} legacyBehavior>
        <button className="btn edit">Edit</button>
      </Link>
      <Link href="/pets/" as={`/pets/`} legacyBehavior>
        <button className="btn view">View</button>
      </Link>
    </div>
  );
};

export default Index;
