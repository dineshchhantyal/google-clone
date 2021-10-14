import { useRef } from 'react';
import Head from 'next/head';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image"
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  const searchInputRef = useRef(null);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/215349877_2978426119113889_2037353011183225504_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=A1zKwJ-MM2EAX9wtsEv&_nc_ht=scontent.fpkr1-1.fna&oh=7399619a507c291fc69ca6785574504e&oe=618F036A" />
        </div>
      </header>
      <form className="flex flex-col items-center content-center mt-4 flex-grow w-4/5" action="">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png"
          width="200"
          height="200"
          className="object-contain" />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-400 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500 rounded-full hover:bg-gray-100 cursor-pointer" /
          >
          <input ref={searchInputRef} type="text" className="flex-grow  focus:outline-none" name="" id="" />
          <MicrophoneIcon className="h-5 text-gray-600" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
          <button className="btn" onClick={search}>
            Google Search</button>
          <button className="btn" onClick={search}>
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
