export default function Button({
    text,
    style,
}: {
    text: string
    style: "primary" | "secondary"
}) {
    return (
        <button
            className={`${
                style === "primary" ? " bg-blue-600" : " bg-gray-600"
            } w-full p-2 rounded font-semibold`}
        >
            {text}
        </button>
    )
}
