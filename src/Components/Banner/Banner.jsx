const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* banner Image sectiion */}
          <div className={`flex justify-start items-center ${reverse && "md:order-last md:justify-end"}`}>
            <img src={image} alt="" className="w-[400px] h-full object-cover" />
          </div>
          {/* banner text sectiion */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <p className="text-sm text-orange-600 font-semibold capitalize">{tag}</p>
            <p className="text-xl lg:text-2xl font-semibold capitalize">{title}</p>
            <p className="text-sm text-slate-500">{subtitle}</p>
            <div>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
