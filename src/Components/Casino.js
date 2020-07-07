import React from 'react';

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
	text-align: center;
	color: palevioletred;
`;

const InputWrapper = styled.div`
	text-align: center;
	color: palevioletred;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TitleInput = styled.h2`
	padding: 1em;
`;

export const Casino = () => {
	return (
		<HomeWrapper>
			<Title>Casino</Title>
			<InputBox>
				<InputWrapper>
					<TitleInput>Probablity</TitleInput>
					<input type='number' placeholder='0.51'></input>
				</InputWrapper>
				<InputWrapper>
					<TitleInput>Initial Cash</TitleInput>
					<input type='number' placeholder='10000$'></input>
				</InputWrapper>
				<InputWrapper>
					<TitleInput>Bet</TitleInput>
					<input type='number' placeholder='100$'></input>
				</InputWrapper>
			</InputBox>
		</HomeWrapper>
	);
};
