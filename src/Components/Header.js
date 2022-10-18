import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { ArrowDownIcon } from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* location */}
        <button className="link">
          <p className=" text-white flex items-center text-xs space-x-2 whitespace-nowrap">
            Deliver to Arissa
          </p>
          <div className="mr-2 text-white flex items-center text-xs space-x-1 whitespace-nowrap">
            <img
              className="bg-white w-5 h-4"
              src="https://cdn-icons-png.flaticon.com/512/447/447031.png"
              alt=""
              objectFit="contain"
            />
            <div className="align-left text-white font-extrabold md:text-sm">
              Select your address
            </div>
          </div>
        </button>
        {/* search bar */}
        <div className="hidden sm:flex  items-center rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none py-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/*  Right section */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={signIn} className="link">
            <p>Hello,Ruishu</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-s">& Orders</p>
          </div>
          <div
            onClick={() => router.push("./checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10  h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className=" h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center space-x-6 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-4 mr-1" />
          All
        </p>
        <p className="link">Prime Early Access Deals</p>
        <p className="link flex items-center">Prime</p>

        <p className="link">Gift Ideas</p>
        <p className="link hidden lg:inline-flex">Beauty & Personal Care</p>
        <p className="link hidden lg:inline-flex">Coupons</p>
        <p className="link hidden lg:inline-flex">Health & Household</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Grocery</p>
        <p className="link hidden lg:inline-flex">Books</p>
        <p className="link hidden lg:inline-flex">Home</p>
        <p className="link hidden lg:inline-flex">Best Sellers</p>
        <p className="link hidden lg:inline-flex">Registry</p>
        <p className="link hidden lg:inline-flex">Pet Supplies</p>
        <p className="link hidden lg:inline-flex">Browsing History</p>
      </div>
    </header>
  );
}

export default Header;
