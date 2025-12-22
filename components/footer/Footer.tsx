
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="">
      <div>
        <div className=" pl-20 bg-amber-300 text-white py-10 ">
          <Image
            src="/images/logo-img (2).png"
            alt="Omni Pulse Logo"
            width={140}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
