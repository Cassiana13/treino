import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding: 1rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.darkBg};

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  @media (min-width: 992px) {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.darkBg};
  position: sticky;
  top: 0;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
    text-align: left;
  }
`;

export const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const DayCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  transition: all 0.3s ease;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.effects.glow};
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
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const LogoutButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0.75rem;
  }
`;

export const DayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 12px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}20;
  }
`;

export const ToggleIcon = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
export const FormFloatingWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  position: sticky;
  top: 80px;
  z-index: 5;
`;
export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
