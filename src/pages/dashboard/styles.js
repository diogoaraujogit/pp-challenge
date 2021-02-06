import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F9F9F9;
  height: 100%;
`;

export const Content = styled.div`

`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 2.5rem;
  height: 8rem;
  justify-content: space-between;

  h2 {
    font-size: 1.8rem;
    color: #A3A3A3;
    font-weight: bold;
  }

  > div {
    display: flex;
    align-items: center;

    > div {
      margin-right: 2.8rem;
    }

    .text-input {
        width: 100%;

        
        input {
          height: 1rem;
          font-family: 'Poppins';
          font-size: 1.4rem;
          color: #424242;
          border-radius: 99px;
        }

        > div {
          border-radius: 10px;
        }
      }

      > button {
        height: 3.6rem;
        width: 22.6rem;
        background: #22E0A1;
        border-radius: 99px;
        color: #ffffff;
      }
  }
`;

export const Body = styled.div`

`;
