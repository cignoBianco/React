import React from 'react'
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap'

const Navigation = () => {
  return(
    <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
        <Nav.Link href="/">
            <Link to={{pathname:'/'}}>
            Home
            </Link>
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/deseases">
            <Link to={{pathname:'/deseases/'}}>
            Deseases
            </Link>
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/symptoms">
            <Link to={{pathname:'/symptoms/'}}>
            Symptoms
            </Link>
        </Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default Navigation