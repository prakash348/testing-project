import Link from "next/link";
import React from "react";
import { Button, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="nav_container">
      <h3>AlpineCode</h3>
      <ul className="ul_container">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Button
            onClick={(e) => {
              e.preventDefault();
              Cookies.remove("jwtToken");
              router.push("/login");
            }}
          >
            SinOut
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
