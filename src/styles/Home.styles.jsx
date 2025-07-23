import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding: 1rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.darkBg};

  /* Tablet */
  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  /* Desktop */
  @media (min-width: 992px) {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  margin: 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
    text-align: left;
  }
`;

export const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 1 coluna no mobile */
  gap: 1rem;

  /* Tablet */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  }

  /* Desktop Pequeno */
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  /* Desktop Grande */
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); // 4 colunas em telas maiores
  }
  /* Telas muito grandes */
  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr); // 5 colunas
  }
`;

export const DayCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const DayTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

export const TreinoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #7f8c8d;
`;

export const LogoutButton = styled.button`
  background: ${({ theme }) => theme.colors.error};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #c0392b;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0.75rem;
  }
`;
