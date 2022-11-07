import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS, {
    fetchPolicy: "no-cache"
  });
  const usersList = data?.users || [];

  return (

  )
};

export default Home;
