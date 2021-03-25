import React, { useState } from "react";
import styled from "styled-components";
import DropdownPopup from "./DropdownPopup";
import DownwardArrow from "../../Icons/DownardArrow";

/**
 * @interface IDropdownProps
 * @field { Array<string> } optionsArray - an array of strings representing the dropdown options
 * @field { React.Dispatch<string> } setDropdownValue - the react dispatch fucntion to set the state of the dropdown
 */
export interface IDropdownProps {
  optionsArray: Array<string>;
}

const DropdownRoot = styled.div`
  position: relative;
  /* #03 Light */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 220px;
`;

const SelectedItem = styled.div`
  position: relative;
  /* #03 Light */
  background: #505355;
  border-radius: 20px;
  width: 220px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
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
  color: ${(props) => props.theme.colors.main.orange};
`;

const ControlsRoot = styled.div`
  /* #03 Light */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Spacing = styled.div`
  padding: 8px;
`;

const CloseButtonRoot = styled.div`
  width: 60px;
  height: 60px;
  background: #505355;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Dropdown: React.FC<IDropdownProps> = (props: IDropdownProps) => {
  /** set the inital state as the first item in the options array */
  const [dropdownState, setDropdownState] = useState(props.optionsArray[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ControlsRoot>
      <DropdownRoot>
        <SelectedItem>
          <Text>{dropdownState} </Text>
        </SelectedItem>
        {isOpen && (
          <DropdownPopup
            {...props}
            dropdownState={dropdownState}
            setDropdownState={setDropdownState}
          />
        )}
      </DropdownRoot>
      <Spacing />
      <CloseButtonRoot onClick={()=> handleOpen()}>
        <DownwardArrow />
      </CloseButtonRoot>
    </ControlsRoot>
  );
};

export default Dropdown;
