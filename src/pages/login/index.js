import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField'

import * as formik from 'formik';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';

import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  Container,
  Content,
  Header,
  Body,
  Footer
} from './styles';

import pp_logo from "../../assets/pp_logo_login.svg"
import api from '../../services/api'
import { toast } from 'react-toastify';
import { logout } from '../../services/auth';
import Loading from '../../components/Loading';

const Login = () => {

  const { Formik } = formik;
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  // FORM SCHEMA
  const schema = yup.object({
    email: yup.string().required('usuário é obrigatório'),
    password: yup.string().required('senha é obrigatória')
  })

  // API CALL

  async function handleLogin(values, actions) {
    setLoading(true)
    actions.setErrors({message: ''})

    try {

      const response = await api.post('/agent/login', {
        password: values.password,
        type: "string",
        username: values.email 
      })

      if(response.data) {
        toast.success('Login realizado com sucesso')
        localStorage.setItem('@pp/jwt_token', response.data.jwt)
        history.push('/dashboard')
      }

    } catch(e) {
      const message = e?.response?.data?.message || 'Houve um erro ao realizar o login'
      toast.error(message)
      actions.setErrors({message: message})
    }

    setLoading(false)
  } 

  // PAGE EFFECTS

  useEffect(() => {
    logout()
  }, [])

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
            <h2>Fazer Login</h2>
            <h3>Ir para a interface administrativa da Pedido Pago</h3>
            <Formik
              validateOnChange={false}
              validateOnBlur={false}
              validationSchema={schema}
              onSubmit={handleLogin}
              initialValues={{}}
            >
              {({
                handleSubmit,
                handleChange,
                errors,
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <p>{errors && errors.message}</p>
                  <div>
                    <TextField
                      error={!!(errors && (errors.email || errors.message))}
                      id="outlined-error-helper-text"
                      label="E-mail"
                      helperText={errors && errors.email}
                      variant="outlined"
                      name='email'
                      onChange={handleChange}
                      className='text-input'
                    />
                  </div>
                  <div>
                    <TextField
                      error={!!(errors && (errors.password || errors.message))}
                      id="outlined-error-helper-text"
                      label="Senha"
                      helperText={errors && errors.password}
                      variant="outlined"
                      name='password'
                      onChange={handleChange}
                      className='text-input'
                    />
                  </div>
                  <button type='submit' disabled={loading}>
                    Continuar {loading && <Loading />}
                  </button>
                </form>
              )}
            </Formik>
            <p><a href='/forgot'>Esqueceu a senha? </a>Receba link de troca de senha no email cadastrado</p>
          </div>
        </Body>
        <Footer>
          <div>
            <section>  
              © 2020 Pedido Pago
            </section>
            <section>
              Termos gerais e condicões de uso
            </section>
            <section>
              Política de Privacidade
            </section>
          </div>
          <div>
            <h4>Feito com &nbsp; <FavoriteIcon /> &nbsp; em SP</h4>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}

export default Login;