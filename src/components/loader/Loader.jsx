import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import './loader.css'

export default function CircularIndeterminate () {
  return (
    <div className='container-loader'>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )
}
