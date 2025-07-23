import styled from "styled-components";

export const EditSection = styled.div`
  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 100%;
  }
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  color: ${({ theme }) => theme.colors.text};

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2rem;
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  input,
  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 0 2px rgba(244, 162, 97, 0.2);
    }
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(90deg, #ff4500 0%, #ff2400 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: ${({ theme }) => theme.effects.glow};

  &:hover {
    background: linear-gradient(90deg, #ff2400 0%, #ff0000 100%);
    transform: scale(1.02);
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(42, 157, 143, 0.1);
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.darkBg};

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 12px;
  margin-bottom: 1.5rem;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: #111;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: ${({ theme }) => theme.effects.glow};
  }
`;
export const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  select {
    width: 100%;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.cardBg || "#252525"};
    color: ${({ theme }) => theme.colors.text};
    appearance: none;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 0 2px rgba(244, 162, 97, 0.3);
    }
  }

  &::after {
    content: "▼";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.primary};
    pointer-events: none;
    font-size: 0.8rem;
  }
`;
