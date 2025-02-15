const userReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS":
    case "CREATE_USER":
      return state;
    default:
      return state;
  }
};

export default userReducer;
