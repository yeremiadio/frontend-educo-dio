import React from 'react'
import { theme } from '../../../utils/ThemeProvider'
import TopAppBar from '../../../components/Navbar/TopAppBar'
import BottomAppBar from '../../../components/Navbar/BottomAppBar'
import { ThemeProvider } from '@emotion/react'

export default function AssignmentsVT() {
  return (
    <ThemeProvider theme={theme}>
        <TopAppBar/>
        <div className='content'>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8kRjn9W9NOF7oLtS5V3kfgqlh5Viuz8dIvn9wGtBK4O3tIA/viewform?embedded=true" width="200" height="100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        <BottomAppBar/>
    </ThemeProvider>
  )
}
