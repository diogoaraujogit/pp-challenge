import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import api from '../../services/api'
import { Container, Content, Header, Body } from './styles';

const Dashboard = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [categoriesToSHow, setCategoriesToShow] = useState([])
  const [categories, setCategories] = useState([])

  const token = localStorage.getItem('@pp/jwt_token')


  async function getCategories() {

    try {

      const response = await api.get('/store/category', { headers: { "Authorization": `Bearer ${token}` } })

      if (response.data) {
        console.log(response)
        setCategories(response.data.items)
      }

    } catch (e) {

    }
  }


  useEffect(() => {

    getCategories()

  }, [])


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

                  // onChange={handleChange}
                  className='text-input'
                />
              </div>
              <button>
                criar nova categoria
              </button>
            </div>
          </Header>
          <Body>

          </Body>
        </Content>
      </Container>
    </Layout>
  );
}

export default Dashboard;