import React from "react";

const A = ({ className, Label }) => {
  return (
    <a className={className} href="./">
      {Label}
    </a>
  );
};

export default A;
