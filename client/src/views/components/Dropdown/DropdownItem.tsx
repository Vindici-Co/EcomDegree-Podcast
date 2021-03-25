import React from "react";
import styled, { StyledProps, ThemedStyledProps } from "styled-components";

/**
 * @interface IDropdownProps
 * @field { string } optionName - the name of the given option
 * @field { string } dropdownState - the currently selsected option of the Dropdown
 * @field { React.Dispatch<string> } setDropdownState - react dispatch function to set dropdown state
 */
interface IDropdownItemProps {
  optionName: string;
  dropdownState: string;
  setDropdownState: React.Dispatch<string>;
}

const getTextColor = (props: StyledProps<any>) => {
  if (props.dropdownState == props.optionName) {
    return "#FF9900";
  }
  return "#FFFFFF";
};

const OptionRoot = styled.div`
  top: -35px;
  position: relative;
  /* #03 Light */
  background: #2f3537;
  width: 220px;
  height: 60px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #454d50;
  }
`;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  letter-spacing: 0.5px;
  color: ${(props) => getTextColor(props)};
`;

const DropdownItem: React.FC<IDropdownItemProps> = (props: IDropdownItemProps) => {
  return (
    <OptionRoot onClick={() => props.setDropdownState(props.optionName)}>
      <Text {...props}>{props.optionName}</Text>
    </OptionRoot>
  );
};

export default DropdownItem;
