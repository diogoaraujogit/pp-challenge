// import { FormControlLabel, Modal } from '@material-ui/core';
/* eslint-disable react-hooks/exhaustive-deps */
import { TextField } from '@material-ui/core';
import React, {  useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import api from '../../services/api'
import { Container, LoadingArea, Content, Header, Body, RemoveModal, MessageArea } from './styles';
import placeholder from '../../assets/image_placeholder.jpg'
import { Visibility, VisibilityOff, Edit, Clear } from '@material-ui/icons'
import { format } from 'date-fns';
import Popup from 'reactjs-popup';
// import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';

// import BasicDatePicker from '../../components/BasicDatePicker'
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import MaterialTooltip from '../../components/MaterialTooltip';

const Dashboard = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [categoriesToSHow, setCategoriesToShow] = useState([])
  const [categories, setCategories] = useState([])
  // const [ecommerceChecked, setEcommerceChecked] = useState(true)
  // const [callChecked, setCallChecked] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [pageMessage, setPageMessage] = useState('')
  const [deleting, setDeleting] = useState(false)

  // const [date, changeDate] = useState(new Date());

  const token = localStorage.getItem('@pp/jwt_token')
  const history = useHistory()


  // API CALLS

  // GET CATEGORIES

  async function getCategories() {
    setPageLoading(true)

    try {

      const response = await api.get('/store/category', { headers: { "Authorization": `Bearer ${token}` } })

      if (response.data) {
        setCategories(response.data.items)
        setCategoriesToShow(response.data.items)
      }

    } catch (e) {
      const message = e?.response?.data?.message || 'Houve um erro ao carregar as categorias'
      toast.error(message)
      setPageMessage(message)
    }

    setPageLoading(false)
  }

  // REMOVE CATEGORY

  async function removeCategory(id, close) {
    setDeleting(true)

    try {

      const response = await api.delete(`/store/category/${id}`, { headers: { "Authorization": `Bearer ${token}` } })

      if (response.data) {
        close()
        getCategories()
        toast.success('Categoria removida com sucesso')
      }

    } catch (e) {
      const message = e?.response?.data?.message || 'Houve um erro ao remover a categoria'
      toast.error(message)
    }

    setDeleting(false)
  }

  const handleRemove = (id, close) => {
    removeCategory(id, close)
  }


  // PAGE EFFECTS

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
        {
          pageLoading ?
            <LoadingArea>
              <Loading />
            </LoadingArea>
            :
            pageMessage ?
              <MessageArea>
                {pageMessage}
              </MessageArea>
              :
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
                        !categoriesToSHow.length?
                        <div className='table-item'>
                          Nenhuma categoria encontrada
                        </div>
                        :
                        categoriesToSHow.map(category => {

                          const id = category.id
                          const logo = category.logo || placeholder
                          const name = category.name
                          const created = new Date(category.created_at) || '-'
                          const created_formatted = format(created, 'dd/MM/yyyy')
                          const visibility = category.visible

                          return (
                            <div key={id} className='table-item'>
                              <div className='name' onClick={() => history.push(`/category/${id}`)}>
                                <img src={logo} alt='' />
                                <p>{name}</p>
                              </div>
                              <div className='created'>
                                <p>{created_formatted}</p>
                              </div>
                              <div className='actions'>
                                <div>
                                  <MaterialTooltip tip='Alterar visibilidade'>
                                    {
                                      visibility ?

                                        <Visibility />
                                        :
                                        <VisibilityOff />
                                    }
                                  </MaterialTooltip>
                                  {/* <Popup
                                    autofocus
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

                                                <BasicDatePicker value={date} handleChange={changeDate} />
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
                                  </Popup> */}
                                </div>
                                <div>
                                  <MaterialTooltip tip='Editar Categoria'>  
                                    <Edit onClick={() => history.push(`/category/${id}`)} />
                                  </MaterialTooltip>
                                </div>
                                <div>
                                  <Popup
                                    contentStyle={{ width: '60rem', height: '22rem', borderRadius: '1rem' }}
                                    trigger={
                                        <Clear/>
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
                                                <button className='cancel' disabled={deleting} onClick={() => handleRemove(id, close)}>
                                                  remover permanentemente {deleting && <Loading />}
                                                </button>
                                                <button className='confirm' onClick={() => close()}>
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
        }
      </Container>
    </Layout>
  );
}

export default Dashboard;