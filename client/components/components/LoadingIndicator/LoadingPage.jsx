import React from "react";
import {
  LoadingIndicator,
  LoadingIndicatorContainer,
} from "./LoadingIndicator.style";

function LoadingPage() {
  return (
    <LoadingIndicatorContainer>
      <LoadingIndicator></LoadingIndicator>
    </LoadingIndicatorContainer>
  );
}

export default LoadingPage;
