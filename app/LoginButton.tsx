'use client';

const LoginButton = () => {
  const loginHandler = () => alert('SignIn');

  return (
    <>
      <div className="mr-10">
        <button onClick={loginHandler} className="mr-5">
          Sign In
        </button>
      </div>
    </>
  );
};

export default LoginButton;
