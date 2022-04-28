export const registerStart = () => ({
  type: "REGISTER_START",
});

export const registerSucces = (user1) => ({
  type: "REGISTER_SUCCES",
	payload:user1
});

export const registerFailure = () => ({
  type: "REGISTER_FAILURE",
});

export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSucces = (user) => ({
  type: "LOGIN_SUCCES",
	payload:user
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const logout = () => ({
  type: "LOGOUT",
});
