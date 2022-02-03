import React from 'react';
import './SingerChoose.css';
import '../../basic.css';
import singer from '../../pics/singer.jpg';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
var musicians = [
	'BLACKPINK',
	'Maneskin',
	'Melovin',
	'KAZKA',
	'Vivaldi',
	'Chopin',
	'YUNGBLUD',
	'BLACKPINK',
	'Maneskin',
	'Melovin',
	'KAZKA',
	'Vivaldi',
];

const SingerChoose = () => {
	return (
		<div className='background'>
			<div className='sticky-top '>
				<Header />
			</div>

			<div className='content'>
				<div className='sc_top'>
					<img
						className='wavy'
						src={require('../../pics/purple_bottom_wave_01.png')}
						alt='wave'
					/>
					<div className='sc_top_content'>
						<h1 id='sc_text'>Choose favourite singers / groups:</h1>
						<div className='sc_search_box'>
							<input
								className='sc_search'
								type='search'
								placeholder='Search through singers'
							></input>
							<button className='sc_button'>Search</button>
						</div>
					</div>
				</div>
				<div className='sc_wavy_content'>
					<div className='block'>
						<div className='row products-container'>
							{musicians.map((items, index) => {
								return (
									<div
										key={index}
										className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'
									>
										<div className='sc_musician card'>
											<img src={singer} alt='singer_pahoto' />
											<div className='flexy'>
												<p className='sc_singer'>{items}</p>
												<button className='sc_plus'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='bi bi-plus-lg'
														viewBox='0 0 16 16'
													>
														<path
															fillRule='evenodd'
															d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SingerChoose;