import Image, {StaticImageData} from "next/image"
export default function Card({
    source,
    alt,
    title,
    desc,
}: {
    source: StaticImageData
    alt: string
    title: string
    desc: string
}) {
    return (
        <div className=" rounded-md p-4 bg-slate-600 w-fit">
            <Image src={source} alt={alt} className=" rounded mb-2" priority />
            <h3 className=" text-xl font-semibold">{title}</h3>
            <small className=" text-sm">{desc}</small>
        </div>
    )
}
