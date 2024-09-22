import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-center xs:mb-28 sm:mb-28 lg:mb-0">
      <div className="text-3xl lg:w-1/2 lg:-mt-40 mt-60 w-full sm:ml-8 xs:pe-5">
        <Image
          src={"images/facebook.svg"}
          width={300}
          height={100}
          alt="Facebook Logo"
          className="w-80 lg:m-0"
        />
        <p className="ml-7 -mt-1 f-size p-color xl:pe-24 lg:pe-20">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      <div className="bg-white flex flex-col p-4 rounded-lg shadow-xl mb-32  lg:-ml-12 lg:w-1/3 sm:w-11/12 xs:w-11/12 sm:mt-10 xs:mt-10">
        <input
          className="my-2 border border-1 border-gray-200 p-3 pl-4 placeholder:text-base rounded-lg myOutline focus:text-black active:text-gray-300 focus:ring-1 placeholder:text-inputColor"
          autoFocus
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border border-1 border-gray-200 p-3 pl-4 placeholder:text-base rounded-lg myOutline focus:text-black active:text-gray-300 focus:ring-1 placeholder:text-inputColor"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blueBg hover:bg-hoverBlue text-white p-2.5 mt-2 font-bold text-xl rounded-lg">
          Log in
        </button>
        <a href="#" className="m-auto my-4 text-sm text-blueBg hover:underline">
          Forgotten password?
        </a>
        <span>
          <hr />
        </span>
        <button className="bg-myGreen hover:bg-hoverGreen p-3 text-white rounded-lg font-bold text-lg m-auto mt-5 mb-2">
          Create new account
        </button>
      </div>
    </div>
  );
}
