import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  padding-top: 6.8rem;

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

    > h2 {
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    > h3 {
      font-size: 1.2rem;
      width: 20rem;
      text-align: center;
      margin-bottom: 2rem;
    }

    > form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      > p {
        height: 2rem;
        color: red;
        margin-bottom: 1rem;
      }

      > div {  
        margin-bottom: 2.3rem;
        height: 5rem;
        width: 100%;
      }

      > button {
        width: 100%;
        height: 3.6rem;
        color: #ffffff;
        background: #22E0A1;
        border-radius: 99px;
        font-size: 1.2rem;
        margin-bottom: 2.4rem;
      }
    }

    > p {
      font-size: 1.2rem;
      width: 27rem;
      text-align: center;

      > a {
        color: #22E0A1;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

  }

  .text-input {
    width: 100%;

    input {
      height: 1rem;
      font-family: 'Poppins';
      font-size: 1.4rem;
      color: #424242;
      border-radius: 10px;
    }

    > div {
      border-radius: 10px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.2rem;
  padding: 0rem 8.8rem;
  margin-top: auto;

  > div {
    display: flex;
    align-items: center;

    > section + section {
      color: #CFCECE;
      margin-left: 1.6rem;
      padding-left: 1.6rem;
      border-left: 0.5px solid #CFCECE;
    }
    
    h4 {
      display: flex;
      align-items: center;

      svg {
        color: #22E0A1;
      }
    }
  }
`;
