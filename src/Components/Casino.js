import React, { useState } from 'react';

import styled from 'styled-components';

const HomeWrapper = styled.div`
	height: 100vh;
`;

const Title = styled.h1`
	font-size: 2.5em;
	text-align: center;
	color: palevioletred;
`;

const InputBox = styled.div`
	color: palevioletred;
	display: grid;
	grid-template-columns: 15em 15em 15em;
	justify-content: space-evenly;
	text-align: center;
`;

const TitleWrapper = styled.div`
	color: palevioletred;
	text-align: center;
`;

const InputWrapper = styled.div`
	color: palevioletred;
	text-align: center;
`;

const InputData = styled.input`
	text-align: center;
	transition: 0.25s border ease-in-out;
	border-radius: 0 !important;
	outline: none !important;
	box-shadow: none !important;
	background: transparent;
	color: black;
	border: 0;
	border-bottom: 2px solid palevioletred;
	font-size: 20px;
	width: 4em;
	&:focus {
		border-bottom-color: black;
	}
`;

const TitleInput = styled.h2`
	padding: 1em;
`;

const Button = styled.button`
	padding: 0.4em;
	border-color: palevioletred;
	background: none;
	border-radius: 5px;
	font-size: 25px;
	display: flex;
	margin: auto;
	margin-top: 2em;
	&:hover {
		cursor: pointer;
		background: #db709369;
	}
`;

const callAPI = async () => {
	console.log('callAPI');
	fetch('/api/MonteCarlo', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const Casino = () => {
	const [inputValue, setInputValue] = useState({});

	const handleInput = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
		setInputValue({ name: value });
	};

	return (
		<HomeWrapper>
			<Title>Casino</Title>
			<InputBox>
				<InputWrapper>
					<TitleInput>Probablity</TitleInput>
					<InputData
						type='number'
						placeholder='0.51'
						name='Probablity'
						value={inputValue.probablityValue}
						onChange={handleInput}></InputData>
				</InputWrapper>
				<InputWrapper>
					<TitleInput>Initial Cash</TitleInput>
					<InputData
						type='number'
						placeholder='10000$'
						name='Cash'
						value={inputValue.cashValue}
						onChange={(e) => handleInput(e)}></InputData>
				</InputWrapper>
				<InputWrapper>
					<TitleInput>Bet</TitleInput>
					<InputData
						type='number'
						placeholder='100$'
						name='Bet'
						value={inputValue.betValue}
						onChange={(e) => handleInput(e)}></InputData>
				</InputWrapper>
			</InputBox>
			<Button onClick={() => callAPI()}>Calculate</Button>
		</HomeWrapper>
	);
};
