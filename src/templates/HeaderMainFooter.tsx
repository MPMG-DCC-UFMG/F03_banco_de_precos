import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: JSX.Element
}

function HeaderMainFooter({ children }: Props) {
  return (<>
    <AppBar position="static">
      <Toolbar >
        <Typography variant='h6'>
          <Link to="/">Banco de Preços</Link>
        </Typography>
      </Toolbar>
    </AppBar>
    <main className='min-h-main'>
      {children}
    </main>
  </>);
}

export default HeaderMainFooter;
