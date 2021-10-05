import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const Experience = () => {
	return (
		<div
			data-test="col"
			col={8}
			className="col"
			style={{
				background:
					'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))',
				color: 'white',
				padding: '1px',
			}}
		>
			<div>
				<h2>Experience</h2>
				<div data-test="row" className="row">
					<div data-test="col" col={4} className="col">
						<p>2012 - 2015</p>
						<p>Cargo Systems and Handling Agent</p>
					</div>
				</div>
				<ul style={{ textAlign: 'left' }}>
					<li>
						Loading on cargo spot system for all passenger and cargo flights.
					</li>
					<li>
						Check with offloading file and plan shipments for the next available
						flights.
					</li>
					<li>
						Check the availability of documents with corresponding shipments .
					</li>
					<li>
						Load preparation by considering, Aircraft type, booking, nature
						shipment.
					</li>
				</ul>
				<hr style={{ borderTop: '3px solid rgb(226, 41, 71)' }} />
			</div>
		</div>
	);
};

export default Experience;
