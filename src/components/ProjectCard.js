import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import movie from '../images/movie.gif';

const ProjectCard = ({ proj }) => {
	const { name, image, details, site, tech, github } = proj;
	console.log(image);
	return (
		<Card sx={{ maxWidth: 345 }}>
			{image === 'movie' && (
				<Link>
					{' '}
					<CardMedia
						component="img"
						height="140"
						image={movie}
						alt={name}
						href={site}
						sx={{ textDecoration: 'none' }}
						target="_blank"
					/>
				</Link>
			)}

			<CardContent size="small">
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{details}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{tech}
				</Typography>
			</CardContent>
			<CardActions>
				<Button href={site} target="_blank" size="small">
					DEMO
				</Button>
				<Button href={github} target="_blank" size="small">
					GitHub
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProjectCard;
