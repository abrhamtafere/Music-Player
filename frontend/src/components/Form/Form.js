import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setformStatus } from "../../state/musicSlice";
import { Label, Input } from '@rebass/forms';
import { Box } from "rebass";
import RegistrationForm from "./RegistrationForm";
import SongForm from "./SongForm";

function Form() {
  const { formStatus } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  return (
    <FormContainer formStatus={formStatus}>
      <SubContainer>
        <H1>Music Form</H1>
        <Button onClick={() => dispatch(setformStatus(!formStatus))}>
          close
        </Button>
      </SubContainer>
      <FormDetails>
        
        <SongForm />
        {/* <RegistrationForm /> */}
      </FormDetails>
    </FormContainer>
  );
}
// onClick={() => dispatch(setFormStatus(!formStatus))}
const FormContainer = styled.div`
  position: fixed;
  z-index: 9;
  top: 80px;
  padding: 0 0 50px 0;
  right: 0;
  width: 40rem;
  height: 100%;
  background-color: white;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  user-select: none;
  overflow: scroll;
  transform: translateX(${(p) => (p.formStatus ? "0%" : "0%")});
  transition: all 0.5s ease;
  opacity: ${(p) => (p.formStatus ? "100" : "0")};
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 100;
    top: 0px;
  }
`;

const H1 = styled.h2``;

const SubContainer = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FormDetails = styled.div`
 border-top: solid pink;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: flex-col;
`;

const Button = styled.button`
  backgroundx: transparent;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  border: 0px solid rgb(65, 65, 65);
  padding: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    background: rgb(65, 65, 65);
    color: white;
  }
`;
export default Form;
