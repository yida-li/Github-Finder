import React, { useContext } from 'react';
import Useritem from './Useritem';
import { Spinner } from '../layout/Spinner';

import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={maStylage}>
        {users.map(usertrolled => (
          <Useritem key={usertrolled.id} usertrolled={usertrolled}></Useritem>
        ))}
      </div>
    );
  }
};

const maStylage = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};
export default Users;
