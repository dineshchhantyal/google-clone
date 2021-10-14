const Avatar = ({ url, className }) => {
    return (
        <img className={`h-10 rounded-full w-10 cursor-pointer object-contain transition duration-150 transform hover:scale-110 ${className}`} loading="lazy" src={url} alt={"profile"} />
    )
}

export default Avatar;
