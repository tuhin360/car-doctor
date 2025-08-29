import Image from "next/image";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:my-32 px-4 md:px-16 lg:px-24 gap-10 items-center">
      {/* Left Side - Image */}
      <div className="flex justify-center">
        <Image
          src="/assets/images/login/login.svg"
          alt="login"
          width={460}
          height={502}
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 w-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
