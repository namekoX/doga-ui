import { AppBar, Link, MenuItem, Toolbar, Typography } from '@material-ui/core';
import Const from '../common/const';

const MenuComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <MenuItem>
          <Typography variant="h4">
            <Link href={Const.SITE_SEARCH} style={{ textDecoration: "none", color: "white" }}>
              <strong>{Const.SITE_NAME}</strong>
            </Link>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h5">
            <Link href={Const.HOW_TO} style={{ textDecoration: "none", color: "white" }}>
              使い方
            </Link>
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}

export default MenuComponent;