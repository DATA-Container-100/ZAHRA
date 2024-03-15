"use client";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Theme, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// Data
import { callInfoData } from "@/data/contact/callInfo";

const CallInfo = () => {
  const theme: Theme = useTheme();
  const mdDev = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box sx={{ mt: 4, textAlign: "center", maxWidth: "600px", mx: "auto" }}>
        <Typography
          variant="body2"
          sx={{
            textTransform: "capitalize",
            fontFamily: "Syne",
            fontSize: "13px",
            [theme.breakpoints.up("sm")]: {
              fontSize: "15px",
            },
          }}
        >
          call to find Your luxury home
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textTransform: "capitalize",
            mt: 2,
            mx: "4px",
            fontSize: "14px",
            fontFamily: "Syne",
            fontWeight: 600,
            [theme.breakpoints.up("sm")]: {
              fontSize: "19px",
              fontWeight: 500,
            },
          }}
        >
          {`
          contact us directly for more information or leave a message below and
          we'll get back to you as soon as possible
         `}
        </Typography>
      </Box>
      <Grid container sx={{ mt: 2 }} spacing={2}>
        {callInfoData.map((box, indx) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={indx}>
              <Box
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  py: 1,
                  px: 2,
                  borderRadius: 2,
                  height: mdDev ? "100%" : "auto",
                  border: `2px solid ${theme.palette.text.darkPink}`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    mb: 1,
                    color: theme.palette.text.darkPink,
                  }}
                >
                  {box.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Marcellus",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  {box.info_01}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Marcellus",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  {box.info_02}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CallInfo;
