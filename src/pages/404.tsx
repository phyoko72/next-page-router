import Link from "next/link"

export default function NotFound() {
    return (
        <div className=" flex justify-center items-center h-screen">
            <div>
                <h1 className=" text-2xl font-bold">Page Not Found</h1>
                <span className=" block text-center">
                    Go
                    <Link href={"/"} className=" underline ms-1 font-semibold">
                        Home
                    </Link>
                </span>
            </div>
        </div>
    )
}
