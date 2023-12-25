import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Select, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function RegisterView() {
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedPermis, setSelectedPermis] = useState('');


  const handleClick = () => {
    router.push('/dashboard');
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedPermis(event.target.value)
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="name" label="Nom" />
        <TextField name="city" label="Ville" />
        <TextField name="phone" label="Numéro de téléphone" />
        <Select
          value={selectedOption}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select an option' }}
        >
          <MenuItem value="" disabled>
            Quel est le but de créer un compte ?
          </MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
        <Select
          value={selectedPermis}
          displayEmpty
          inputProps={{ 'aria-label': 'Select an option' }}
        >
          <MenuItem value="" disabled>
            Sélectionnez votre type de permis?
          </MenuItem>
          <MenuItem value="option1">permis motos</MenuItem>
          <MenuItem value="option2">permis voiture</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>

        <TextField name="email" label="Adresse E-mail" />

        <TextField
          name="password"
          label="mot de passe"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="password"
          label="Confirmer votre mot de passe"
          type={showConfirmPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setshowConfirmPassword(!showConfirmPassword)} edge="end">
                  <Iconify icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{
          mt: 3,
        }}
      >
        Register
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        padding: '50px',
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Créer un compte</Typography>

          <Typography variant="body2" sx={{ mt: 1, mb: 3 }}>
            Vous avez déja un compte ?
            <Link variant="subtitle2" sx={{ ml: 0.5, textDecoration: 'none' }} href="/login">
              Login
            </Link>
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
