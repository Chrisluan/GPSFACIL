import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import {Image} from '@chakra-ui/react';
import Logo from '../resources/images/icon/logotraccar.svg';

const useStyles = makeStyles(() => ({
  image: {
    position:'relative',
    maxWidth: '240px',
    maxHeight: '120px',
    width: 'auto',
    height: 'auto',
  },
}));

const LogoImage = () => {
  const theme = useTheme();
  const classes = useStyles();
  return <Image className={classes.image} src={Logo}/>;
};

export default LogoImage;
