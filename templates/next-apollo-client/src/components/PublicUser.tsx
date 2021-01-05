import { useQuery, gql } from '@apollo/client';

const PublicUser = () => {
  const GET_PUBLIC_USER = gql`
    query {
      user {
        _id
        username
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PUBLIC_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="card">
      <div className="card-body">
        <h3>RealDesk User Profile</h3>
        <p>
          user is {data?.user?.username} ({data?.user?._id})
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default PublicUser;
