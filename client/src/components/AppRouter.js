import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routers';
import { SHOP_ROUTE } from '../utils/consts';
import {Context} from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Switch>
            {/* Авторизированный пользователь */}
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            {/* Гость / доступное для всех */}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
}

export default AppRouter;