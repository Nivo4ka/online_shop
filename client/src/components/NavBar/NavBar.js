import React, { useContext } from 'react';
import { Context } from "../../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, HOME_ROUTE_1, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { Button } from "react-bootstrap";
import CartIcon from '../../assets/images/cart.png'
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory, Link, useLocation  } from 'react-router-dom'
import './navBar.css';

const NavBar = observer((props) => {
    const { user } = useContext(Context)
    const history = useHistory()
    const location = useLocation()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        if (location.pathname === '/basket') {
            history.push('/')
        }
    }
    console.log(user.isAuth)
    return (
        <Navbar style={{ backgroundColor: '#DED2FF', color: 'black', height: '50px', color: 'black' }}>
            <Container>
                <NavLink className="app-title" to={HOME_ROUTE_1}>Нежные чувства</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Link className="links ml-4" to={'/'}>Главная</Link>
                        <Link className="links ml-4" to={'/shop'}>Каталог</Link>
                        <Link className="ml-4" to={'/basket'}><img className='basket' src={CartIcon} /></Link>
                        <span className="ml-4" style={{ color: 'black'}}>{user?.user?.email}</span><span className="links ml-4" onClick={() => logOut()}>Выйти</span>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Link className="links ml-4" to={'/'}>Главная</Link>
                        <Link className="links ml-4" to={'/shop'}>Каталог</Link>
                        <Link className="links ml-4" to={'/login'}>Вход</Link>&nbsp;/&nbsp;<Link className="links" to={'/registration'}>Регистрация</Link>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
