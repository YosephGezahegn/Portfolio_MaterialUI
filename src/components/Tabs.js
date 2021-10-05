import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Experience from '../Info/Experience';

import AboutMe from '../Info/AboutMe';
import Projects from '../Info/Projects';
import Education from '../Info/Education';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: 'divider',
					width: '100%',
				}}
			>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons
					allowScrollButtonsMobile
					aria-label="scrollable force tabs example"
				>
					<Tab label="Projects" {...a11yProps(0)} />
					<Tab label="Experience" {...a11yProps(1)} />
					<Tab label="About Me" {...a11yProps(2)} />
					<Tab label="Education" {...a11yProps(3)} />
				</Tabs>
			</Box>

			<Item sx={{ padding: '1px' }}>
				<TabPanel value={value} index={0}>
					<Projects />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Experience />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<AboutMe />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<Education />
				</TabPanel>
			</Item>
		</Box>
	);
}
