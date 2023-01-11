import { useRouter } from "next/router";
import React from "react";

export default function Error() {
  // const navigate = useNavigate()
  const router = useRouter();
  const backAction = () => {
    router.push("/");
  };

  return (
    <div>
      <p>Cette page est introuvable </p>
      <button onClick={backAction}>retour</button>
    </div>
  );
}
