import React, { useContext } from "react";
import Settings from "../../components/Settings";
import Timer from "../../components/Timer";
import SettingsContex from "../../context/SettingsContex";
import { Container } from "./styles";

const Home: React.FC = () => {

  const { showSettings } = useContext(SettingsContex)

  return (
    <main>
        <Container>
          {showSettings ? <Settings /> : <Timer/>}
        </Container>
    </main>
  );
};

export default Home;
