import LogoIcon from "@/components/icons/logoIcon/logoIcon";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-mainColor h-screen flex justify-center items-center flex-wrap gap-10">
      <LogoIcon
        className="w-44 h-36 border-b-2"
        sonsClassNames={["w-36"]}
      ></LogoIcon>
      {children}
    </div>
  );
};

export default AuthLayout;
