export const Banner = () => {
  return (
    <div className="h-96 bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col text-white gap-3 items-center">
        <h1 className="text-center text-6xl font-black text-[#EEE4B1]">Echo Link</h1>
        <p className="text-center opacity-70 text-[$]">
          EchoLink is a startup platform dedicated to fulfilling client needs with precision.
          <br />
          Our skilled team excels in transforming imaginative designs into real-life web applications. We prioritize client satisfaction,
          <br />
          ensuring innovative, high-quality solutions that bring your creative visions to life seamlessly and effectively.
        </p>
      </div>
      <button className="mt-6 bg-black border border-[#EEE4B1] py-2 px-8 text-[#EEE4B1] rounded-full border-b-4 border-r-4">Contact Our Team</button>
    </div>

  )
}

