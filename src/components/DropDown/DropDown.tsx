import React from "react";

import {
  DropContainer,
  Icon,
  CloseIcon,
  DropWrapper,
  DropMenu,
  DropLink,
} from "./DropElements";

interface DropProps {
  isOpen: boolean;
  toggleState: boolean;
}
 

const DropDown: React.FC<DropProps> = ({isOpen, toggleState}) => {
  return (
    <DropContainer isOpen={isOpen} onClick={toggleState}>
      <Icon onClick={toggleState}>
        <CloseIcon />
      </Icon>
      <DropWrapper>
        <DropMenu>
          <DropLink to="/">Home</DropLink>
          <DropLink to="/about">About</DropLink>
          <DropLink to="/search">Search</DropLink>
        </DropMenu>
      </DropWrapper>
    </DropContainer>
  );
};

export default DropDown;
