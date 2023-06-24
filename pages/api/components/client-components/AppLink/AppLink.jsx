import Link from "next/link";
import React from "react";

const AppLink = ({ children, customStyle, href, ...props }) => {
  return (
    <Link href={href} style={customStyle} {...props}>
      {children}
    </Link>
  );
};

export default AppLink;
