import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F9F9F9;
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  height: 5.5rem;
  border-bottom: 1px solid #E1E1E1;
  padding: 0 2.5rem;
  display: flex;
  align-items: center;

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #A3A3A3;
  }
`;

export const Body = styled.div`
  padding: 1.5rem 2.5rem;

  .card {
    height: 30rem;
    width: 70rem;
    background-color: #ffffff;
    border: 1px solid #E1E1E1;
    box-sizing: border-box;
    border-radius: 5px;

    .title {
      border-bottom: 1px solid #E1E1E1;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 0 1.6rem;
      height: 4rem;

      h3 {
        font-size: 1.2rem;
        color: #A3A3A3;
        font-weight: 600;
      }
    }

    .form-zone {
      display: flex;
      padding: 2rem 2.4rem;
    }

    .image-input {
      border: 1px solid #E1E1E1;
      box-sizing: border-box;
      border-radius: 5px;
      height: 15rem;
      width: 13.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2.4rem;
    }

    .category-form {
      width: 100%;

      .text-input {
        width: 100%;
        margin-bottom: 4rem;
        
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
    }
  }

  .form-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    button {
      height: 3.6rem;
      width: 20rem;
      border: 1px solid;
      box-sizing: border-box;
      border-radius: 99px;
    }

    .cancel {
      border-color:  #22E0A1;
      background-color: #ffffff;
    }

    .confirm {
      border: none;
      background-color: #22E0A1;
      color: #ffffff;
    }
  }
`;


export const AvatarInput = styled.div`
  align-self: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 12.8rem;
      width: 12.8rem;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;