import React from 'react';
import TextField from '@material-ui/core/TextField'

import * as formik from 'formik';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';


import {
  Container,
  Content,
  Header,
  Body,
  Footer
} from './styles';
import pp_logo from "../../assets/pp_logo_login.svg"

const Login = () => {

  const { Formik } = formik;
  const history = useHistory()

  // FORM SCHEMA
  const schema = yup.object({
    username: yup.string().required('usuário é obrigatório'),
    password: yup.string().required('senha é obrigatória')
  })

  return (
    <Container>
      <Content>
        <Header>
          <div>
            <img src={pp_logo} alt="" />
          </div>
        </Header>
        <Body>
          <div>
            <h2>Fazer login</h2>
            <h3>Ir para a interface administrativa do Pedido Pago</h3>
            <Formik
              validateOnChange={false}
              validateOnBlur={false}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values)
                history.push('/dashboard')
              }}
              initialValues={{}}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <div>
                    <TextField
                      error={errors && errors.username}
                      id="outlined-error-helper-text"
                      label="E-mail"
                      helperText={errors && errors.username}
                      variant="outlined"
                      name='username'
                      onChange={handleChange}
                      className={errors && errors.username ? 'input-error' : ''}
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='password'
                      placeholder='senha'
                      value={values.password}
                      onChange={handleChange}
                      className={errors && errors.password ? 'input-error' : ''}
                    />
                    <p>{errors && errors.password}</p>
                  </div>
                  <button type='submit'>
                    ENTRAR
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </Body>
        <Footer>

        </Footer>
      </Content>
    </Container>
  );
}

export default Login;