import styled from "styled-components";


export const EditSection = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary}20;

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
    
    h2 {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
    
    h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  input,
  select {
    width: 100%;
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}30;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: inherit;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
      opacity: 0.7;
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
      transform: translateY(-1px);
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary}50;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    
    input,
    select {
      padding: 0.875rem;
      font-size: 0.95rem;
    }
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.primary} 0%, ${
      theme.colors.accent || theme.colors.primary
    } 100%)`};
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    background: ${({ theme }) =>
      `linear-gradient(135deg, ${theme.colors.accent || theme.colors.primary} 0%, ${
        theme.colors.primary
      } 100%)`};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 0.875rem;
    font-size: 0.95rem;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 2px solid ${({ theme }) => theme.colors.textSecondary}40;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textSecondary}10;
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary}50;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: 0.95rem;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.darkBg};

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 12px;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.cardBg};
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
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}30;
    border-radius: 8px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.text};
    appearance: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary}50;
    }
  }

  &::after {
    content: "▼";
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.primary};
    pointer-events: none;
    font-size: 0.8rem;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    
    select {
      padding: 0.875rem;
      font-size: 0.95rem;
    }
  }
`;

export const EditIndicator = styled.div`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.accent || theme.colors.primary} 100%
  );
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  ${SaveButton}, ${CancelButton} {
    flex: 1;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;