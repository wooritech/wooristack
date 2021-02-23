import { useQuery, gql } from '@apollo/client';

const REPOSITORY_FRAGMENT = gql`
  fragment repository on Repository {
    id
    name
    url
    descriptionHTML
    primaryLanguage {
      name
    }
    owner {
      login
      url
    }
    stargazers {
      totalCount
    }
    viewerHasStarred
    watchers {
      totalCount
    }
    viewerSubscription
  }
`;

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  query($cursor: String) {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: ASC, field: CREATED_AT }
        after: $cursor
      ) {
        edges {
          node {
            ...repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;

const Repositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES_OF_CURRENT_USER);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div>
        <h4>Error :( </h4>
        <pre>{JSON.stringify(error, null, 1)}</pre>
      </div>
    );

  const { repositories } = data.viewer;
  console.log('repo data: ', repositories);

  return (
    <div className="card">
      <div className="card-body">
        <h3>My Repositories</h3>
        {repositories.edges.map(({ node }, idx: number) => {
          return (
            <p key={idx}>
              {node.name}, {node.watchers.totalCount}
            </p>
          );
        })}
        <div>
          {repositories.pageInfo.startCursor} /{' '}
          {repositories.pageInfo.endCursor} /{' '}
          {repositories.pageInfo.hasNextPage}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
