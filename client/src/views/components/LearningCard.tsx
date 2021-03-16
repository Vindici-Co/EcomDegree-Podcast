import React from "react";
import styled, {StyledProps} from "styled-components";
import AmazonIcon from "../Icons/AmazonIcon";
import ShopifyIcon from "../Icons/ShopifyIcon";


/**
 * @Interface ILearningCardProps
 * @field { "amazon" | "shopify" } platformType - the type of card shopify or amazon
 * @field { string } cardThumbnail - the thumbnail for the given card video
 */

export interface ILearningCardProps {
	platformType: "amazon" | "shopify";
  cardThumbnail: string;
}

const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
  width: 45vw;
  min-width: 650px;
  height: 400px;
  border-radius: 15px;
  background: #192431;
  justify-content: flex-start;
  align-self: center;
`;

const Image = styled.img`
  height: 100%;
  width: 50%;
  border-radius: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 150px;
  margin: 0 0 0 50px;
`;

const UpperTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 10px;
  color: ${(props) => props.theme.grays[100]};
  font-weight: lighter;
  margin: 0 48px 0 0;
  width: 100%;
`;
const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 25px;
  color: ${(props) => props.theme.grays[100]};
  font-weight: 500;
  width: 188px;
  text-align: left;
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 46px;
`;

const getButtonColor = (props: StyledProps<any>) => {
	if(props.platformType === "shopify"){
		return "#5E8E3E"
	}
	return "#F49A12"
};

const Button = styled.button`
  background: ${(props) => getButtonColor(props)};
  font-family: ${(props) => props.theme.fonts.main};
  color: white;
  width: 180px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: ${(props) => `-15px 10px 30px ${getButtonColor(props)}`};
`;
const LearningCard: React.FC<ILearningCardProps> = (
  props: ILearningCardProps
) => {
  return (
    <Container>
      <Image src={props.cardThumbnail} alt="image" />
      <TextContainer>
        {props.platformType === "shopify" ? (
          <UpperTitle>Shopify Droppshipping </UpperTitle>
        ) : (
          <UpperTitle>Amazon FBA & FBM</UpperTitle>
        )}
        <HeadlineContainer>
          {props.platformType === "shopify" ? (
            <Description>Build Your Own Shopify Brand </Description>
          ) : (
            <Description>Learn More About Amazon</Description>
          )}
          {props.platformType === "shopify" ? <ShopifyIcon /> : <AmazonIcon />}
        </HeadlineContainer>
        <Button {...props}>Watch Now</Button>
      </TextContainer>
    </Container>
  );
};

export default LearningCard;
