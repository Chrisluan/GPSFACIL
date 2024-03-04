import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Box, Image } from '@chakra-ui/react';
import LoginImage from './../resources/images/data/gpsfacil.svg';
import logo from './../resources/images/icon/logotraccar.svg';
import { useTheme } from '@mui/material/styles';
import { grey, green, indigo } from '@mui/material/colors';
import LogoImage from './LogoImage';
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 25, 0, 0),
    },
  },
  form: {
    maxWidth: theme.spacing(52),
    padding: theme.spacing(5),
    width: '100%',
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 800px)')

  return (
    <main className={classes.root}>
      <Box
        width={isDesktop ? '30rem' : '100%'}
        minWidth={'fit-content'}
        maxW={'30rem'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        backgroundColor={green[900]}
      >
        <LogoImage/>
        <form className={classes.form}>
          {children}
        </form>
      </Box>
      {
        isDesktop && (
          <Box width={'80%'} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={'2rem'}>
              <Image objectFit={'cover'} maxHeight={'80%'} src={LoginImage}/>
          </Box>
        )
      }
    </main>
  );
};

export default LoginLayout;
