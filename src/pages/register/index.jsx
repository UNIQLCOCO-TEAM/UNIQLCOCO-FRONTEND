import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import validatePass from "@/utils/validatePass";
import validatePhone from "@/utils/validatePhone";

const Register = () => {
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [account, setAccount] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phoneNumber: "",
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [next, setNext] = useState(false);
  const onContinue = () => {
    setNext((next) => !next);
    console.log(account);
  };

  const handleCreateUserInformation = async () => {
    const API_URL = `http://192.168.1.5:8080/user/profile/create`;
    const information = {
      name: account.firstname,
      surname: account.lastname,
      birth_date: new Date(),
      phone_number: account.phoneNumber,
      address: account.address,
    };
    try {
      const result = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(information),
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  const handleCreateAccount = async (uid) => {
    const API_URL = `http://192.168.1.5:8080/auth/sign-up`;
    const information = {
      email: user.email,
      password: user.password,
      uid: uid,
    };
    try {
      const result = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(information),
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  /** Functions **/
  const handleSignUp = async () => {
    if (
      validatePass(user.password, confirmPassword) &&
      validatePhone(account.phoneNumber)
    ) {
      try {
        const fetchUserInformation = async () => {
          try {
            const result = await handleCreateUserInformation();
            const userInfo = JSON.parse(result).result;
            const uid = userInfo.result.uid;
            try {
              const result = await handleCreateAccount(uid);
              const account = JSON.parse(result);
              if (account.result.statusCode == 201) router.push('/login');
            } catch (err) {
              console.error(err);
            }
          } catch (err) {
            console.error(err);
          }
        };
        fetchUserInformation();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Something Wrong. Invalid input format!");
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-greenbg">
      <nav className="bg-white font-sukhumvit">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start flex-grow">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/LOGO2.png"
                  alt="Your Company"
                  width={48}
                  height={48}
                />
                <Image
                  className="ml-3"
                  src="/LOGO1.png"
                  alt="Your Company"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex flex-col mt-48 items-center gap-5">
        <div className="sm:grid sm:grid-cols-3 gap-4 sm:content-start flex-1 justify-center">
          <div
            className={
              !next
                ? "hidden"
                : "flex items-center sm:justify-start justify-center"
            }
          >
            <button onClick={onContinue}>
              <FaCircleArrowLeft
                className="text-[#9CB97B] text-xxxl
                            hover:text-green-900"
              />
            </button>
          </div>
          <h1
            className={
              !next
                ? "col-start-2 text-[#9CB97B] text-xxxl font-bold"
                : "text-[#9CB97B] text-xxxl font-bold"
            }
          >
            REGISTER
          </h1>
        </div>
        <div className="bg-white px-8 pt-8 pb-5">
          {next ? (
            <form
              className="grid sm:grid-cols-4 grid-cols-1 gap-6"
              onSubmit={onSubmit}
            >
              <div className="flex items-center">
                <label htmlFor="email" className="text-[#202020] font-semibold">
                  Email
                </label>
              </div>
              <input
                className="sm:col-span-3 p-1 py-2 border border-[#9CB97B] rounded-lg
                            focus:outline-none focus:border-[#8FA477]"
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
              />
              <div className="flex items-center">
                <label
                  htmlFor="password"
                  className="text-[#202020] font-semibold"
                >
                  Password
                </label>
              </div>
              <input
                className="sm:col-span-3 p-1 py-2 border border-[#9CB97B] rounded-lg
                            focus:outline-none focus:border-[#8FA477]"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
              />
              <div className="flex items-center">
                <label
                  htmlFor="confirmPassword"
                  className="text-[#202020] font-semibold"
                >
                  Confirm password
                </label>
              </div>
              <input
                className="sm:col-span-3 p-1 py-2 border border-[#9CB97B] rounded-lg
                            focus:outline-none focus:border-[#8FA477]"
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
              <div className="sm:col-span-4 flex justify-center mt-8">
                <button
                  className="p-2 bg-[#9CB97B] rounded-lg
                                hover:bg-green-900 font-semibold
                                text-white"
                  // type='submit'
                  onClick={() => handleSignUp()}
                >
                  Create an account
                </button>
              </div>
            </form>
          ) : (
            <form className="grid sm:grid-cols-6 grid-cols-1 gap-3">
              <div className="flex items-center">
                <label
                  htmlFor="firstname"
                  className="text-[#202020] font-semibold"
                >
                  Firstname
                </label>
              </div>
              <input
                className="sm:col-span-2 p-1 py-2 border border-[#9CB97B] rounded-lg
                            focus:outline-none focus:border-[#8FA477]"
                id="firstname"
                type="text"
                value={account.firstname}
                onChange={(e) =>
                  setAccount({ ...account, firstname: e.target.value })
                }
                placeholder="Firstname"
              />
              <div className="flex items-center">
                <label
                  htmlFor="lastname"
                  className="text-[#202020] font-semibold"
                >
                  Lastname
                </label>
              </div>
              <input
                className="sm:col-span-2 p-1 py-2 border border-[#9CB97B] rounded-lg
                            focus:outline-none focus:border-[#8FA477]"
                id="lastname"
                type="text"
                value={account.lastname}
                onChange={(e) =>
                  setAccount({ ...account, lastname: e.target.value })
                }
                placeholder="Lastname"
              />
              <div className="flex items-center">
                <label
                  htmlFor="address"
                  className="text-[#202020] font-semibold"
                >
                  Address
                </label>
              </div>
              <textarea
                className="sm:col-span-5 p-1 py-2 border border-[#9CB97B] rounded-lg
                            focus:outline-none focus:border-[#8FA477] resize-none"
                id="address"
                type="text"
                value={account.address}
                onChange={(e) =>
                  setAccount({ ...account, address: e.target.value })
                }
                placeholder="Address"
              />
              <div className="flex items-center">
                <label
                  htmlFor="phoneNumber"
                  className="text-[#202020] font-semibold"
                >
                  Phone number
                </label>
              </div>
              <div className="sm:col-span-2">
                <input
                  className="p-1 py-2 border border-[#9CB97B] rounded-lg
                                focus:outline-none focus:border-[#8FA477]"
                  id="phoneNumber"
                  type="tel"
                  value={account.phoneNumber}
                  onChange={(e) =>
                    setAccount({ ...account, phoneNumber: e.target.value })
                  }
                  placeholder="Phone number"
                />
                <span id="phoneError" className="text-red-800"></span>
              </div>
              <div className="sm:col-span-3" />
              <div className="sm:col-start-3 sm:col-span-2 mt-8 grid content-center">
                <button
                  className="px-14 py-2 bg-[#9CB97B] rounded-lg
                                hover:bg-green-900 en font-semibold
                                text-white"
                  onClick={onContinue}
                >
                  NEXT
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="flex gap-2">
          <h2>Already have an account?</h2>
          <Link className="text-[#9CB97B] hover:text-green-900" href={"/login"}>
            Sign In
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Register;
