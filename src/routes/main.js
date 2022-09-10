import { mainController } from "../controllers/main";

export const mainRoutes = (router) => {
    router.get('/', mainController)
}