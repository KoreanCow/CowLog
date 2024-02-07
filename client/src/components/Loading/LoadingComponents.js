import React from 'react'
import './LoadingComponents.scss'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#C0EB75'
  },
}))

const LoadingComponents = () => {
  return (
    <div className='LoadingComponent'>
      <Box sx={{ width: '50%' }}>
        <CustomLinearProgress />
        <p>Loading . . .</p>
      </Box>
    </div>
  )
}

export default LoadingComponents;
