import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import ProjCard from '../components/ProjectCard';

const Projects = () => {
	const [state] = useState([
		{
			name: 'Finnknino',
			site: 'https://cinkinoweb.web.app/',
			image: 'movie',
			details:
				'Movie App using Fiinkino Cinema API, PWA and deployed in Googleplay ',
			tech: 'Redux, React',
			github: 'git',
		},
		{
			name: 'UasCompare',
			site: 'https://thirsty-sinoussi-691f16.netlify.app',
			image: 'movie',
			details:
				'React-Redux App to check info about Finnish Universities, It uses an API I built',
			tech: 'Redux, React',
			github: 'git',
		},
		{
			name: 'Finder',
			site: 'https://xenodochial-hermann-6705e0.netlify.app',
			image: 'movie',
			details:
				'A React App using different APIs to Fetch information and display in a compact way',
			tech: 'Redux, React',
			github: 'https://github.com/YosephGezahegn/Finderr.git',
		},
		{
			name: 'SpeechtoNote',
			site: 'https://vibrant-brahmagupta-ffb6d7.netlify.app/',
			image: 'movie',
			details:
				'A TO-DO App using Web-Speech API, to write using voice and saving for later using localStorage ',
			tech: 'Redux, React, WebSpeechAPI',
			github: 'git',
		},
	]);
	console.log(state.map((i) => i.name));

	return (
		<Grid
			container
			xs={12}
			sx={{
				background:
					'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))',
				color: 'white',
				padding: '5px',
			}}
		>
			{state.map((proj, index) => (
				<Grid
					item
					xs={12}
					lg={4}
					md={4}
					sm={6}
					sx={{ width: '100%', padding: '10px' }}
				>
					{' '}
					<ProjCard proj={proj} key={index} />
				</Grid>
			))}
		</Grid>
	);
};

export default Projects;
