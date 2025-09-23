import React, { useContext } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import { auth } from "../Firebase/firebase.init";

const UserProfile = () => {
  const { currentUser, logoutUser } = useContext(AuthContext);

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-gray-600 text-lg">No user logged in</p>
      </div>
    );
  }

  const { displayName, email, emailVerified, photoURL, uid } = currentUser;

  const handleLogout = () => {
    return logoutUser(auth);
  };

  return (
    <div className="flex justify-center items-center min-h-[300px] m-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photoURL || "https://via.placeholder.com/150"}
            alt={displayName || "User Avatar"}
            className="rounded-full w-24 h-24 border-4 border-primary"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{displayName || "Guest User"}</h2>
          <p className="text-sm text-gray-500">{email}</p>
          <p
            className={`mt-2 text-xs font-medium ${
              emailVerified ? "text-green-600" : "text-red-500"
            }`}
          >
            {emailVerified ? "Email Verified ✅" : "Email Not Verified ❌"}
          </p>
          <p className="mt-2 text-xs text-gray-400">UID: {uid}</p>

          <div className="card-actions mt-4">
            <button className="btn btn-primary">Edit Profile</button>
            <button onClick={handleLogout} className="btn btn-error">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
