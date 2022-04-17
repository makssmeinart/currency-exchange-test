import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
} from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Currency Exchanger
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
