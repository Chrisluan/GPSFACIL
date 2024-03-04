import { IconButton, Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { green } from '@mui/material/colors'

const MenuButtons = ({ icon, Label }) => {
    const [showLabel, setShowLabel] = useState(false)

    function handleMouseEnter() {
        setShowLabel(true)
    }

    function handleMouseLeave() {
        setShowLabel(false)
    }

    function handleFocus() {
        setShowLabel(true)
    }

    function handleBlur() {
        setShowLabel(false)
    }

    return (
        <Box display='flex' flexDirection='row' alignItems='center' position='relative' >
            <IconButton _hover={
                {
                    transform:'scale(1.1)',
                }
            }
            _active={
                {
                    background:green[800]
                }
            }
            borderRadius={'100%'} color='white' bgColor={green[700]}  icon={icon} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onFocus={handleFocus} onBlur={handleBlur} />
            <Box
                paddingInline='1rem'
                position='absolute'
                transform={`translateX(${showLabel ? '3rem' : '-50%'}) scale(${showLabel ? 1 : 0.2})`}

                borderRightRadius={'10px'}
                transition='all 150ms ease-in-out'
                backgroundColor={green[900]}
                textAlign='center'
                color='white'
                zIndex={-1}
                height='2rem'
                lineHeight='2rem'
                
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <Text variant='p'>{Label}</Text>
            </Box>
        </Box>
    )
}

export default MenuButtons
