import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import brew from '../../assets/images/Brew.png';
import { Drawer, IconButton, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const NAvbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='p-3 flex justify-between relative overflow-hidden bg-black'>
            <div className='px-5 flex w-full justify-between rounded-lg shadow-lg' style={{
                background: 'linear-gradient(to bottom right, #cb7601,#552c00 )', borderRadius: '40px',
            }}>
                <div className='flex text-black items-center font-3xl font-bold'>
                    <img src={brew} width={100} alt="Brew" />
                    <h1 className='text-3xl'>
                        𝔉𝔬𝔯𝔦𝔢𝔤𝔫 𝔩𝔦𝔮𝔬𝔲𝔯
                    </h1>
                </div>

                {/* Bubbles */}
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className='bubble'
                        style={{
                            width: `${Math.random() * 20 + 10}px`,
                            height: `${Math.random() * 20 + 10}px`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 5 + 5}s`,
                            opacity: Math.random()
                        }}
                    />
                ))}

                {/* Burger Icon for Mobile View */}
                {isMobile && (
                    <div className='md:hidden flex items-center'>
                        <IconButton onClick={toggleMenu} className='text-white'>
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </IconButton>
                    </div>
                )}

                {/* Drawer */}
                <Drawer
                    anchor='right'
                    open={isOpen}
                    onClose={toggleMenu}
                >
                    <div className='flex flex-col h-full p-4' style={{
                        background: 'linear-gradient(to bottom right,#ddaf0d, #cb7601,#552c00,#422e15 )'
                    }}>
                        <IconButton onClick={toggleMenu} className='self-end text-white'>
                            <FaTimes size={24} />
                        </IconButton>
                        <List>
                            <ListItem onClick={toggleMenu}>
                                <a href="#home" className="text-white">
                                    <ListItemText primary="Home" />
                                </a>
                            </ListItem>
                            <ListItem onClick={toggleMenu}>
                                <a href="#features" className="text-white">
                                    <ListItemText primary="Features" />
                                </a>
                            </ListItem>
                            <ListItem onClick={toggleMenu}>
                                <a href="#products" className="text-white">
                                    <ListItemText primary="Products" />
                                </a>
                            </ListItem>
                            <ListItem onClick={toggleMenu}>
                                <a href="#about" className="text-white">
                                    <ListItemText primary="About" />
                                </a>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>

                {/* Navbar Links for Desktop View */}
                <ul className='hidden md:flex md:justify-center md:items-center md:space-x-4 font-extrabold text-2xl text-black'>
                    <li className="mx-4">
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li className="mx-4">
                        <a href="#features">
                            Features
                        </a>
                    </li>
                    <li className="mx-4 text-black no-underline">
                        <a href="#products">
                            Products
                        </a>
                    </li>
                    <li className="mx-4">
                        <a href="#about">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NAvbar;
