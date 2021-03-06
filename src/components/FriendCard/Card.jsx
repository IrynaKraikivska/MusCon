/* eslint-disable react/prop-types */
import React from 'react';
import './Сard.css';
const Card = (props) => {
	return (
		<div className='card text-center shadow'>
			<div className='overflow'>
				<img src={props.imgsrc} alt='example' className='card-img-top' />
			</div>
			<div className='card-body text-dark'>
				<h4 className='card-title'>{props.title}</h4>
				<p className='card-text text-secondary'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
					fuga, quis pariatur, eveniet libero facere aut voluptas
					cupiditate cumque quod ipsa.
				</p>
				<a href='#' className='btn btn-outline-success'>
					Add friend
				</a>
				<a href='#' className='btn btn-outline-danger'>
					Delete
				</a>
			</div>
		</div>
	);
};

export default Card;
