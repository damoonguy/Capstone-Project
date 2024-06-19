const register = async (userData) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
        try {
          let res = await response.json();
          throw res.message || JSON.stringify(res);
        } catch (err) {
          console.log(err);
          const error = new Error("Something went wrong");
          throw error.message;
        }
    }
  
    const responseData = await response.json();
    localStorage.setItem("user", JSON.stringify(responseData.data));
    return responseData;
  };
  
  const login = async (userData) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      try {
        let res = await response.json();
        throw res.message || JSON.stringify(res);
      } catch (err) {
        console.log(err);
        const error = new Error("Something went wrong");
        throw error.message;
      }
    }
  
    const responseData = await response.json();
    localStorage.setItem("user", JSON.stringify(responseData.data));
    return responseData;
  };
  
  const getUser = async (authorId) => {
    const response = await fetch(
      `http://localhost:5000/api/auth/user/${authorId}`
    );
  
    if (!response.ok) {
        try {
          let res = await response.json();
          throw res.message || JSON.stringify(res);
        } catch (err) {
          console.log(err);
          const error = new Error("Something went wrong");
          throw error.message;
        }
    }
  
    const responseData = await response.json();
    return responseData;
  };
  
  const updateUser = async (userData) => {
    const response = await fetch(
      `http://localhost:5000/api/auth/user/${userData.get("id")}`,
      {
        method: "PUT",
        headers: {
          // "Content-Type": "application/json",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).token,
        },
        body: userData,
      }
    );
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
  };
  
  const authService = {
    register,
    login,
    getUser,
    updateUser
  };
  
  export default authService;