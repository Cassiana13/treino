import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding: 1rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.darkBg};
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.darkBg} 0%, 
    ${({ theme }) => theme.colors.darkBg} 50%,
    ${({ theme }) => theme.colors.primary}15 100%
  );

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 992px) {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  background: transparent; // Torna transparente
  position: relative; // Remove sticky se não for necessário
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary}30; 
 & > *:first-child {
    margin-right: auto; // Empurra o botão para a direita
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem 0;
    gap:3rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const DayCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  transition: all 0.3s ease;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  min-height: 200px; // Altura mínima para consistência

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.effects.glow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
    min-height: 180px;
  }
`;

export const DayTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &::after {
    content: "${props => props.expanded ? '−' : '+'}";
    font-weight: bold;
    font-size: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

export const TreinoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyMessage = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.colors.primary}30;
  
  &::before {
    content: "🏋️";
    font-size: 2rem;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  .spin {
    animation: spin 1s linear infinite;
    font-size: 2rem;
    display: block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.textSecondary}30;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 1.5rem;
  opacity: 0.8;

  .material-icons {
    font-size: 22px;
    transition: inherit;
    gap:2px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}15;
    opacity: 1;
    transform: translateY(-1px);
    
    .material-icons {
      transform: scale(1.1);
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
    
    .material-icons {
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    margin-left: 1rem;
    
    .material-icons {
      font-size: 17px;
    }
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
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  position: sticky;
  top: 20px;
  z-index: 5;
  
  @media (max-width: 768px) {
    position: static;
    margin: 1rem 0;
    padding: 1.5rem;
  }
`;
export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
