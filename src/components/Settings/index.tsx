import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import { ButtonBack, Container, ContentButton, Text } from "./styles";
import "./../../index.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import SettingsContext from "../../context/SettingsContex";

const Settings = () => {
  const {
    handlerButton,
    workMinutes,
    setWorkMinutes,
    breakMinutes,
    setBreakMinutes,
  } = useContext(SettingsContext);

  return (
    <Container>
      <Text>Work Minutes: {workMinutes}</Text>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={workMinutes}
        onChange={(newValue) => setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <Text>Break Minutes: {breakMinutes}</Text>
      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb green"}
        trackClassName={"track"}
        value={breakMinutes}
        onChange={(newValue) => setBreakMinutes(newValue)}
        min={1}
        max={30}
      />
      <ContentButton>
        <ButtonBack onClick={() => handlerButton()}>
          <MdOutlineArrowBackIosNew />
          Back
        </ButtonBack>
      </ContentButton>
    </Container>
  );
};

export default Settings;
