import React from 'react';

import { CustomBadge } from './styles';

const MaterialBadge = (props) => {
  
  const badgeContent = props.badgeContent
  
  return (
    <CustomBadge 
      badgeContent={badgeContent} 
      color="primary" 
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
      className='custom-badge'
    >
      {props.children}
    </CustomBadge>
  );
}

export default MaterialBadge;