import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.darkBg};
  padding: 1rem;
  
  // Imagem de fundo de academia
background-image: 
  linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
  url('https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: 60% center;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    ${({ theme }) => theme.effects.glow};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  max-width: 450px;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  backdrop-filter: blur(12px);
  margin: 2rem;
  position: relative;
  z-index: 2;

  // Centralização adicional
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2.5rem;
    max-width: 400px;
    margin: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
    max-width: 90%;
    border-radius: 16px;
    margin: 1rem;
  }

  @media (max-width: 380px) {
    padding: 1.5rem;
    max-width: 95%;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    
    &::after {
      width: 60px;
      height: 3px;
      bottom: -12px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: ${({ theme }) => 
    `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent || theme.colors.primary} 100%)`};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 0 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    outline: none;
  }

  &:focus + ${Label},
  &:not(:placeholder-shown) + ${Label} {
    top: -0.5rem;
    left: 0.75rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const GoogleContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30%;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary}40;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    padding: 0 1rem;
    background: ${({ theme }) => theme.colors.cardBg};
    position: relative;
    z-index: 1;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    margin: 1.5rem 0;
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.875rem;
  background: white;
  color: #757575;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 0.5rem;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: #f7f7f7;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
`;

export const LinkButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.accent || theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}10;
    text-decoration: underline;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1.25rem;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.accent || '#ff4757'};
  background: ${({ theme }) => theme.colors.accent ? theme.colors.accent + '15' : 'rgba(255, 71, 87, 0.1)'};
  border: 1px solid ${({ theme }) => theme.colors.accent ? theme.colors.accent + '30' : 'rgba(255, 71, 87, 0.3)'};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '⚠️';
    font-size: 1.1rem;
  }
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;