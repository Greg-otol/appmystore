export default function teste() {
    
}


// import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// type BoxProps = {
//   children: React.ReactNode;
// };

// export const AuthContext = createContext<any | null>(null);

// export const AuthProvider = ({ children }: BoxProps) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);


//   useEffect(() => {
//     const recoveredUser = localStorage.getItem("user");
//     const recoveryToken = localStorage.getItem("token")

//     if (recoveredUser && recoveryToken) {
//       setUser(JSON.parse(recoveredUser));
//       setToken(JSON.parse(recoveryToken));
      
//     }
//   }, []);

// //   const login = async (email: string, password: string) => {
// //     const response = await authLogin(email, password);

// //     const loggedUser = response.data.user;
// //     const token = response.data.token;

// //     localStorage.setItem("user", JSON.stringify(loggedUser));
// //     localStorage.setItem("token", token);

// //     Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// //     setUser(loggedUser);
// //     navigate("/products");
// //   };

// //   const logout = () => {
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("token");
// //     Api.defaults.headers.common['Authorization'] = "";

// //     setUser(null);
// //     navigate("/login");
// //   };

//   return (
//     <AuthContext.Provider
//       value={{ user, setUser, token, setToken }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
