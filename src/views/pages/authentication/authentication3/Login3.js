import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Visibility, VisibilityOff, Refresh } from '@material-ui/icons';
import { Card, Grid, Button, TextField, Typography, Divider, makeStyles, InputAdornment, IconButton,Select, MenuItem  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    maxWidth: 450,
    width: '80%',
    padding: theme.spacing(3),
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
  },
  title: {
    fontWeight: 700,
    textAlign: 'center',
    color: '#EAB308',
  },
  form: {
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    fontSize: 12,
    backgroundColor: '#FACC15', // Jaune
    color: '#000', // Noir
    '&:hover': {
      backgroundColor: '#EAB308',
    },
  },
  footer: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  captchaContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #E0E0E0',
    borderRadius: '4px', 
    marginBottom: theme.spacing(2),
  },
  captchaImage: {
    width: '60px', // Ajusté la taille de l'image CAPTCHA
    height: '40px',
    borderRadius: '4px',
    
    marginRight: theme.spacing(5),
  },
  refreshButton: {
    padding: 8,
    cursor: 'pointer',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleRefreshCaptcha = () => {
    // Logique pour recharger ou rafraîchir l'image CAPTCHA
    console.log("Recharger CAPTCHA");
  };
  const [language, setLanguage] = React.useState('fr');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container direction="row"  justifyContent={'center'}>
          <Grid item>
            <Typography variant="h1" >
              Black
            </Typography>
          </Grid>
          <Grid item>
            <Typography color={'#EAB308'} variant="h1">Bet</Typography>
          </Grid>
        </Grid>

        <form className={classes.form}>
          <Typography variant="h5">Login <span style={{ color: 'red' }}>*</span></Typography>
          <TextField
            fullWidth
            label="Se connecter"
            variant="outlined"
            required
            className={classes.input}
            InputProps={{
              style: { borderRadius: '4px' },
            }}
          />

          <Grid container direction="row" spacing={2} justifyContent={'space-between'}>
            <Grid item>
            <Typography variant="h5">
            Password <span style={{ color: 'red' }}>*</span>
            </Typography>

            </Grid>
            <Grid item>
              <Typography color={'#EAB308'} fontSize={'11px'}>
              Forgot  Password ?
              </Typography>
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Mot de passe"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            required
            className={classes.input}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              style: { borderRadius: '4px' },
            }}
          />

          <Typography variant="h5">Code from the image <span style={{ color: 'red' }}>*</span></Typography>

          <div className={classes.captchaContainer}>
            <img
              src="/path-to-captcha-image" // Remplacez par l'URL de l'image de votre CAPTCHA
              alt="CAPTCHA"
              className={classes.captchaImage}
            />
            <TextField
                fullWidth
                label="Code de l'image"
                variant="standard"  // Utilisation de la variante 'standard' qui n'a pas de bordure
                required
                style={{ flexGrow: 1 }}
                InputProps={{
                    style: {
                    border: 'none',
                    outline: 'none',
                    borderBottom: 'none', 
                    },
                }}
                />
            <IconButton
              onClick={handleRefreshCaptcha}
              className={classes.refreshButton}
              color="inherit"
            >
              <Refresh />
            </IconButton>
          </div>

          <Button
            fullWidth
            variant="contained"
            className={classes.button}
          >
            Se connecter
          </Button>
        </form>
        <Divider style={{ margin: '16px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="body2" className={classes.footer}>
        <RouterLink to="/pages/register/register3" style={{ textDecoration: 'none', color: '#EAB308' }}>
          + Create a new account
        </RouterLink>
      </Typography>

      <Select
        value={language}
        variant="standard" 
        onChange={handleChange}
        style={{ color: '#FACC15', border: 'none', outline: 'none' }}
        MenuProps={{
            PaperProps: {
              style: {
                border: 'none',
                boxShadow: 'none',
              },
            },
          }}
          classes={{
            root: classes.selectRoot,
            underline: classes.selectUnderline,
          }}
      >
        <MenuItem value="fr">Français</MenuItem>
        <MenuItem value="en">Anglais</MenuItem>
      </Select>
    </div>
      </Card>
    </div>
  );
};

export default Login;
