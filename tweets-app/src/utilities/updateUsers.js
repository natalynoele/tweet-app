export const updateUsers = (users, followingUsers) => {
  const updatedUsers = users.map((user) => {                  
    const isFollowing =
      followingUsers.length > 0 && followingUsers.find((id) => user.id === id)
        ? true
        : false;  
    return {
      user,
      isFollowing
    }
  });
    return updatedUsers;
};

