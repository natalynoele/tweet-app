export const getUsers = (users, followingUsers) => {
  const updateUsers = users.map((user) => {                  
    const followUser = followingUsers.length > 0 ? followingUsers.find(id => user.id === id) : false;
    return {
      ...user,
      isFollowing: followUser ? true : false,
    };
  });
  return updateUsers;
};
