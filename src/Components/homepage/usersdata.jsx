import React from "react";
import Users from "./users";
import Image from "../../../public/vite.svg";

const Userslist = () => {
  return (
    <div>
      <Users
        imageSrc={Image}
        name="John Doe"
        email="johndoe@example.com"
        country="United States"
      />
    </div>
  );
};

export default Userslist;
