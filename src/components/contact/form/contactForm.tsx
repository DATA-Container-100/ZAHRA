// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactForm = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Syne",
          fontSize: "20px",
          mb: 2,
          textAlign: "center",
        }}
      >
        {`Write us and we'll get back to you`}
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              type="text"
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              type="text"
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              variant="outlined"
              type="text"
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Your Message"
              multiline
              rows={7}
              sx={{
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 1.5,
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "200px",
              fontFamily: "Syne",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
