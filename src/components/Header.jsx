import '../App.css';
import React from 'react'
import { Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

// Header программы. 
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to={'/'} className="header">A&B</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to={'/'} className="header">Главная</Link></Nav.Link>
                        <Nav.Link><Link to={'/favorite'} className="header">Избранное</Link></Nav.Link>
                        <Nav.Link><Link to={'/price'} className="header">Корзина</Link></Nav.Link>
                        <Nav.Link><Link to={'/discription'} className="header">Описание</Link></Nav.Link>
                        <Nav.Link><Link to={'/form'} className="header">Обратная связь</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header