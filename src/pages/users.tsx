import {InferGetStaticPropsType} from "next"

export default function Users({
    users,
    error,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className=" overflow-x-auto">
            <h1 className=" text-3xl font-semibold text-center underline mb-4">
                Users List
            </h1>
            {users && (
                <table className="border table-auto w-3/5 p-5 m-auto">
                    <thead>
                        <tr className="divide-x border *:text-left [&>th]:p-2 ">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className=" divide-x hover:bg-slate-500 [&>td]:p-2"
                            >
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}{" "}
            {error && <h1 className=" text-2xl font-bold">{error}</h1>}
        </div>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch("http://localhost:3000/api/users")
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        const users: User[] = await res.json()
        return {
            props: {
                users,
            },
        }
    } catch (error) {
        return {
            props: {
                error: (error as Error).message,
            },
        }
    }
}
