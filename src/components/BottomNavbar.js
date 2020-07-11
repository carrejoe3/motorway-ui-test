import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ListAltIcon from '@material-ui/icons/ListAlt';

const SimpleBottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="bottomNav"
    >
      <BottomNavigationAction label="Cars" icon={<PhotoCameraIcon />} component={Link} to="/" />
      <BottomNavigationAction label="Sign up" icon={<ListAltIcon />} component={Link} to="/Form" />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation
