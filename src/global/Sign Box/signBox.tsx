// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Theme, useTheme } from "@mui/material";
// Kind Auth
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
const SignBox = () => {
  const theme: Theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: `1px solid ${theme.palette.text.darkPink}`,
            borderRadius: "10px",
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mb: 1,
              fontFamily: "Syne",
              fontSize: "16px",
              [theme.breakpoints.up("sm")]: {
                fontSize: "20px",
              },
            }}
          >
            You have to Log In First To see this page
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Syne",
            }}
          >
            <LoginLink
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Log In
            </LoginLink>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SignBox;
