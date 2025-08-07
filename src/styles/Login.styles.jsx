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
  background-color: rgba(
    30,
    41,
    59,
    0.85
  ); // theme.colors.cardBg com transparência
  padding: 40px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  color: ${({ theme }) => theme.colors.text};
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 14px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: ${({ theme }) => theme.effects.shadow};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.effects.glow};
    transform: scale(1.02);
  }
`;

export const LinkButton = styled.button`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
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
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 16px;
  pointer-events: none;
  transition: all 0.2s ease;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 12px 14px 12px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.effects.glow};
    outline: none;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    left: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(30, 41, 59, 0.85);
    padding: 0 4px;
  }
`;

export const GoogleContainer = styled.div`
  text-align: center;
  margin: 1.5rem 0;

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
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
