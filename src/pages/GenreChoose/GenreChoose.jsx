import React from 'react';
import './GenreChoose.css';
import '../../basic.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Genrechoose = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [checked, setChecked] = useState([]);

	const handleCheck = (event) => {
		var updatedList = [...checked];
		if (event.target.checked) {
			updatedList = [...checked, event.target.value];
		} else {
			updatedList.splice(checked.indexOf(event.target.value), 1);
		}
		setChecked(updatedList);
	};

	const checkedItems = checked.length
		? checked.reduce((total, item) => {
				return total + ', ' + item;
		  })
		: '';

	useEffect(() => {
		fetch(`http://127.0.0.1:5000/genres`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then((actualData) => {
				setData(actualData);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const onLinkClick = (e) => {
		e.preventDefault();
		const tokenData = JSON.parse(localStorage.getItem('user'));
		fetch(`http://127.0.0.1:5000/edit_genre`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenData.token}`,
			},
			body: JSON.stringify({ genre_id: checked }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then((actualData) => {
				setData(actualData);
				setError(null);
				if (data) {
					return <Navigate replace to='/Singerchoose' />;
				}
			})
			.catch((err) => {
				setError(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className='back'>
			<div className='top sticky-top '>
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
						<h1 id='sc_text'>Choose favourite genres:</h1>
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
						{
							<div className='row products-container'>
								{data &&
									data.map((number) => {
										return (
											<div
												key={number.toString()}
												className='col-xxl-1 col-xl-3 col-lg-4 col-md-6 col-sm-12'
											>
												<div className='sc_musician card'>
													<div className='flexy'>
														<p className='sc_singer'>{number}</p>
														<input
															value={number}
															type='checkbox'
															onChange={handleCheck}
															className='checkboxstyle red'
														/>
													</div>
												</div>
											</div>
										);
									})}
							</div>
						}
					</div>
					<button className='submit_button center' onClick={onLinkClick}>
						<Link
							to='/SingerChoose'
							state={{ genres: checkedItems }}
							className='submit_button_text'
						>
							Submit
						</Link>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Genrechoose;
