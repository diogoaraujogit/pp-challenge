import React from 'react';
import { Search, Phone, Notifications, Assignment, Chat }  from '@material-ui/icons'
import { Container, Header, NavigationInfo, Children } from './styles';

// import MaterialBreadCrumbs from '../../components/MaterialBreadCrumbs'
import pp_logo_header from '../../assets/pp_logo_header.svg'
import MaterialBadge from '../MaterialBadge';

const Layout = (props) => {
  return (
    <Container>
      <Header>
        <div className='title'>
          <img src={pp_logo_header} alt='' />
          <h1>• Laboratório Buenos Ayres</h1>
        </div>
        <div className='menu'>
          <MaterialBadge badgeContent={0}>
            <Search />
          </MaterialBadge>
          <MaterialBadge badgeContent={0}>
            <Phone />
          </MaterialBadge>
          <MaterialBadge badgeContent={0}>
            <Notifications />
          </MaterialBadge>
          <MaterialBadge badgeContent={22}>
            <Assignment />
          </MaterialBadge>
          <MaterialBadge badgeContent={3}>
            <Chat />
          </MaterialBadge>
        </div>
      </Header>
      <NavigationInfo>
        <h2>{props.title} • &nbsp;</h2>
        {/* <div>
          <MaterialBreadCrumbs />
        </div> */}
      </NavigationInfo>
      <Children>
        {props.children}
      </Children>
    </Container>
  );
}

export default Layout;