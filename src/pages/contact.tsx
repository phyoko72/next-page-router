import Button from "@/components/Button"
import {FormEvent, useRef} from "react"

export default function Contact() {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const name = nameRef.current?.value
        const email = emailRef.current?.value
        console.log({name, email})
        e.currentTarget.reset()
    }
    return (
        <>
            <h1 className=" text-center text-2xl font-semibold">Contact</h1>
            <form onSubmit={handleSubmit} className=" *:block w-3/4 m-auto">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    ref={nameRef}
                    className=" p-2 rounded w-full text-black mb-5"
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    ref={emailRef}
                    className=" p-2 rounded w-full text-black mb-5"
                />
                <Button text="Submit" style="primary" />
            </form>
        </>
    )
}
