import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

function Navigation(){
    return (
        <div className='Navigation mb-4'>
            <NavBar bg='light'>
                <Nav className='mx-auto'>
                    <Nav.Item className='mr-5'>
                        <Link to='/'>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/create'>New Post</Link>
                    </Nav.Item>
                </Nav>
            </NavBar>
        </div>
    );
}

export default Navigation;