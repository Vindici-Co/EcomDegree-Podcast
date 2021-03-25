import React from "react";
import DropdownItem from "./DropdownItem";
import styled from "styled-components";
import { IDropdownProps } from "./index";
import { nanoid } from "nanoid";

/**
 * @interface IDropdownPopupProps
 * @field { string } dropdownState - the currently selsected option of the Dropdown
 * @field { React.Dispatch<string> } setDropdownState - react dispatch function to set dropdown state
 */
interface IDropdownPopupProps extends IDropdownProps {
  dropdownState: string;
  setDropdownState: React.Dispatch<string>;
}

const TopShell = styled.div`
  position: relative;
  top: -35px;
  /* #03 Light */
  background: #2f3537;
  width: 100%;
  height: 40px;
  z-index: 1;
`;
const BottomShell = styled.div`
  position: relative;
  top: -35px;
  /* #03 Light */
  background: #2f3537;
  width: 100%;
  height: 16px;
  z-index: 1;
  border-radius: 0 0 20px 20px;
`;

const DropdownPopup: React.FC<IDropdownPopupProps> = (
  props: IDropdownPopupProps
) => {
  return (  
    <>
      <TopShell />
      {props.optionsArray.map((option) => {
        return (
          <DropdownItem
            optionName={option}
            dropdownState={props.dropdownState}
            setDropdownState={props.setDropdownState}
            key={nanoid()}
          />
        );
      })}
      <BottomShell />
    </>
  );
};

export default DropdownPopup;
