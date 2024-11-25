function VideoAd() {
  return (
    <div className="  bg-gray-300 py-5 lg:flex items-center justify-center">
      <div className="  font-bold text-center lg:text-3xl text-2xl my-10 lg:my-0 flex-1">
        It's super easy to use our service!
      </div>
      <div className=" flex items-center justify-center flex-1">
        <iframe
          className="w-96 h-64 sm:w-[560px] sm:h-[315px] md:w-[640px] md:h-[360px]"
          src="https://www.youtube.com/embed/-PNC-CUpXw0?si=jgfgCxuvfjFhnXF5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoAd;
