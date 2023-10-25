import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AssignmentsVT from './fileassignment/AssignmentsVT';
import AssignmentsOp from './fileassignment/AssignmentsOp';
import AssignmentsPerulangan from './fileassignment/AssignmentsPerulangan';
import AssignmentsPercabangan from './fileassignment/AssignmentsPercabangan';
import AssignmentsArray from './fileassignment/AssignmentsArray';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AssignmentContent (props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'ActiveCaption' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'white', }}>
            <Tabs value={value} 
                onChange={handleChange} 
                variant="scrollable" 
                scrollButtons="auto" 
                aria-label="tabs materi"
                textColor='white'
            >
            <Tab label={props.item1} {...a11yProps(0)} />
            <Tab label={props.item2} {...a11yProps(1)} />
            <Tab label={props.item3} {...a11yProps(2)} />
            <Tab label={props.item4} {...a11yProps(3)} />
            <Tab label={props.item5} {...a11yProps(4)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0} >
            <AssignmentsVT/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <AssignmentsOp/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <AssignmentsPerulangan/>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <AssignmentsPercabangan/>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <AssignmentsArray/>
        </TabPanel>
        </Box>
    );
}