import React from "react";
import styled from "styled-components";
import ecomTheme from "../../../styles/theme";
import VideoCard from "./VideoCard";
/**
 * @interface IPrimaryVideoCardProps
 * @field { string } thumbnailUrl - the thumbnail from the given youtube video
 * @field { string } description - the description of the given youtube video
 * @field { string } title - the title of the given youtube video

 */
export interface IPrimaryVideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
}

const VideoCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: flex-start;
  justify-content: flex-end;
`;

const PrimaryVideoCard = (props: IPrimaryVideoCardProps) => {
  const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

`;
  const ContentTitle = styled.p`
    font-size: 40px;
    font-family: ${(props) => props.theme.fonts.main};

  `;
  const ContentDescription = styled.p`
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.secondary};
    padding-bottom: 16px;

  `;
  return (
    <VideoCard thumbnailUrl={props.thumbnailUrl}>
      <ContentWrapper>
      <div>
        <ContentTitle>{props.title}</ContentTitle>
      </div>
      <div>
        <ContentDescription>{props.description}</ContentDescription>
      </div>
      </ContentWrapper> 
    </VideoCard>
  );
};

export default PrimaryVideoCard;
