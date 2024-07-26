import { Card } from "./card";

export const About = () => {
    const technologies: { image: string; name: string }[] = [
        {
            image: "/react.png",
            name: "React JS",
        },
        {
            image: "/next.png",
            name: "Next.js",
        },
        {
            image: "/node.png",
            name: "Node.js",
        },
        {
            image: "/mongodb.png",
            name: "MongoDB",
        },
    ];
    return (
        <div className="w-full md:flex py-10">
            <div className=" w-full bg-black flex flex-col  justify-center items-center">
                <h2 className="text-primary text-3xl mb-3">Who are We?</h2>
                <p className="text-center w-full max-w-[660px] px-5 text-primary">
                    We are a passionate team of web developers eager to bring
                    your digital vision to life.We combine innovative ideas with
                    the latest technologies to create websites that are both
                    functional and visually appealing.
                </p>
                <h3 className="text-2xl text-primary my-2">Our skills </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  my-4">
                    {technologies &&
                        technologies.map((item, index) => (
                            <Card key={index} {...item} />
                        ))}
                </div>
                <h3 className="text-2xl text-primary my-2">Why choose us?</h3>
                <p className="text-primary  px-5 text-balance">
                    <span className="text-lg font-semibold">Fresh Perspective:</span> We offer creative solutions with a modern
                    approach.
                </p>
                <p className="text-primary  px-5">
                    
                  <span className="text-lg font-semibold text-balance">Dedication:</span> We are committed to understanding your business
                    and delivering on time.
                </p>
                <p className="text-primary/70  mt-4 px-5 text-balance">We're excited to work with you and help grow your business online!</p>
            </div>
        </div>
    );
};
