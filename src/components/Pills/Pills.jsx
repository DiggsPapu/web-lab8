import React from 'react'
import {
  Box, Tabs, Tab, useTheme, AppBar,
} from '@mui/material'
import SwipeableViews from 'react-swipeable-views'
import Maze from '@components/Maze/Maze'
import TabPanel from '../TabPanel/TabPanel'
import './Pills.css'

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function Pills(handleChangeMaze, value) {
  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static" />
      <Tabs
        value={value}
        onChange={handleChangeMaze}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Building Style" {...a11yProps(0)} />
        <Tab label="War Style" {...a11yProps(1)} />
      </Tabs>
      <Maze theme={value} />
    </Box>
  )
  // const theme = useTheme()
  // const [value, setValue] = React.useState(0)

  // const handleChange = (event, newValue) => {
  //   setValue(newValue)
  //   console.log(newValue)
  // }

  // const handleChangeIndex = (index) => {
  //   setValue(index)
  //   console.log(index)
  // }

  // return (
  //   <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
  //     <AppBar position="static">
  //       <Tabs
  //         value={value}
  //         onChange={handleChange}
  //         indicatorColor="secondary"
  //         textColor="inherit"
  //         variant="fullWidth"
  //         aria-label="full width tabs example"
  //       >
  //         <Tab label="Building Style" {...a11yProps(0)} />
  //         <Tab label="War Style" {...a11yProps(1)} />
  //       </Tabs>
  //     </AppBar>
  //     <SwipeableViews
  //       axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  //       index={value}
  //       onChangeIndex={handleChangeIndex}
  //     >
  //       <TabPanel value={value} index={0} dir={theme.direction} style={{ width: '500px', height: '300px' }}>
  //         <Maze style={{ width: '500px', height: '300px' }} theme={1} dimens={[31, 21, 1395 / 31, 727 / 21]} />
  //       </TabPanel>
  //       <TabPanel value={value} index={1} dir={theme.direction} style={{ width: '500px', height: '300px' }}>
  //         <Maze style={{ width: '500px', height: '300px' }} theme={3} dimens={[31, 21, 1395 / 31, 727 / 21]} />
  //       </TabPanel>
  //     </SwipeableViews>
  //   </Box>)
}
