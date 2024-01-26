import styled from "styled-components";
export const InputSelectAccount = styled.input`
  width: 80.5%;
  height: 70px;
  border-style: solid;
  border-color: black;
  margin-left: 9%;
  margin-bottom: 1%;
  border-radius: 3px;
`;

export const SidebySideDiv = styled.div`
  display: flex;
`;

export const PaymentButtons = styled.button`
  display: block;
  width: 31%;
  height: 50px;
  background-color: ${(props) =>
    props.cancel ? "#eef5" : props.disabled === true ? "grey" : "#0fbfeb"};
  border-style: solid;
  border-color: ${(props) => (props.cancel ? "#12141c" : "")};
  font-weight: bold;
  border-radius: 3px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const PaymentsButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
  gap: 10px;
`;
