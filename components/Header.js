import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`search?term=${term}`);
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-4 items-center">
                <Image
                    src="https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png"
                    height="150"
                    width="150"
                    onClick={() => router.push('/')}
                    className="object-contain cursor-pointer" />

                <form action="" className="flex px-6 flex-grow py-3 ml-10 mr-5 border border-gray-200 shadow-lg rounded-full max-w-3xl items-center">
                    <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" name="" id="" default={router.query.term} />

                    <XIcon className="h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 hover:scale-125"
                        onClick={() => { searchInputRef.current.value = "" }} />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-grey-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar url="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/215349877_2978426119113889_2037353011183225504_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=A1zKwJ-MM2EAX9wtsEv&_nc_ht=scontent.fpkr1-1.fna&oh=7399619a507c291fc69ca6785574504e&oe=618F036A" className="ml-auto" />
            </div>

            <HeaderOptions />
        </header>
    )
}

export default Header
