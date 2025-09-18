import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAsync } from "../../hooks/useAsync";
import { auth } from "../../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const {
    execute: createUser,
    loading,
    error,
  } = useAsync((email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
  );
  const authInfo = {
    loading,
    error,
    createUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
