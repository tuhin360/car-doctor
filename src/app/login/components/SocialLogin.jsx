"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa"; // optional

const providers = [
  { name: "google", icon: <FaGoogle className="text-red-500 text-lg" /> },
  { name: "github", icon: <FaGithub className="text-black text-lg" /> },
  // { name: "facebook", icon: <FaFacebookF className="text-blue-600 text-lg" /> },
];

const SocialLogin = () => {
  const { status } = useSession();
  const router = useRouter();

  const handleSocialLogin = (provider) => {
    signIn(provider, { callbackUrl: "/" }); // ✅ direct redirect after login
  };

  useEffect(() => {
    if (status === "authenticated") {
      toast.success("Login successful!");
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="mt-8">
      <p className="text-center text-gray-500 mb-4">Or, Sign in with</p>
      <div className="flex justify-center gap-4">
        {providers.map((provider) => (
          <button
            key={provider.name}
            onClick={() => handleSocialLogin(provider.name)}
            className="bg-gray-100 p-3 rounded-full hover:scale-110 transition cursor-pointer shadow-sm"
          >
            {provider.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialLogin;
