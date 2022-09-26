import styled from "styled-components";

export const PlayButton = styled.button`
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 100px;
  cursor: pointer;
  margin-top: 50px;
  svg {
    width: 50px;
    height: 50px;
  }
`;

export const PauseButton = styled.button`
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 100px;
  cursor: pointer;
  margin-top: 50px;
  svg {
    width: 50px;
    height: 50px;
  }
`;

export const SettingsButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border: none;
  width: auto;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.4rem;
  line-height: 36px;
  svg {
    width: 36px;
    height: 36px;
    float: left;
    margin-right: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
