import React from "react";
import styled from "styled-components";

/**
 * @Interface LearningCardProps
 * @cardImg { any } image on left side of card
 * @upperTitle { string } greyed out title at top of card
 * @description { string } middle desc of card
 * @lowerTitle { string }  boldedTitle below description
 * @btnColor { string } color of btn
 */

export interface LearningCardProps {
	cardImg: any;
	upperTitle: string;
	description: string;
	lowerTitle: string;
	btnColor: string;
}

const Container = styled.div`
	margin: 50px;
	display: flex;
	width: 500px;
	height: 230px;
	border-radius: 15px;
	background: #7482b4;
`;

const Image = styled.img`
	height: 230px;
	width: 250px;
	border-radius: 15px;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 150px;
	margin: 0 0 0 25px;
`;

const UpperTitle = styled.p`
	font-family: ${props => props.theme.fonts.secondary};
	font-size: 10px;
	color: ${props => props.theme.grays[100]};
	font-weight: lighter;
	text-align: left;
	margin: 0 48px 0 0;
`;
const Description = styled.p`
	font-family: ${props => props.theme.fonts.main};
	font-size: 16px;
	color: ${props => props.theme.grays[100]};
	margin: 13px 0 0 6px;
	font-weight: 500;
	text-align: left;
`;
const LowerTitle = styled.p`
	font-family: ${props => props.theme.fonts.main};
	font-size: 17px;
	color: ${props => props.theme.grays[100]};
	font-weight: 600;
	margin: 5px 0 0 6px;
	text-align: left;
`;

const LearningCard = (props: LearningCardProps): JSX.Element => {
	const Button = styled.button`
		background: ${(p: LearningCardProps) => p.btnColor};
		font-family: ${props => props.theme.fonts.main};
		color: white;
		border: none;
		border-radius: 14px;
		padding: 7px 33px;
		cursor: pointer;
		margin: 24px 0 0 0;
		box-shadow: ${(p: LearningCardProps) => `-15px 10px 30px ${p.btnColor}`};
	`;

	return (
		<Container>
			<Image src={props.cardImg} alt="image" />
			<TextContainer>
				<UpperTitle>{props.upperTitle}</UpperTitle>
				<Description>{props.description} </Description>
				<LowerTitle>{props.lowerTitle}</LowerTitle>
				<Button {...props}>Wach Now</Button>
			</TextContainer>
		</Container>
	);
};

export default LearningCard;
