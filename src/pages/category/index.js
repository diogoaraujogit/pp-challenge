/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import Layout from '../../components/Layout';
import * as formik from 'formik';
import * as yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api'
import { Container, Content, LoadingArea, Header, Body, AvatarInput } from './styles';
import { TextField } from '@material-ui/core';
import { toast } from 'react-toastify';

import placeholder from '../../assets/image_placeholder.jpg'
import Loading from '../../components/Loading'

const Category = () => {

  const { Formik } = formik;
  const history = useHistory()
  const { id } = useParams()

  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState();
  const [preview, setPreview] = useState(placeholder);
  const [category, setCategory] = useState({})
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  const token = localStorage.getItem('@pp/jwt_token')

  const ref = useRef();


  // FORM SCHEMA
  const schema = yup.object({
    category: yup.string().required('nome da categoria é obrigatório'),
    short_description: yup.string().required('descrição é obrigatória')
  })

  async function handleCreate(values, actions) {
    setSaving(true)
    actions.setErrors({ message: '' })

    const body = {
      "callcenter": {
        "from": 0,
        "status": true
      },
      "description": values.short_description,
      "ecommerce": {
        "from": 0,
        "status": true
      },
      "keywords": [
        "string"
      ],
      "keywords_concat": "string",
      "logo": preview === placeholder? '' : preview,
      "name": values.category,
      "visible": true
    }

    try {

      const response = await api.post('/store/category', body, { headers: { "Authorization": `Bearer ${token}` } })

      if (response) {
        console.log('Resposta')
        console.log(response)
        toast.success('Categoria criada com sucesso')
        history.push('/dashboard')
      }

    } catch (e) {
      const message = e?.response?.data?.message || 'Houve um erro ao criar a categoria'
      toast.error(message)
      actions.setErrors({ message: message })
    }

    setSaving(false)

  }

  async function handleSave(values, actions) {
    setSaving(true)
    actions.setErrors({ message: '' })

    const body = {
      "description": values.short_description,
      "name": values.category,
      "new_logo_image": preview === placeholder? '' : preview,
    }

    try {

      const response = await api.put(`/store/category/${id}`, body, { headers: { "Authorization": `Bearer ${token}` } })

      if (response.data) {
        toast.success('Categoria salva com sucesso')
        history.push('/dashboard')
      }

    } catch (e) {
      const message = e?.response?.data?.message || 'Houve um erro ao salvar as informacoes'
      toast.error(message)
      actions.setErrors({ message: message })
    }
    setSaving(false)
  }

  async function getCategory() {
    setLoading(true)

    try {

      const response = await api.get(`/store/category/${id}`, { headers: { "Authorization": `Bearer ${token}` } })

      if (response.data) {
        setPreview(response.data.logo || placeholder)
        setCategory(response.data)
      }

    } catch (e) {
      const message = e?.response?.data?.message || 'Houve um erro ao carregar a categoria'
      toast.error(message)
    }

    setLoading(false)
  }

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

  useEffect(() => {

    id && getCategory()

  }, [])

  console.log(preview === placeholder)

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]);



  return (
    <Layout title="Gerenciar categoria">
      <Container>
        {
          loading?
          <LoadingArea>
            <Loading />
          </LoadingArea>
          :
          <Content>
          <Header>
            <h2>{category.name || ''}</h2>
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
                    onSubmit={id? handleSave : handleCreate}
                    initialValues={{
                      category: category.name || '',
                      short_description: category.description || ''
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      errors,
                      initialValues,
                      values
                    }) => (
                      <form id="category" noValidate onSubmit={handleSubmit}>
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
                            value={values.category}
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
                            value={values.short_description}
                          />
                        </div>
                        <p>{errors && errors.message}</p>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div className='form-buttons'>
              <button onClick={() => history.push('/dashboard')} className='cancel'>
                Cancelar
              </button>
              <button disabled={saving} type='submit' form='category' className='confirm'>
                Salvar {saving && <Loading />}
              </button>
            </div>
          </Body>
        </Content>
        }
      </Container>
    </Layout>
  );
}

export default Category;