"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Theme, useTheme } from "@mui/material/styles";
// Kinde Auth
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Variables
const navigations = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "About Us",
    path: "/aboutUs",
  },
  {
    page: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const theme: Theme = useTheme();
  const matches = useMediaQuery("(max-width: 800px)");
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  // User Info
  const { user } = useKindeBrowserClient();
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            height: "100px",
            backgroundColor: theme.palette.background.default,
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #999",
          }}
        >
          <Grid container alignItems="center">
            <>
              <Grid item xs={3}>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      pl: 3,
                      textTransform: "uppercase",
                      fontFamily: "Syne",
                      fontWeight: 500,
                      color: theme.palette.text.darkPink,
                      [theme.breakpoints.up("xs")]: {
                        fontSize: "23px",
                      },
                      [theme.breakpoints.up("sm")]: {
                        fontSize: "25px",
                      },
                      [theme.breakpoints.up("md")]: {
                        fontSize: "28px",
                      },
                    }}
                  >
                    zahra
                  </Typography>
                </Link>
              </Grid>
              {/* ------------------ */}
              {matches ? (
                <Grid item xs={9}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                      pr: 3,
                    }}
                  >
                    <Box
                      sx={{
                        mr: 2,
                      }}
                    >
                      {user?.given_name !== undefined &&
                      user?.family_name !== undefined ? (
                        <Typography
                          variant="body1"
                          sx={{
                            width: "110px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontFamily: "Marcellus",
                            fontWeight: "600",
                            color: "#333",
                          }}
                        >{`Hello, ${
                          user?.given_name !== undefined ? user?.given_name : ""
                        } ${
                          user?.family_name !== undefined
                            ? user?.family_name
                            : ""
                        }`}</Typography>
                      ) : (
                        ""
                      )}
                    </Box>
                    <IconButton
                      sx={{
                        width: 0,
                        height: 0,
                      }}
                      onClick={() => setShowSideMenu(true)}
                    >
                      <MenuIcon
                        sx={{
                          cursor: "pointer",
                        }}
                      />
                    </IconButton>
                  </Box>
                </Grid>
              ) : (
                <>
                  <Grid item xs={5.5}>
                    <List
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        maxWidth: "300px",
                        mx: "auto",
                      }}
                    >
                      {navigations.map((nav, indx) => {
                        return (
                          <ListItem
                            key={indx}
                            style={{ padding: 0 }}
                            sx={{
                              width: "auto",
                              fontFamily: "Syne",
                              fontWeight: 600,
                              textTransform: "capitalize",
                              color: theme.palette.text.primary,
                              cursor: "pointer",
                              position: "relative",
                              "&:after": {
                                width: pathname == nav.path ? "100%" : "0px",
                                position: "absolute",
                                content: '""',
                                height: "1px",
                                bottom: "-5px",
                                left: 0,
                                background: theme.palette.text.primary,
                                transition: "all 0.3s ease",
                              },
                              "&:hover:after": {
                                width: "100%",
                              },
                            }}
                            onClick={() => router.push(nav.path)}
                          >
                            {nav.page}
                          </ListItem>
                        );
                      })}
                    </List>
                  </Grid>
                  {/* ------------------ */}
                  <Grid item xs={3.5}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        pr: 3,
                      }}
                    >
                      {user?.given_name !== undefined &&
                      user?.family_name !== undefined ? (
                        <Typography
                          variant="body1"
                          sx={{
                            width: "150px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontFamily: "Marcellus",
                            fontWeight: "600",
                            color: "#333",
                            mr: 1,
                          }}
                        >{`Hello, ${
                          user?.given_name !== undefined ? user?.given_name : ""
                        } ${
                          user?.family_name !== undefined
                            ? user?.family_name
                            : ""
                        }`}</Typography>
                      ) : (
                        ""
                      )}
                      {user ? (
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            fontFamily: "Syne",
                            fontWeight: 600,
                          }}
                        >
                          <LogoutLink
                            style={{
                              textDecoration: "none",
                              color: "#fff",
                              width: "101px",
                            }}
                          >
                            Log Out
                          </LogoutLink>
                        </Button>
                      ) : (
                        <>
                          <Button
                            size="small"
                            variant="outlined"
                            sx={{
                              fontFamily: "Syne",
                              fontWeight: 600,
                              mr: 1,
                            }}
                          >
                            <RegisterLink
                              style={{
                                textDecoration: "none",
                                color: theme.palette.text.primary,
                              }}
                            >
                              Sign up
                            </RegisterLink>
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              fontFamily: "Syne",
                              fontWeight: 600,
                            }}
                          >
                            <LoginLink
                              style={{ textDecoration: "none", color: "#fff" }}
                            >
                              Sign In
                            </LoginLink>
                          </Button>
                        </>
                      )}
                    </Box>
                  </Grid>
                </>
              )}
            </>
          </Grid>
        </Box>
      </Container>
      {/* SIDE MENU */}
      {matches ? (
        <Box
          sx={{
            width: "50%",
            height: "100vh",
            position: "fixed",
            top: 0,
            right: 0,
            backgroundColor: "#fff",
            zIndex: 9999,
            boxShadow: 3,
            p: 3,
            transition: "transform 0.5s ease",
            transform: showSideMenu ? "translateX(0%)" : "translateX(100%)",
          }}
        >
          {/* Close Icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <IconButton
              sx={{
                width: 0,
                height: 0,
              }}
              onClick={() => setShowSideMenu(false)}
            >
              <CloseIcon
                fontSize="small"
                sx={{
                  cursor: "pointer",
                  p: 0.5,
                  borderRadius: 1.5,
                  transition: "all 0.3s ease",
                  backgroundColor: theme.palette.background.paper,
                }}
              />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
              fontFamily: "Syne",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            menu
          </Typography>
          {/* Nav Items */}
          <Box sx={{ mt: 4 }}>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {navigations.map((nav, indx) => {
                return (
                  <ListItem
                    key={indx}
                    style={{ padding: 0 }}
                    sx={{
                      width: "auto",
                      fontFamily: "Syne",
                      fontWeight: 700,
                      textTransform: "capitalize",
                      color: theme.palette.text.primary,
                      cursor: "pointer",
                      position: "relative",
                      "&:after": {
                        width: pathname == nav.path ? "100%" : "0px",
                        position: "absolute",
                        content: '""',
                        height: "1px",
                        bottom: "-5px",
                        left: 0,
                        background: theme.palette.text.primary,
                        transition: "all 0.3s ease",
                      },
                      "&:hover:after": {
                        width: "100%",
                      },
                      my: 1.5,
                    }}
                    onClick={() => {
                      router.push(nav.path);
                      setShowSideMenu(false);
                    }}
                  >
                    {nav.page}
                  </ListItem>
                );
              })}
            </List>
          </Box>
          {/* BTNS */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              pr: 3,
            }}
          >
            {user ? (
              <Button
                size="small"
                variant="contained"
                sx={{
                  fontFamily: "Syne",
                  fontWeight: 600,
                  width: "70%",
                  my: 1,
                  mx: "auto",
                }}
                onClick={() => setShowSideMenu(false)}
              >
                <LogoutLink
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Log Out
                </LogoutLink>
              </Button>
            ) : (
              <>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    fontFamily: "Syne",
                    fontWeight: 600,
                    width: "70%",
                    my: 1,
                    mx: "auto",
                  }}
                  onClick={() => setShowSideMenu(false)}
                >
                  <RegisterLink
                    style={{
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                    }}
                  >
                    Sign up
                  </RegisterLink>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    fontFamily: "Syne",
                    fontWeight: 600,
                    width: "70%",
                    my: 1,
                    mx: "auto",
                  }}
                  onClick={() => setShowSideMenu(false)}
                >
                  <LoginLink style={{ textDecoration: "none", color: "#fff" }}>
                    Sign In
                  </LoginLink>
                </Button>
              </>
            )}
          </Box>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
