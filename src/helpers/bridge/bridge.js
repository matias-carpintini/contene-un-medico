const host = "https://adoptamedic.herokuapp.com/api";

/**
 * Request a endpoint to https://adoptamedic.herokuapp.com/api and returns the server response.
 * This couldn't be accessed directly
 * @name bridge
 * @function
 * @param {string} endpoint - The API endpoint to request, host is given by the "host" const
 * @param {sting} [body=] - A URL query string
 * @param {string} [method=POST] - Request method
 * @param {string} [token=] - A token to ad in headers
 * @returns {Object|Any} - The server response
 */

const bridge = async (endpoint, body = "", method = "POST", token = "") => {
  const headers = new Headers();

  headers.append("Content-Type", "application/x-www-form-urlencoded");

  if (token !== "") {
    headers.append("token", token);
  }

  return await fetch(`${host}${endpoint}`, {
    method,
    headers,
    body,
  }).then((response) => response.json());
};

/**
 * Get the doctors list
 * @name getUsers
 * @function
 * @param {sting} token - User token
 * @returns {Object|Any} - The server response
 * @example
 * import bridge from ("path/to/src/helpers/bridge");
 *
 * bridge.getUsers("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9").then(response => {
 *   console.log(response);
 * });
 */

const getUsers = async (token) => {
  return await bridge("/getUsers", "", "GET", token);
};

/**
 * Delete a user in the database
 * @name deleteUser
 * @function
 * @param {sting} token - User token
 * @returns {Object|Any} - The server response
 */

const deleteUser = async (token) => {
  return await bridge("/deleteUser", "", "DELETE", token);
};

/**
 * Returns the user token if login has been successful or a message if not
 * @param {string} email - User email
 * @param {string} password - User Password
 * @returns {Object|Any} - The server response
 */

const loginUser = async (email, password) => {
  const body = new URLSearchParams({ email, password }).toString();
  return await bridge("/loginUser", body);
};

/**
 * Creates a new user, if signup has been successful return the user token
 * @param {Object} user
 * @param {string} user.full_name
 * @param {string} user.level_of_studies
 * @param {string} user.profession
 * @param {string} user.home
 * @param {string} user.phone
 * @param {string} user.email
 * @param {string} user.country
 * @param {string} user.password
 * @param {string} user.is_health_professional
 * @param {string} user.resume
 * @param {string} user.courses
 * @param {string} user.nationality
 * @param {string} user.workspace
 * @param {string} user.position
 * @param {string} user.childs
 * @param {string} user.marital_status
 * @param {string} user.people_live_with_you
 * @param {string} user.dependents
 *
 * @example
 * import bridge from ("path/to/src/helpers/bridge");
 *
 * const user = {
 *  full_name: "",
 *  level_of_studies: "",
 *  profession: "",
 *  phone: "",
 *  email: "",
 *  birthday: "",
 *  gender: "",
 *  dni: "",
 *  home: "",
 *  country: "Argentina",
 *  nationality: "Argentina",
 *  password: "",
 *  is_health_professional: false,
 *  resume: "NOT IN UI",
 *  courses: "NOT IN UI",
 *  workspace: "NOT IN UI",
 *  position: "NOT IN UI",
 *  childs: "NOT IN UI",
 *  marital_status: "NOT IN UI",
 *  people_live_with_you: "NOT IN UI",
 *  dependents: "NOT IN UI",
 * }
 *
 * bridge.createUser(user).then(response => {
 *   console.log(response);
 * });
 */
const createUser = async (user) => {
  const body = new URLSearchParams(user).toString();
  return await bridge("/createUser", body);
};

/**
 *
 * @param {string} token - User token
 * @param {number} estatus=1 - This could take a 1 or 3. 1 is true and 3 is false
 */

const changeState = async (token, estatus = 1) => {
  const body = new URLSearchParams({ estatus }).toString();
  return await bridge("/changeState", body, "PATCH", token);
};

/**
 *
 * @param {string} token - User token
 * @param {string} id - User id
 */

const medicFriendRequestToVoluntary = async (token, id) => {
  return await bridge(
    `/medic/friendRequestToVoluntary/${id}`,
    "",
    "POST",
    token
  );
};

/**
 *
 * @param {string} token - User token
 * @param {string} id - User id
 */

const medicAcceptFriendRequest = async (token, id) => {
  return await bridge(`/medic/acceptFriendRequest/${id}`, "", "PATCH", token);
};

/**
 *
 * @param {string} token - User token
 * @param {string} id - User id
 */

const voluntaryAcceptFriendRequest = async (token, id) => {
  return await bridge(
    `//voluntary/acceptFriendRequest/${id}`,
    "",
    "PATCH",
    token
  );
};

/**
 *
 * @param {string} token - User token
 * @param {string} id - User id
 */

const voluntaryFriendRequestToMedic = async (token, id) => {
  return await bridge(
    `/voluntary/friendRequestToMedic/${id}`,
    "",
    "POST",
    token
  );
};

/**
 *
 * @param {string} token - User token
 * @param {string} id - User id
 */

const rejectFriendRequest = async (token, id) => {
  return await bridge(`/rejectFriendRequest/${id}`, "", "PATCH", token);
};

/**
 *
 * @param {string} token - User token
 */

const getVoluntaries = async (token) => {
  return await bridge(`/getVoluntaries`, "", "GET", token);
};

/**
 *
 * @param {string} token - User token
 */

const getFriendRequests = async (token) => {
  return await bridge(`/getFriendRequests`, "", "GET", token);
};

/**
 *
 * @param {string} token - User token
 * @param {string} id - User id
 */

const getUserById = async (token, id) => {
  return await bridge(`/getUserById/${id}`, "", "GET", token);
};

export {
  getUsers,
  deleteUser,
  loginUser,
  createUser,
  changeState,
  medicFriendRequestToVoluntary,
  medicAcceptFriendRequest,
  voluntaryAcceptFriendRequest,
  voluntaryFriendRequestToMedic,
  rejectFriendRequest,
  getVoluntaries,
  getFriendRequests,
  getUserById,
};
