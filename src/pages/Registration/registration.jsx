import React, { useState, useRef } from 'react';
import './registration.css';
import '../../basic.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import logo from '../../pics/last.gif';
// import PolarChart from '../../components/PolarChart/PolarChart';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import { register } from '../../actions/auth';

const required = (value) => {
	if (!value) {
		return (
			<div className='tip' role='alert'>
				This field is required!
			</div>
		);
	}
};

const validEmail = (value) => {
	if (!isEmail(value)) {
		return (
			<div className='tip' role='alert'>
				This is not a valid email.
			</div>
		);
	}
};

const vusername = (value) => {
	if (value.length < 3 || value.length > 20) {
		return (
			<div className='tip' role='alert'>
				The username must be between 3 and 20 characters.
			</div>
		);
	}
};

const vpassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		return (
			<div className='tip' role='alert'>
				The password must be between 6 and 40 characters.
			</div>
		);
	}
};

const Registration = (props) => {
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [city, setCity] = useState('');
	const [photo, setPhoto] = useState('');
	const [successful, setSuccessful] = useState(false);

	const { message } = useSelector((state) => state.message);
	const dispatch = useDispatch();

	const onChangePhoto = (e) => {
		const photo = e.target.value;
		setPhoto(photo);
	};

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangeCity = (e) => {
		const city = e.target.value;
		setCity(city);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		setSuccessful(false);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			dispatch(register(username, email, password, city, photo))
				.then(() => {
					setSuccessful(true);
				})
				.catch(() => {
					setSuccessful(false);
				});
		}
	};
	return (
		<div className='background standart '>
			<div className='sticky-top '>
				<Header />
			</div>
			<div className='content'>
				<img
					className='wavy'
					src={require('../../pics/purple_bottom_wave_01.png')}
					alt='wave'
				/>

				<div className='reg_wavy_content'>
					<div className='row '>
						<div className='reg_logo col-sm-6 '>
							<img src={logo} alt='logo'></img>
						</div>

						<div className='form-container col-sm-6 '>
							<Form
								className=' signup-form col-sm-12'
								onSubmit={handleRegister}
								ref={form}
							>
								{!successful && (
									<div>
										<h3 className='text-center title'>
											<strong>Create</strong> an account
										</h3>

										<main className='col-sm-10 form-signup text-left'>
											<div className='form-row  '>
												<div className=' form-group ava col-md-6'>
													<img
														src='/Images/ava.jpg'
														className='rounded-circle'
														alt='user_avatar'
														value={photo}
														onChange={onChangePhoto}
													/>
													<button className='col-sm-1 btn btn-circle add_photo btn-lg '>
														<MdOutlineAddAPhoto />
													</button>
													<h6 className='warning'>
														*not required
													</h6>
												</div>
												<div className='form-group col-sm-12'>
													<label
														htmlFor='floatingInput'
														className='control-label '
													>
														Username
													</label>
													<Input
														type='username'
														className='form-control'
														name='username'
														value={username}
														onChange={onChangeUsername}
														validations={[required, vusername]}
														id='floatingInput'
														placeholder='Input username'
													/>
												</div>

												<div className='form-group col-sm-12'>
													<label
														htmlFor='floatingInput'
														className='control-label '
													>
														Email address
													</label>
													<Input
														type='email'
														className='form-control'
														name='email'
														value={email}
														onChange={onChangeEmail}
														validations={[required, validEmail]}
														id='floatingInput'
														placeholder='name@example.com'
													/>{' '}
												</div>
												<div className='form-group col-sm-12'>
													<label
														htmlFor='floatingInput'
														className='control-label '
													>
														Location
													</label>
													<input
														type='city'
														className='form-control'
														name='city'
														value={city}
														onChange={onChangeCity}
														validations={[required]}
														id='floatingInput'
														placeholder='Input city and country'
													/>
												</div>
												<div className='form-group col-sm-12'>
													<label
														htmlFor='floatingPassword'
														className='control-label '
													>
														Password
													</label>
													<Input
														type='password'
														className='form-control'
														name='password'
														value={password}
														onChange={onChangePassword}
														validations={[required, vpassword]}
														id='floatingPassword'
														placeholder='Input password'
													/>
												</div>
												<div className='text-left form-check col-sm-12'>
													<label className='form-check-label'>
														<input
															type='checkbox'
															className='form-check-input'
														/>
														I agree to the license terms.
													</label>
												</div>
											</div>
											<div className='center'>
												<div className=' col-sm-12 form-group'>
													<button className='btn' type='submit'>
														Sign Up
													</button>
												</div>
												<p className='already'>
													Already have an account?{' '}
													<a href='/Login'> Log in</a>
												</p>
											</div>
										</main>
									</div>
								)}

								{successful && <Navigate replace to='/Login' />}
								{message && (
									<div className='form-group'>
										{/* {message === 'successful operation'}: */}
										<div
											className={!successful && 'tip'}
											role='alert'
										>
											{message}
										</div>
									</div>
								)}
								<CheckButton
									style={{ display: 'none' }}
									ref={checkBtn}
								/>
							</Form>
						</div>
						<div className='violet_back '></div>
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

export default Registration;
