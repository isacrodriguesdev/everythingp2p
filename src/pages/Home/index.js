import React from 'react';
import { Button, Checkbox } from '@material-ui/core';
import Drawer from '../../components/Drawer';

class Home extends React.Component {

  state = {
    openDraweMenu: true
  }

  render() {

    return (
      <Drawer />
    )
  }
}
export default Home;