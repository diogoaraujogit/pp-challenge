import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 6.4rem;
  background: linear-gradient(90.17deg, #034AFD 0%, #22E0A1 100%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2.6rem;

  > div {
    display: flex;
    align-items: center;
  }

  .title {
    img {
      margin-right: 0.8rem;
    }

    h1 {
      color: #ffffff;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }

  .menu {
    span + span {
      margin-left: 3.8rem;
    }

    svg {
      font-size: 2.2rem;
      color: #ffffff;
    }
  }
`;

export const NavigationInfo = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0rem 2.4rem;

  border-bottom: 1px solid #E1E1E1;

  h2 {
    color: #424242;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export const Children = styled.div`
  flex: 1;
`;
