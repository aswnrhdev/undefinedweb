export const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center p-2 px-4 bg-black w-full top-0 left-0 right-0 border-b border-black z-20 h-20">
        <div className="text-white flex items-center gap-5 relative">
          <p className="cursor-pointer">Our Services</p>
          <span className="text-white">•</span>
          <p className="cursor-pointer">Get in Touch</p>
          <span className="text-white">•</span>
          <p className="cursor-pointer">About Us</p>
        </div>
      </div>
    </>
  );
}
