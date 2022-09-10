import { main } from "../scrapers/main"

export const mainController = async (req, res) => {
    try {
        const mainData = await main()
        res.status(200).json(mainData)
    } catch (error) {
        res.status(500).json(error)
    }
}