// src/styles/Login.styles.jsx
import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent; // ou remova se já tiver imagem no body
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(28, 28, 28, 0.85);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(255, 0, 0, 0.3);
  color: #fff;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: #ff3c00;
  font-family: "Oswald", sans-serif;
  margin-bottom: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

/*export const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #333;
  background-color: #111;
  color: #fff;
  font-size: 15px;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #ff4500;
    outline: none;
  }
`;*/

export const Button = styled.button`
  padding: 14px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff4500 0%, #ff2400 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(255, 69, 0, 0.4);

  &:hover {
    background: linear-gradient(90deg, #ff2400 0%, #ff0000 100%);
    transform: scale(1.02);
  }
`;

export const LinkButton = styled.button`
  margin-top: 10px;
  color: #ff4500;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #ffa07a;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
`;
export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: absolute;
  top: 14px;
  left: 14px;
  color: #888;
  font-size: 16px;
  pointer-events: none;
  transition: all 0.2s ease;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 12px 14px 12px;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: #111;
  color: #fff;
  font-size: 15px;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    left: 10px;
    font-size: 12px;
    color: #ff4500;
    background-color: #111;
    padding: 0 4px;
  }
`;
export const GoogleContainer = styled.div`
  text-align: center;
  margin: 1.5rem 0;

  p {
    color: #666;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  background-color: #fff;
  color: #757575;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f7f7f7;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;
