import styled from "styled-components";

export const TreinoCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 8px;
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.75rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.effects.glow};
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1rem;
    }
  }
`;

export const TreinoInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.8rem;
    }

    strong {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-between;
  }
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(
      255,
      69,
      0,
      0.1
    ); /* Pode ajustar para usar theme.colors.accent se quiser */
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.error};
  border: 1px solid ${({ theme }) => theme.colors.error};
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const TreinosGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
