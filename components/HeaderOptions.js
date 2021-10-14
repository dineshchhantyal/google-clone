import HeaderOptionSingluar from "./HeaderOptionSingluar"
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'

const HeaderOptions = () => {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
            <div className="flex space-x-4">
                <HeaderOptionSingluar Icon={SearchIcon} title={"All"} selected />
                <HeaderOptionSingluar Icon={MapIcon} title={"Map"} />
                <HeaderOptionSingluar Icon={NewspaperIcon} title={"News"} />
                <HeaderOptionSingluar Icon={PhotographIcon} title={"Photos"} />
                <HeaderOptionSingluar Icon={DotsVerticalIcon} title={"More"} />
                <HeaderOptionSingluar Icon={PlayIcon} title={"Play"} />

            </div>
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
