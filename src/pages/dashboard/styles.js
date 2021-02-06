import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F9F9F9;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const LoadingArea = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageArea = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;



export const Content = styled.div`
  height: 100%;
  width: 100%;
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
  padding: 0rem 2.5rem;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  .categories-table {
    width: 100%;
    border: 1px solid #E1E1E1;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 5rem;
  }

  .categories-table-header {
    display: grid;
    align-items: center;
    grid-template-columns: 14fr 3fr 4fr;
    height: 4rem;
    padding: 0rem 1.6rem;
    background-color: #ffffff;
    border-bottom: 1px solid #E1E1E1;


    h3 {
      font-weight: 600;
      color: #424242;
    }
  }

  .categories-table-body {


    > div {
      height: 4.8rem;

      &:nth-child(even) {
        background-color: #ffffff;
      }
    }

  }

  .table-item {
    display: grid;
    align-items: center;
    grid-template-columns: 14fr 3fr 4fr;
    padding: 0rem 1rem;

    .name {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        width: 3.2rem;
        height: 3.2rem;
        margin-right: 1rem;
      }

    }

    .actions {
      display: flex;
      justify-content: space-between;
      padding: 0rem 2rem;

      svg {
        color: #A3A3A3;
        font-size: 2.5rem;
        cursor: pointer;
      }
    }
  }


`;

export const VisibilityModal = styled.div`
    .title {
      display: flex;
      align-items: center;
      height: 4rem;
      border-bottom: 1px solid #E1E1E1;
      font-weight: 600;
      color: #A3A3A3;
      padding: 0rem 1.6rem;
    }

`;

export const RemoveModal = styled.div`
    .title {
      display: flex;
      align-items: center;
      height: 4rem;
      border-bottom: 1px solid #E1E1E1;
      font-weight: 600;
      color: #A3A3A3;
      padding: 0rem 1.6rem;
    }

    .body {
      padding-top: 2rem;

      p {
        text-align: center;
        color: #424242;

        span {
          font-weight: bold;
        }
      }

    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;

      button {
        height: 3.6rem;
        width: 23rem;
        border: 2px solid;
        box-sizing: border-box;
        border-radius: 99px;
        font-weight: 600;
      }

      .cancel {
        border-color:  #22E0A1;
        background-color: #ffffff;
        color: #22E0A1;
      }

      .confirm {
        border: none;
        background-color: #22E0A1;
        color: #ffffff;
      }
    }

`;
