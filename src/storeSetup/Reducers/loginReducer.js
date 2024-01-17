const initialState = {
  name: "",
  mobileNumber: "",
  password: "",
};

const LOGIN = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return "";

    default:
      return "";
  }
};

export default LOGIN;
