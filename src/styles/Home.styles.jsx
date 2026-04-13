import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding: 1rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.darkBg};
  background: linear-gradient(
    135deg,
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
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary}30;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem 0;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

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
  min-height: 120px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.effects.glow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
    min-height: 100px;
    &:hover {
      transform: none;
    }
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
  user-select: none;

  &::after {
    content: "${(props) => (props.expanded ? "−" : "+")}";
    font-weight: bold;
    font-size: 1.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
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
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  &::before {
    content: "🏋️";
    font-size: 2rem;
    display: block;
    margin-bottom: 0.25rem;
  }

  small {
    font-size: 0.8rem;
    opacity: 0.7;
  }
`;

const spinAnim = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  .spin {
    animation: ${spinAnim} 1s linear infinite;
    font-size: 2rem;
    display: block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.textSecondary}30;
  border-radius: 8px;
  padding: 0.5rem 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 1.5rem;
  white-space: nowrap;

  .material-icons {
    font-size: 20px;
  }

  /* ✅ Label visível no desktop, oculta no mobile */
  .logout-label {
    font-size: 0.85rem;
    font-weight: 500;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}15;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;

    .material-icons {
      animation: ${spinAnim} 1s linear infinite;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 50%;
    width: 44px;
    height: 44px;
    padding: 0;
    justify-content: center;
    margin-left: 0.75rem;

    .logout-label {
      display: none;
    }

    .material-icons {
      font-size: 18px;
    }
  }
`;

export const FormFloatingWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  border: 1px solid ${({ theme }) => theme.colors.primary}20;

  @media (max-width: 768px) {
    margin: 1rem 0;
    padding: 1.5rem;
  }
`;

// ─── Modal de confirmação de delete ────────────────────────────────────────

export const ConfirmOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
  backdrop-filter: blur(4px);
`;

export const ConfirmBox = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: 16px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;

    strong {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const ConfirmTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
`;

export const ConfirmActions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

export const ConfirmCancel = styled.button`
  flex: 1;
  padding: 0.75rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.textSecondary}40;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.textSecondary}10;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ConfirmDelete = styled.button`
  flex: 1;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.error};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #dc2626;
    transform: translateY(-1px);
  }
`;

// ─── Toast de erro ──────────────────────────────────────────────────────────

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const ErrorToast = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.error};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 200;
  animation: ${slideDown} 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 90vw;
  text-align: center;
`;
