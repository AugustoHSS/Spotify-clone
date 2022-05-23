import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #051C23;
  background: linear-gradient(150deg, rgba(0,0,0,1) 14%, rgba(33,68,69,1) 70%, rgba(112,233,235,1) 100%);
  p{
    margin: 10px;
  }
  h1{
    color: #fafafafa;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: bold;

`;

export const Button = styled.button`
  all: unset;
  height: 45px;
  width: 40%;
  background-color: #0063f3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: 20px;
`;

export const FormsContainer = styled.div`
  background-color: #101415;
  width: 65vw;
  height: 80vh;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 27px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  div{
    color: #fafafafa;
    display: flex;
    width: 84%;
    align-items: center;
    justify-content: start;
  }
`;
export const CheckBox = styled.input`
  margin-right: 6px;
  size: 20px;
  transform: scale(1.2);
`;
export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  background-color: #101415;
  border-color: #fafafafa;
  color: #fafafafa;
  border: 1px solid #fafafafa;
  border-radius: 5px;
  height: 50px;
  width: 85%;
  padding-left: 2%;
  font-family: 'Roboto', sans-serif;
`;
