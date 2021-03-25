/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

/**
 * @interface IVidoeCardProps
 * @field { ReactNode } children - the children to be rendered inside of the Video card
 * @field { string } thumbnailUrl - the thumbnail from the given youtube video
 */
interface IVideoCardProps {
  children: React.ReactNode;
  thumbnailUrl: string;
}

const VideoCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const VideoCard: React.FC<IVideoCardProps> = (props: IVideoCardProps) => {
  const VideoCard = styled.div`
    background-image: url(${(p: IVideoCardProps) => p.thumbnailUrl});
    min-width: 500px;
    width: 42vw;
    height: 470px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: ${props => props.theme.borderRadius};
  `;
  return (
    <VideoCard {...props}>
      <VideoCardRoot>{props.children}</VideoCardRoot>
    </VideoCard>
  );
};

export default VideoCard;
