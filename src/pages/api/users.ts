import {NextApiRequest, NextApiResponse} from "next"
import data from "@/data/data.json"
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            res.status(200).json(data.users)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
