const Api = {
  fetchUser(user) {
    return fetch(`https://api.github.com/users/${user}`)
      .then(result => result.json())
      .catch(error => error);
  },
};

export default Api;
