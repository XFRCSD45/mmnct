import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { RiStackshareLine } from "react-icons/ri";
import { AiOutlineArrowDown } from "react-icons/ai";

const memoryTree = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitted");
    setLoading(false);
  };
  return (
    <div>
      <Head>
        <title>Memory Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="min-h-screen pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#FEE1C4]">
          <div className="flex flex-col justify-end px-4 md:px-8">
            <p className="text-4xl lg:text-5xl font-bold text-gray-800 text-center pt-10 md:pt-16">
              Memory Tree
            </p>
            <p className="md:text-lg text-gray-700 italic text-center pt-8">
              "Written in these walls are the stories that I can't explain...
              <br /> I leave my heart open but it stays right here empty for
              days"
            </p>
            <p className="text-right text-gray-700 pt-1">~ One Direction</p>
            <div className="flex justify-center items-center gap-x-4 text-lg lg:text-xl text-white pt-6 md:pt-10 lg:mb-16 font-semibold">
              <p className="bg-gray-800 rounded-full p-2 hover:text-gray-800 hover:bg-white">
                <RiStackshareLine />
              </p>
              <p>Share your MMNCT Memories with us.</p>
            </div>
          </div>
          <Image
            src="/your_memory_hero.jpg"
            alt="Your Memories"
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex flex-col justify-center md:items-center pt-6 pb-2 bg-gradient-to-b from-[#FEE1C4] via-[#FEE1D4] to-[#FEE1E4] text-lg md:text-xl text-gray-500 px-6">
          <p>
            Do you have any interesting encounters or memories related to MMNCT?
          </p>
          <p>Why not share it with others?</p>
          <p className="mt-4 text-center">🤩🤩🤩</p>
        </div>
        <div className="flex flex-col justify-center items-center pt-4 px-5">
          <div className="md:w-2/3 text-center">
            <p className="mt-4 font-semibold text-lg md:text-xl">
              We have something special planned for you,
            </p>
            <p className="font-semibold text-lg md:text-xl">
              which will give your experience a platform so that it can reach
              more people!
            </p>
          </div>
          <p className="my-2 p-2 border hover:bg-gray-800 hover:text-white rounded-full text-xl">
            <AiOutlineArrowDown />
          </p>
          <div className="block p-6 rounded-lg shadow-lg bg-white w-full md:w-2/3 lg:w-5/12 overflow-x-auto">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="form-group mb-6">
                <p className="text-center text-lg md:text-xl font-semibold mt-4 mb-12">
                  Here, write it down and send it to us right away.
                </p>
                <input
                  type="text"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <p className="block mb-2 text-gray-800">
                Or do you have any special snap of the occasion?
              </p>
              <div className="form-group mb-6">
                <input type="file" accept="image/*" />
              </div>
              {!loading ? (
                <button
                  type="submit"
                  className="
      w-full
      px-6
      py-2.5
      bg-[#FEE1B4]
      text-gray-800
      font-semibold
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md mt-4"
                >
                  Share
                </button>
              ) : (
                <div
                  className="
      w-full
      px-6
      py-2.5
      bg-[#FEE1B4]
      text-gray-800
      font-semibold
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md mt-4 flex justify-center items-center gap-x-2"
                >
                  Uploading
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-5 h-5 items-center text-gray-200 animate-spin fill-blue-500 mt-0"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Uploading...</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default memoryTree;
