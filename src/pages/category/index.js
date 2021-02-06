/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import Layout from '../../components/Layout';
import * as formik from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import { Container, Content, Header, Body, AvatarInput } from './styles';
import { TextField } from '@material-ui/core';
import { toast } from 'react-toastify';

import placeholder from '../../assets/image_placeholder.jpg'

const Category = () => {

  const { Formik } = formik;
  const history = useHistory()
  
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(placeholder);

  const token = localStorage.getItem('@pp/jwt_token')

  const ref = useRef();


  // FORM SCHEMA
  const schema = yup.object({
    category: yup.string().required('nome da categoria é obrigatório'),
    short_description: yup.string().required('descrição é obrigatória')
  })

  async function handleLogin(values, actions) {

    actions.setErrors({ message: '' })


    const body = {
      "callcenter": {
        "from": 0,
        "status": true
      },
      "description": "string",
      "ecommerce": {
        "from": 0,
        "status": true
      },
      "keywords": [
        "string"
      ],
      "keywords_concat": "string",
      "logo": preview,
      // "logo_content_type": "string",
      "name": values.category,
      // "parent_id": 0,
      // "position": 0,
      // "products": [
      //   "string"
      // ],
      // "store_id": "string",
      // "subcategories": [
      //   {
      //     "callcenter": {
      //       "available": true,
      //       "from": 0
      //     },
      //     "description": "string",
      //     "ecommerce": {
      //       "available": true,
      //       "from": 0
      //     },
      //     "keywords": [
      //       "string"
      //     ],
      //     "keywords_concat": "string",
      //     "logo": "string",
      //     "logo_content_type": "string",
      //     "name": "string",
      //     "position": 0,
      //     "products": [
      //       "string"
      //     ],
      //     "visible": true
      //   }
      // ],
      "visible": true
    }

    try {

      const response = await api.post('/store/category', body, { headers: {"Authorization" : `Bearer ${token}`} })

      if (response.data) {
        toast.info('Sucesso')
        // history.push('/dashboard')
      }

    } catch (e) {
      const message = e?.response?.data?.message || 'Houve um erro ao realizar o login'
      toast.error(message)
      actions.setErrors({ message: message })
    }

  }

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]);

  const handleChangeAvatar = event => {

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        console.log(e.target)
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <Layout title="Gerenciar categoria">
      <Container>
        <Content>
          <Header>
            <h2>Emagrecimento</h2>
          </Header>
          <Body>
            <div className='card'>
              <div className='title'>
                <h3>Dados da categoria</h3>
              </div>
              <div className='form-zone'>
                <div className='image-input'>
                  <AvatarInput>
                    <label htmlFor="avatar">
                      <img src={preview} alt="" />

                      <input
                        type="file"
                        id="avatar"
                        accept="image/*"
                        data-file={file}
                        onChange={handleChangeAvatar}
                        ref={ref}
                      />
                    </label>
                  </AvatarInput>
                </div>
                <div className='category-form'>
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
                      <form id="category" noValidate onSubmit={handleSubmit}>
                        <p>{errors && errors.message}</p>
                        <div>
                          <TextField
                            error={!!(errors && (errors.category || errors.message))}
                            id="outlined-error-helper-text"
                            label="Nome da Categoria"
                            helperText={errors && errors.category}
                            variant="outlined"
                            name='category'
                            onChange={handleChange}
                            className='text-input'
                            inputProps={{ maxLength: 20 }}
                          />
                        </div>
                        <div>
                          <TextField
                            error={!!(errors && (errors.short_description || errors.message))}
                            id="outlined-error-helper-text"
                            label="Descrição curta"
                            helperText={errors && errors.short_description}
                            variant="outlined"
                            name='short_description'
                            onChange={handleChange}
                            className='text-input'
                            inputProps={{ maxLength: 140 }}
                          />
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div className='form-buttons'>
              <button className='cancel'>
                Cancelar
              </button>
              <button type='submit' form='category' className='confirm'>
                Salvar
              </button>
            </div>
          </Body>
        </Content>
      </Container>
    </Layout>
  );
}

export default Category;