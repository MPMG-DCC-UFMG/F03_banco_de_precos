import React, { useContext } from 'react';
import { Check, ManageSearch } from '@mui/icons-material';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { GlobalStateContext } from '../wrappers/GlobalContext';

type Props = {
}

function SearchTypeSelector({ }: Props) {
  const { searchType, setSearchType } = useContext(GlobalStateContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const selectType = (value:string) => {
    setSearchType(value);
    handleClose();
  }

  const renderItem = (name:string, value:string) => {
    if (searchType !== value) {
      return <MenuItem onClick={() => selectType(value)}>
        <ListItemText inset>
          {name}
        </ListItemText>
      </MenuItem>
    } else {
      return <MenuItem onClick={() => selectType(value)}>
        <ListItemIcon>
          <Check />
        </ListItemIcon>
        {name}
      </MenuItem>
    }
  }

  return (<>
    <IconButton
      onClick={handleClick}
      aria-label="filter search type"
    >
      <ManageSearch />
    </IconButton>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      {renderItem("Busca Inteligente", "smart")}
      {renderItem("Busca Exata", "exact")}
      {renderItem("Busca em qualquer parte", "anywhere")}

    </Menu>
  </>);
}

export default SearchTypeSelector;
