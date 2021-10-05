import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const Education = () => {
	return (
		<div
			data-test="col"
			col={8}
			className="col"
			style={{
				background:
					'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))',
				color: 'white',
				padding: '5px',
			}}
		>
			<h4>Education</h4>
			<div data-test="row" className="row">
				<div data-test="col" col={4} className="col">
					<p>2009 - 2013</p>
				</div>
				<div data-test="col" col={8} className="col">
					<h4 style={{ marginTop: '0px' }}>
						<strong>Addis Ababa University </strong>
					</h4>
					<p>
						{' '}
						<strong>Business Management </strong>
					</p>
				</div>
			</div>
			<div data-test="row" className="row">
				<div data-test="col" col={4} className="col">
					<p>2016 - 2020</p>
				</div>
				<div data-test="col" col={8} className="col">
					<h4 style={{ marginTop: '0px' }}>
						Haaga-Helia University of Applied Sciences
					</h4>
					<p>Business Information Technology</p>
				</div>
			</div>
			<hr style={{ borderTop: '3px solid rgb(226, 41, 71)' }} />
		</div>
	);
};

export default Education;
