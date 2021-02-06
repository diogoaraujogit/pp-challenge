import { FormControlLabel, Modal, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import api from '../../services/api'
import { Container, Content, Header, Body, VisibilityModal, RemoveModal } from './styles';
import placeholder from '../../assets/image_placeholder.jpg'
import { Visibility, VisibilityOff, Edit, Clear } from '@material-ui/icons'
import { format } from 'date-fns';
import Popup from 'reactjs-popup';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [categoriesToSHow, setCategoriesToShow] = useState([])
  const [categories, setCategories] = useState([])
  const [ecommerceChecked, setEcommerceChecked] = useState(true)
  const [callChecked, setCallChecked] = useState(false)

  const token = localStorage.getItem('@pp/jwt_token')
  const history = useHistory()


  async function getCategories() {

    try {

      const response = await api.get('/store/category', { headers: { "Authorization": `Bearer ${token}` } })

      if (response.data) {
        console.log(response)
        setCategories(response.data.items)
        setCategoriesToShow(response.data.items)
      }

    } catch (e) {

    }
  }

  async function removeCategory(id, close) {

    try {

      const response = await api.delete(`/store/category/${id}`, { headers: { "Authorization": `Bearer ${token}` } })

      if (response.data) {
        console.log(response)
        close()
        getCategories()
      }

    } catch (e) {

    }
  }

  const handleRemove = (id, close) => {
    removeCategory(id, close)
  }


  useEffect(() => {

    getCategories()

  }, [])

  useEffect(() => {

    if (searchTerm) {

      const filteredCategories = categories.filter(category => category.name.toLowerCase().includes(searchTerm.toLowerCase()))

      setCategoriesToShow(filteredCategories)

    } else {
      setCategoriesToShow(categories)
    }

  }, [searchTerm])

  return (
    <Layout title="Lista de categorias">
      <Container>
        <Content>
          <Header>
            <h2>Lista de Categorias</h2>
            <div>
              <div>
                <TextField
                  id="outlined-error-helper-text"
                  label="Buscar Categoria"
                  variant="outlined"
                  name='search'
                  onChange={e => setSearchTerm(e.target.value)}
                  value={searchTerm}
                  className='text-input'
                />
              </div>
              <button onClick={() => history.push('/category')}>
                criar nova categoria
              </button>
            </div>
          </Header>
          <Body>
            <div className='categories-table'>
              <div className='categories-table-header'>
                <h3>Nome da Categoria</h3>
                <h3>Criação</h3>
                <h3>Ações</h3>
              </div>
              <div className='categories-table-body'>
                {
                  categoriesToSHow.map(category => {

                    const id = category.id
                    const logo = category.logo || placeholder
                    const name = category.name
                    const created = new Date(category.created_at) || '-'
                    const created_formatted = format(created, 'dd/MM/yyyy')
                    const visibility = true

                    return (
                      <div className='table-item'>
                        <div className='name'>
                          <img src={logo} alt='' />
                          <p>{name}</p>
                        </div>
                        <div className='created'>
                          <p>{created_formatted}</p>
                        </div>
                        <div className='actions'>
                          <div>
                            <Popup
                              contentStyle={{ width: '45rem', height: '36rem', borderRadius: '1rem' }}
                              trigger={
                                visibility ?
                                  <Visibility />
                                  :
                                  <VisibilityOff />
                              }
                              modal
                            >
                              {
                                close => {

                                  return (
                                    <VisibilityModal>
                                      <div className='title'>
                                        Alternar visibilidade
                                      </div>
                                      <div>
                                        <div>
                                          <FormControlLabel
                                            control={<Checkbox checked={ecommerceChecked} onChange={(e) => setEcommerceChecked(e.target.checked)} name="eccomerce" />}
                                            label="Custom color"
                                          />
                                        </div>
                                        <div>

                                        </div>
                                        <div>

                                        </div>
                                      </div>
                                    </VisibilityModal>
                                  )
                                }
                              }
                            </Popup>
                          </div>
                          <div>
                            <Edit onClick={() => history.push(`/category/${id}`)} />
                          </div>
                          <div>
                            <Popup
                              contentStyle={{ width: '60rem', height: '22rem', borderRadius: '1rem' }}
                              trigger={
                                <Clear />
                              }
                              modal
                            >
                              {
                                close => {

                                  return (
                                    <RemoveModal>
                                      <div className='title'>
                                        Remover Categoria
                                    </div>
                                      <div className='body'>
                                        <p>
                                          Tem certeza que deseja remover a categoria <span>Emagrecimento</span>?<br />
                                        Esta ação não poderá ser desfeita
                                      </p>
                                        <div className='buttons'>
                                          <button className='cancel' onClick={() => handleRemove(id, close)}>
                                            remover permanentemente
                                        </button>
                                          <button className='confirm'>
                                            manter categoria
                                        </button>
                                        </div>
                                      </div>
                                    </RemoveModal>
                                  )
                                }
                              }
                            </Popup>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </Body>
        </Content>
      </Container>
    </Layout>
  );
}

export default Dashboard;