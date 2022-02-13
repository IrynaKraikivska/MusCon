import React from 'react';
import './Main.css';
import '../../basic.css';
import logo from '../../pics/last.gif';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Main = () => {
	return (
		<div className='background'>
			<div className='sticky-top'>
				<Header />
			</div>
			<div className='content'>
				<img
					className='wavy'
					src={require('../../pics/purple_bottom_wave_01.png')}
					alt='wave'
				/>
				<div className='main_wavy_content'>
					<div className='row'>
						<div className='main_logo col-sm-6'>
							<img src={logo} alt='logo'></img>
						</div>
						<div className='col-sm-6'>
							<div className='main_text'>
								<p id='main_text_1'>Let your</p>
								<b>
									<p id='main_text_2'>music taste</p>
								</b>
								<p id='main_text_3'>make friends</p>
								<p id='main_text_4'>for you</p>
							</div>
							<div className='main_buttons'>
								<button
									type='button'
									className='main_vertical_button_right'
								>
									Log in
								</button>
								<br></br>
								<button
									type='button'
									className='main_vertical_button_left'
								>
									Sign up
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='main_wavy_bottom'>
					<img
						className='wavy'
						src={require('../../pics/white_bottom_wave_01.png')}
						alt='wave'
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Main;
