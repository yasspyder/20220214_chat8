import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Button,
  Avatar,
  Container,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { fullProfileSelector } from "../../store/profile";
import styles from "./header.module.css";
import { ThemeContext } from "../../theme-context";

const pages = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

export function Header() {
  const { themeSetter, theme } = useContext(ThemeContext);

  const profile = useSelector(fullProfileSelector);

  return (
    <AppBar position="static" color="primary" className={styles.appBar}>
      <Container maxWidth="xl">
        <hr />
        <h2>{profile.firstName}</h2>
        <h2>{profile.lastName}</h2>
        <h2>{theme.name}</h2>
        <button
          onClick={() => themeSetter("light")}
          style={{ color: theme.theme.color }}
        >
          light
        </button>
        <button
          onClick={() => themeSetter("dark")}
          style={{ color: theme.theme.color }}
        >
          dark
        </button>
        <hr />
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map(({ to, title }) => (
              <Button
                key={title}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className={styles.link} to={to}>
                  {title}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
