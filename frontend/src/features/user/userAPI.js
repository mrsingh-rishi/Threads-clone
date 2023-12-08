// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
// A mock function to mimic making an async request for data
export function Signup(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function Login({ username, password }) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    // console.log({ data });
    resolve({ data });
  });
}
export function editProfile({ userData, token, id }) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/users/${id}`, {
      method: "PUT",
      body: userData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      // Handle successful response
      const data = await response.json();
    } else {
      // Handle error response
      console.error("Error uploading image:", response.statusText);
    }
  });
}

export function CheckUser(token) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth/check", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function getUserbyId({ token, id }) {
  // console.log({token,id});
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/users/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function getUserByUsername({ username, token }) {
  return new Promise(async (resolve) => {
    // console.log({username,token})
    const response = await fetch("http://localhost:8080/users/search", {
      method: "POST",
      body: JSON.stringify({ username }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}
