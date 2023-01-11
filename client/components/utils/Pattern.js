import React from "react";
import Image from "next/image";

function Pattern() {
  return (
    <Image
      src="/assets/Images/Tribal.png"
      width="100px"
      height="100px"
      alt="Tribal"
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}

export default Pattern;
