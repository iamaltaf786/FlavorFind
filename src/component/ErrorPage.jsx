// ErrorPage.jsx
import React from "react";

const ErrorPage = () => {
  console.log("ErrorPage rendered"); // Log when the ErrorPage renders
  return (
    <div>
      <h1>Error: Page not found!</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorPage;
