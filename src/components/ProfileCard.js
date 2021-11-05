import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GitHub, LinkedIn } from '@mui/icons-material';
import profilePic from '../images/res1.jpg';

export default function ImgMediaCard({ st }) {
	return (
		<Card
			sx={{
				boxShadow: 22,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				borderRadius: '20px',
				paddingInline: '0rem',
				maxWidth: '500px',
			}}
		>
			<Box sx={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
				<CardMedia
					sx={{
						width: 201,
						borderRadius: '100%',
						position: 'relative',
						boxShadow:
							'0px 5px 50px 0px #6c44fc, 0px 0px 0px 7px rgb(107 74 255 / 50%)',
					}}
					component="img"
					alt="green iguana"
					height="200"
					image={profilePic}
				/>
			</Box>

			<CardContent sx={{ maxWidth: 'auto' }}>
				<Typography
					sx={{ color: '#6944ff', fontWeight: 700, paddingTop: '1rem' }}
					align="center"
					gutterBottom
					variant="h5"
					component="div"
				>
					Yoseph Alemu
				</Typography>
				<Typography
					sx={{ paddingTop: 5, paddingRight: 5, paddingLeft: 5 }}
					variant="body1"
					color="text.secondary"
				>
					Python | Bootstrap | JavaScript | React | React Native | NodeJS |
					Express | MongoDB | HTML/CSS | Bootstrap Made with React
				</Typography>
				<Typography
					sx={{ paddingTop: 5, paddingRight: 5, paddingLeft: 5 }}
					variant="body1"
					color="text.secondary"
				>
					Made with React | Material UI
				</Typography>
			</CardContent>
			<CardActions
				sx={{ color: '#6944ff', paddingTop: '2rem', paddingBottom: '2rem' }}
			>
				<Button
					size="small"
					href="https://www.linkedin.com/in/yoseph-alemu-759391113/"
				>
					<LinkedIn
						sx={{
							fontSize: 40,
							color: '#405de6',
							boxShadow:
								'0px 5px 50px 0px #6c44fc, 0px 0px 0px 7px rgb(107 74 255 / 50%)',
							borderRadius: '22%',
						}}
					/>
				</Button>
				<Button size="small" href="https://github.com/YosephGezahegn">
					<GitHub
						sx={{
							fontSize: 40,
							color: '#405de6',
							boxShadow:
								'0px 5px 50px 0px #6c44fc, 0px 0px 0px 7px rgb(107 74 255 / 50%)',
							borderRadius: '22%',
						}}
					/>
				</Button>
			</CardActions>
		</Card>
	);
}
