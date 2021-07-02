import Admin from "./pages/Admin";
import { ADMIN_ROUTE, BASKET_ROUTE, BOUQUET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, HOME_ROUTE_1, HOME_ROUTE_2 } from "./utils/consts";
import Basket from "./pages/Basket/Basket";
import Shop from "./pages/Shop";
import Home from './pages/Home/Home';
import Auth from "./pages/Auth";
import BouquetPage from "./pages/BouquetPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: HOME_ROUTE_1,
        Component: Home
    },
    {
        path: HOME_ROUTE_2,
        Component: Home
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE_1,
        Component: Home
    },
    {
        path: HOME_ROUTE_2,
        Component: Home
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BOUQUET_ROUTE + '/:id',
        Component: BouquetPage
    },
]