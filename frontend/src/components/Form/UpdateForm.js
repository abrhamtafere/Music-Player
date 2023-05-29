import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SongUpdateForm from "./SongUpdateForm";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateForm() {
  const [initialData, setInitialData] = useState();
  const { id } = useParams();
  const { formStatus2, songs } = useSelector((state) => state.music);
  // const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://addis-suit-musics.onrender.com/api/songs/` + id)
      .then((res) => {
        setInitialData(res.data);
        console.log("updateForm");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <FormContainer formStatus2={formStatus2}>
      <SubContainer>
        <H1>Music Form</H1>
      </SubContainer>
      <FormDetails>
        <SongUpdateForm initialData={initialData} id={id} />
        {/* <RegistrationForm /> */}
      </FormDetails>
    </FormContainer>
  );
}
// onClick={() => dispatch(setFormStatus(!formStatus))}
const FormContainer = styled.div`
  position: fixed;
  z-index: 40;
  top: 60px;
  padding: 0 0 50px 0;
  right: 0;
  width: 30rem;
  height: 100%;
  background-color: white;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  user-select: none;
  overflow: scroll;
  transform: translateX(${(p) => (p.formStatus2 ? "0%" : "0%")});
  transition: all 0.5s ease;
  opacity: ${(p) => (p.formStatus2 ? "100" : "0")};
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
  padding: 1rem;
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
  justify-content: center;
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
export default UpdateForm;
