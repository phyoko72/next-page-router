import {PropsWithChildren} from "react"
import Nav from "./Nav"

export default function Layout({children}: PropsWithChildren) {
    return (
        <div className=" max-w-screen-lg m-auto p-5 text-white max-h-screen">
            <Nav />
            {children}
        </div>
    )
}
