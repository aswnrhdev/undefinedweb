import Image from "next/image";

export const Card = ({ image, name }: { image: string; name: string }) => {
    return (
        <div
            className="w-[200px] h-[300px]  rounded-md border-primary border-2"
            style={{ boxShadow: "4px 4px 0px 0px #EEE4B1" }}
        >
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
            />
            <h3 className="text-primary text-2xl text-center mt-3">{name}</h3>
        </div>
    );
};
