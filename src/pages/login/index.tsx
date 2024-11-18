import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    // backgroundColor: "blue",
  },
  login_container: {
    // backgroundColor: "red",
    padding: 20,
    border: "solid 2px black",
  },
});
const Login = () => {
  const classes = useStyles();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    user_name: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const apiSuccessFunction = (result: any) => {
    console.log(result);
    setErrorMsg("");
    Cookies.set("jwtToken", result.jwt, { expires: 1 });
    router.replace("/");
  };

  const onSubmitUserDetails = async (e: any) => {
    e.preventDefault();
    // console.log("onSubmit={onSubmitUserDetails}");
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const respo = await fetch("/api/user");
      console.log(respo);
      const result = await response.json();
      if (response.ok) {
        apiSuccessFunction(result);
      } else setErrorMsg(result.msg);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("userDetails", userDetails);
  const jwtToken = Cookies.get("jwtToken");
  console.log("cookiesstore", jwtToken);

  if (jwtToken) {
    router.replace("/");
  }
  return (
    <Container className={classes.container}>
      <div className={classes.login_container}>
        <Typography
          variant="h5"
          color="textSecondary"
          sx={{ padding: "20px 0px" }}
        >
          User Login
        </Typography>
        <Box
          onSubmit={onSubmitUserDetails}
          component="form"
          sx={{ width: "300px" }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="UserName"
              multiline
              maxRows={4}
              sx={{ width: "100%", marginBottom: "20px" }}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  user_name: e.target.value,
                }))
              }
            />
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      //   onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </FormControl>
          </div>
          <Button
            type="submit"
            // onClick={onSubmitUserDetails}
            variant="contained"
            color="success"
            sx={{ marginTop: "20px" }}
          >
            Success
          </Button>
          {errorMsg && <Typography color="red">{errorMsg}</Typography>}
        </Box>
      </div>
    </Container>
  );
};

export default Login;
