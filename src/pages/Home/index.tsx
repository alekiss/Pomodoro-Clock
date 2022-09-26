import React, { useContext, useState } from "react";
import Settings from "../../components/Settings";
import Timer from "../../components/Timer";
import SettingsContex, { SettingsProvider } from "../../context/SettingsContex";
import { Container } from "./styles";

const Home: React.FC = () => {

  const { showSettings } = useContext(SettingsContex)

  return (
    <main>
      <SettingsProvider>
        <Container>
          {showSettings ? <Settings /> : <Timer/>}
        </Container>
      </SettingsProvider>
    </main>
  );
};

export default Home;
