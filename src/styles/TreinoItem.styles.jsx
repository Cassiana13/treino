import styled from "styled-components";

export const TreinoCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.effects.glow};
    border-color: ${({ theme }) => theme.colors.primary}40;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px 0 0 4px;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    
    &:hover {
      transform: none; // Remove transform no mobile para melhor UX
    }
  }
`;

export const TreinoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 0.5rem;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.2rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex: 1;
    word-break: break-word;
  }

  .material-icons {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    opacity: 0.7;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    
    h3 {
      font-size: 1.1rem;
      line-height: 1.3;
    }
    
    .material-icons {
      font-size: 1.3rem;
    }
  }
`;

export const TreinoInfo = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const TreinoStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.darkBg};
  border-radius: 8px;
  transition: all 0.2s ease;
  min-height: 60px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .label {
    display: block;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .value {
    display: block;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    min-height: 55px;
    gap: 0.5rem;
    
    .label {
      font-size: 0.7rem;
    }
    
    .value {
      font-size: 1rem;
    }
  }
`;

export const IconWrapper = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary}20;
  border-radius: 8px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1.3rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.8rem;
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 0.8rem;
  white-space: nowrap;
  min-width: 80px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}25;
    transform: translateY(-1px);
  }

  .material-icons {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.45rem 0.6rem;
    font-size: 0.75rem;
    min-width: 70px;
    gap: 0.3rem;
    
    .material-icons {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 350px) {
    min-width: 65px;
    padding: 0.4rem 0.5rem;
    font-size: 0.7rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.8rem;
  background: ${({ theme }) => theme.colors.accent ? theme.colors.accent + '15' : 'rgba(255, 71, 87, 0.1)'};
  color: ${({ theme }) => theme.colors.accent || '#ff4757'};
  border: 1px solid ${({ theme }) => theme.colors.accent ? theme.colors.accent + '30' : 'rgba(255, 71, 87, 0.3)'};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 0.8rem;
  white-space: nowrap;
  min-width: 90px;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accent ? theme.colors.accent + '25' : 'rgba(255, 71, 87, 0.2)'};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .material-icons {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.45rem 0.6rem;
    font-size: 0.75rem;
    min-width: 80px;
    gap: 0.3rem;
    
    .material-icons {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 350px) {
    min-width: 75px;
    padding: 0.4rem 0.5rem;
    font-size: 0.7rem;
  }
`;