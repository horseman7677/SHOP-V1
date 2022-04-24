import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ButtonBase } from '@mui/material';
import Logo from '../images/Logo.png'

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='left'>
                    <Link to="/"><img className='logo' src={Logo} alt='' /></Link>
                </div>
                <div className='middle'>
                    <div className='snacks'>
                        <Link to='/snacks' className='link'>
                            snacks
                        </Link>
                    </div>
                    <div className='sweets' >
                        <Link to='/sweets' className='link'>
                            sweets
                        </Link>
                    </div>
                </div>
                <div className='right'>
                    <ButtonBase centerRipple>
                        <ShoppingCartIcon />
                    </ButtonBase>
                </div>
            </div>
        </>
    )
}

export default Navbar