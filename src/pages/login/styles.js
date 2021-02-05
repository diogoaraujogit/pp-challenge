import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  height: 8.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid rgba(47, 49, 56, 0.15);
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 8.8rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 44.8rem;
    width: 44.8rem;
    border: 1px solid #E1E1E1;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5.6rem 5.6rem 1.9rem 5.6rem;
  }
`;

export const Footer = styled.div`
  
`;
