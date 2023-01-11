import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  let { username } = useParams();
  return (
    <>
      <h2>Hello {username}</h2>
      <div>This is your profile page</div>
    </>
  );
}

export default ProfilePage;
