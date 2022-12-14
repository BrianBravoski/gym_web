import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography sx={{ fontSize:{lg:'44px', xs:'25px'}, ml:'20px'}} fontWeight={700} color="#000" mb="33px">
       Similar  <span style={{ color:"#1C3879", textTransform:'capitalize'}}>Target Muscle </span> Exercise
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}
      </Stack>
      <Typography sx={{ fontSize:{lg:'44px', xs:'25px'}, ml:'20px'}} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color:"#1C3879", textTransform:'capitalize'}}> Equipment </span> Exercises
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises