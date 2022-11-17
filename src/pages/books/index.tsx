import React from 'react';
import useLogin from "@hooks/api/auth-api/use-login";

const Index = () => {
  useLogin();

  return (
    <div>
      books
    </div>
  );
};

export default Index;