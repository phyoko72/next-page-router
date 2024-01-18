import Card from "@/components/Card"
import benjamin from "@/../public/benjamin.jpg"
import melody from "@/../public/melody.jpg"
import neom from "@/../public/neom.jpg"
export default function Home() {
    return (
        <main>
            <div className=" flex max-md:flex-col justify-between items-center gap-3">
                <Card
                    source={benjamin}
                    alt="benjamin"
                    title="Title A"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <Card
                    source={melody}
                    alt="melody"
                    title="Title B"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <Card
                    source={neom}
                    alt="neom"
                    title="Title C"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
            </div>
        </main>
    )
}
