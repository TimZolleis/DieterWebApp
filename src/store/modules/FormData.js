const state = {
  FormData: [
    {
      id: "username",
      name: "username",
      type: "text",
      required: "",
      placeholder: "Username",
    },
    {
      id: "password",
      name: "password",
      type: "password",
      required: "",
      placeholder: "Password",
    },
  ],
  Register: [
    {
      id: "username",
      name: "username",
      type: "test",
      required: "",
      placeholder: "Username",
    },
    {
      id: "email",
      name: "email",
      type: "email",
      required: "",
      placeholder: "Email-Address",
    },
    {
      id: "firstName",
      name: "FirstName",
      type: "text",
      required: "",
      placeholder: "First Name",
    },
    {
      id: "lastName",
      name: "lastName",
      type: "text",
      required: "",
      placeholder: "Last Name",
    },
    {
      id: "password",
      name: "Password",
      type: "password",
      required: "",
      placeholder: "Password",
    },
    {
      id: "passwordComparison",
      name: "PasswordComparison",
      type: "password",
      required: "",
      placeholder: "Repeat Password",
    },
  ],
};

const getters = {
  getFormData: (state) => state.FormData,
  getRegisterData: (state) => state.Register,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
