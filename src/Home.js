import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const HomeWrapper = styled.div`
	height: 100vh;
`;

const Title = styled.h1`
	font-size: 2.5em;
	text-align: center;
	color: palevioletred;
`;

const SubTitle = styled.h2`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

const CardWrapper = styled.div`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 30vh;
`;

const Card = styled.button`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
	padding: 1em;
	&:hover {
		cursor: pointer;
	}
`;

export const Home = () => {
	return (
		<HomeWrapper>
			<Title>Monte Carlo Simulation</Title>
			<SubTitle>Choose the different case scenarios:</SubTitle>
			<CardWrapper>
				<Link to='/casino'>
					<Card>Casino</Card>
				</Link>
				<Card>Scenario 2</Card>
				<Card>Scenario 3</Card>
			</CardWrapper>
		</HomeWrapper>
	);
};
