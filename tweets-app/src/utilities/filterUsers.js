export const filterUsers = (users, filter) => {
  switch (filter) {
    case 'all':
      return users  
    case 'true': 
      return users.filter((user) => user.isFollowing === true);         
    case 'false': 
      return users.filter(user => user.isFollowing === false)  
    default:
      return users
  }

};
