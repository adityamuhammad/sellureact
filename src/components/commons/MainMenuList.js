import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import {withRouter} from 'react-router-dom';

const MainMenuList = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(undefined);

  React.useEffect(() => {
    if(props.location.pathname === '/'){
      setSelectedIndex(0);
    } else if (props.location.pathname === '/products') {
      setSelectedIndex(1);
    } else if (props.location.pathname === '/orders') {
      setSelectedIndex(2);
    } else if (props.location.pathname === '/customers') {
      setSelectedIndex(3);
    } else if (props.location.pathname === '/reports') {
      setSelectedIndex(4);
    } else if (props.location.pathname === '/integrations') {
      setSelectedIndex(5);
    } else {
      setSelectedIndex(undefined);
    }
  }, [props.location.pathname]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <ListItem
        button
        component={Link}
        to="/"
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/products"
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/orders"
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/customers"
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/reports"
        selected={selectedIndex === 4 || props.location.pathname === "/reports"}
        onClick={(event) => handleListItemClick(event, 4)}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/integrations"
        selected={selectedIndex === 5}
        onClick={(event) => handleListItemClick(event, 5)}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </div>
  );
}
export default withRouter(MainMenuList);
