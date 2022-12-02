import { AppBar, Avatar, Icon, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mpmg from '../assets/mpmg.png';
import gsi from '../assets/gsi.png';
import { User } from 'oidc-client';
import useAuth from '../hooks/useAuth';
import { Logout } from '@mui/icons-material';

type Props = {
  children: JSX.Element
  hideUser?: boolean;
}

function HeaderMainFooter({ children, hideUser }: Props) {
  const [currentUser, setCurrentUser] = useState<User>();
  const { getUser, logout } = useAuth();

  const loadUser = async () => {
    let u: User | null = null;
    if (localStorage.getItem("user")) {
      u = JSON.parse(localStorage.getItem("user") || "") as User;
    } else {
      u = await getUser();
    }

    if (u)
      setCurrentUser(u);
  }

  useEffect(() => {
    loadUser();
  }, [])

  const getName = () => {
    if (!currentUser || !currentUser.profile) return "";

    return currentUser.profile.given_name || currentUser.profile.name || currentUser.profile.preferred_username || currentUser.profile.nickname || currentUser.profile.sub;
  }

  function stringToHslColor(s: number, l: number) {
    var hash = 0;
    if (!currentUser) return '';
    for (var i = 0; i < (getName()?.length || 0); i++) {
      hash = (getName() || "A").charCodeAt(i) + ((hash << 5) - hash);
    }

    var h = hash % 360;
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  }

  const firstLetters = () => {
    return getName()?.split(" ").map(word => word.slice(0, 1));
  }

  return (<>
    <AppBar position="static">
      <Toolbar >
        <Typography variant='h6'>
          <Link to="/">Banco de Preços</Link>
        </Typography>
        {!hideUser && (<>
          <div className="ml-12 mr-4 max-w-[180px] text-white font-normal text-sm flex items-center gap-2 cursor-pointer">
            <Avatar
              sx={{
                bgcolor: stringToHslColor(30, 80),
              }}
            >
              {firstLetters()}
            </Avatar>
            <span className="flex-1 truncate">
              {getName()}
            </span>
          </div>
          <div onClick={() => logout()} className="text-base font-normal text-white opacity-75 hover:opacity-100 cursor-pointer flex justify-end items-center pr-4">
            <Logout /> &nbsp; Sair
          </div>
        </>)}
        <div className='flex flex-1 justify-end'>
          <img src={mpmg} style={{ height: "40px" }} />
          <img src={gsi} style={{ height: "40px" }} />
        </div>
      </Toolbar>
    </AppBar>
    <main className='min-h-main'>
      {children}
    </main>
  </>);
}

export default HeaderMainFooter;
