import { Api } from "../api/Api";

export const authLogin = async (email: string, password: string) => {
  
    Api.post(`/token`, {
      email: email,
      password: password,
    })
      .then((response) => {
        const loggedUser = response.data.user;
        const token = response.data.token;
  
        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);
      })
      .catch(() => {
        console.log("erro");
      });
  };