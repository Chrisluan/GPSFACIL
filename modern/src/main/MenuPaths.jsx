import {Box, Container, Flex, Divider } from '@chakra-ui/react'
import { makeStyles } from '@mui/styles';
import { useAdministrator } from '../common/util/permissions.js';
import { 
    FaUser,
    FaFileLines,
    FaCarOn,
    FaFolderClosed,
    FaShieldHalved,
    FaGear,
    FaBell,
    FaScrewdriverWrench,
    FaCalendarDays,
} from "react-icons/fa6";
import { BsFillPersonVcardFill } from "react-icons/bs";
import {useTheme} from '@mui/styles';
import { green } from '@mui/material/colors';
import MenuButtons from './components/MenuButtons.jsx';
const useStyles = makeStyles((theme) => {
});
const MenuPaths = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Box sx={
            {
                left:'1.5rem',
                display:'flex',
                alignItems:'center',
                height:'100vh',
                position:'absolute',
                zIndex:1000,
            }
        }>
            <Box 
                pt='1rem'
                pb='1rem'
                minWidth='4rem' 
                backgroundColor={green[900]}
                display='flex'
                alignItems='center'
                flexDirection='column'
                borderRadius={'1rem'}
                gap='0.5rem'
            >
            <Flex justifyContent={'center'} flexDirection='column' gap='0.8rem' opacity={1}>

                <MenuButtons icon={<FaUser/>} Label='Usuários'/>
                <MenuButtons icon={<BsFillPersonVcardFill/>} Label='Motoristas'/>
                <MenuButtons icon={<FaBell/>} Label='Notificações'/>

                <Divider/>
                
                <MenuButtons icon={<FaFolderClosed/>} Label='Grupos'/>
                <MenuButtons icon={<FaShieldHalved/>} Label='Cercas'/>
                <MenuButtons icon={<FaCarOn/>} Label='Dispositivos'/>

                <Divider/>
                
                <MenuButtons icon={<FaScrewdriverWrench/>} Label='Manutenção'/>
                
                <MenuButtons icon={<FaFileLines/>} Label='Relatórios'/>
                <MenuButtons icon={<FaGear />} Label='Preferências'/>
            </Flex>
            </Box>
        </Box>
    )
}
export default MenuPaths;
