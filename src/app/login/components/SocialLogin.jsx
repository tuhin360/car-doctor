import { signIn } from "next-auth/react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const SocialLogin = () => {
  const handleSocialLogin = async (providerName) => {
    console.log("Sign in with", providerName);
    const result = await signIn(providerName, {
      callbackUrl: "/",
      redirect: true,
    });
    console.log(result);
  };
  return (
    <div className="mt-8">
      <p className="text-center text-gray-500 mb-4">Or, Sign in with</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleSocialLogin("google")}
          className="bg-gray-100 p-3 rounded-full hover:scale-110 transition cursor-pointer shadow-sm"
        >
          <FaGoogle className="text-green-500 text-lg" />
        </button>
        <button
          onClick={() => handleSocialLogin("github")}
          className="bg-gray-100 p-3 rounded-full hover:scale-110 transition cursor-pointer shadow-sm"
        >
          <FaGithub className="text-black text-lg" />
        </button>
        {/* <button
          onClick={() => handleSocialLogin("facebook")}
          className="bg-gray-100 p-3 rounded-full hover:scale-110 transition cursor-pointer shadow-sm"
        >
          <FaFacebookF className="text-blue-600 text-lg" />
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
