import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Trieu Ngoc Hai',
      image: 'https://pa1.narvii.com/6849/bd18e7420cfb7ebeb88d43041fcd695bb61cd2a7_hq.gif',
      places: 3
    }
  ];
  
  return <UsersList items={USERS}/>
};

export default Users;