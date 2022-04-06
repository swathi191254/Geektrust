import React, { useState } from "react";
import styled from "styled-components";
import './Home.css'
///import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = styled("div")`
  font-family: sans-serif;
  margin-top:-40px;
 
`;

const DropDownContainer = styled("div")`
  width: 14em;
  margin: 0 auto;
  text-align: left;

`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
 
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  
  color:black;
  border: 2px solid #e5e5e5;
  
  
  font-size: 1rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export default function Dropthree() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
      <div className="dropThree">
    <Main>
      <DropDownContainer>

        <DropDownHeader onClick={toggling} >...</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>Setting</ListItem>
              <ListItem>Safe Search</ListItem>
              <ListItem>Seach History</ListItem>
              <ListItem>My Bing</ListItem>
              <ListItem>Privacy</ListItem>
              <ListItem>Feed back</ListItem>
              <ListItem>Customise your home page</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
    </div>
  );
}