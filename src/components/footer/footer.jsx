import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<img
				className='footer_wave'
				src={require('../../pics/wave.png')}
				alt='wave'
			/>
			<p className='footer_text'>
				MusCon - Copyright 2022 © - All rights reserved{' '}
			</p>
		</footer>
	);
};
export default Footer;
