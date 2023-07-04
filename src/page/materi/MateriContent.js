import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function MateriContent (props) {
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
            <Typography variant='h4' fontFamily="serif">
                Sample Materi Pembelajaran Satu.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed at dui ut nisi dapibus aliquam. Donec convallis orci nec risus scelerisque, 
                et efficitur augue lobortis. 
                Mauris mattis diam a quam euismod, rutrum aliquam felis blandit. 
                Nam nunc enim, cursus vel quam eu, pretium convallis diam. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut maximus nisl metus, ac commodo libero semper sit amet. 
                Mauris ligula tellus, placerat at mi eget, posuere auctor urna. 
                Aenean porta nunc quis tortor aliquam, vitae placerat mauris placerat. 
                Vivamus facilisis congue lectus eu egestas. Ut semper eros a nunc lacinia tristique. 
                Sed tincidunt aliquam ornare. Sed elementum leo sapien, ut efficitur nibh commodo quis. 
                Phasellus dapibus et libero sit amet dapibus. In molestie eros ac turpis lacinia rhoncus. 
                Ut temp`or, lorem ut lobortis bibendum, nisl risus aliquam ipsum, eget maximus lectus lacus eu dui.
            </Typography>
            <Typography variant='h6' align='justify'>
                Nam fringilla pharetra ante, vitae condimentum lacus fermentum non. 
                In aliquam consequat ex, at dignissim risus venenatis non. 
                Morbi leo elit, dictum a tortor a, dapibus interdum tortor. 
                Proin metus nisl, fermentum a turpis quis, tempus iaculis leo. 
                Nam auctor a libero eget ullamcorper. Suspendisse bibendum ligula id dignissim ornare. 
                Suspendisse quis leo in orci sodales tempor at sed sem. Proin nisl sem, finibus id justo id, pharetra semper magna. 
                Nam lobortis lacinia efficitur. Proin non quam at dolor feugiat mattis. 
                Suspendisse odio eros, tempor nec urna eu, consectetur sodales nisi. 
                Etiam eget tellus ac nunc scelerisque gravida. Quisque ullamcorper id lectus ac dignissim.
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Typography variant='h4' fontFamily="serif">
                Sample Materi Pembelajaran Dua.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed at dui ut nisi dapibus aliquam. Donec convallis orci nec risus scelerisque, 
                et efficitur augue lobortis. 
                Mauris mattis diam a quam euismod, rutrum aliquam felis blandit. 
                Nam nunc enim, cursus vel quam eu, pretium convallis diam. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut maximus nisl metus, ac commodo libero semper sit amet. 
                Mauris ligula tellus, placerat at mi eget, posuere auctor urna. 
                Aenean porta nunc quis tortor aliquam, vitae placerat mauris placerat. 
                Vivamus facilisis congue lectus eu egestas. Ut semper eros a nunc lacinia tristique. 
                Sed tincidunt aliquam ornare. Sed elementum leo sapien, ut efficitur nibh commodo quis. 
                Phasellus dapibus et libero sit amet dapibus. In molestie eros ac turpis lacinia rhoncus. 
                Ut temp`or, lorem ut lobortis bibendum, nisl risus aliquam ipsum, eget maximus lectus lacus eu dui.
            </Typography>
            <Typography variant='h6' align='justify'>
                Nam fringilla pharetra ante, vitae condimentum lacus fermentum non. 
                In aliquam consequat ex, at dignissim risus venenatis non. 
                Morbi leo elit, dictum a tortor a, dapibus interdum tortor. 
                Proin metus nisl, fermentum a turpis quis, tempus iaculis leo. 
                Nam auctor a libero eget ullamcorper. Suspendisse bibendum ligula id dignissim ornare. 
                Suspendisse quis leo in orci sodales tempor at sed sem. Proin nisl sem, finibus id justo id, pharetra semper magna. 
                Nam lobortis lacinia efficitur. Proin non quam at dolor feugiat mattis. 
                Suspendisse odio eros, tempor nec urna eu, consectetur sodales nisi. 
                Etiam eget tellus ac nunc scelerisque gravida. Quisque ullamcorper id lectus ac dignissim.
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Typography variant='h4' fontFamily="serif">
                Sample Materi Pembelajaran Tiga.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed at dui ut nisi dapibus aliquam. Donec convallis orci nec risus scelerisque, 
                et efficitur augue lobortis. 
                Mauris mattis diam a quam euismod, rutrum aliquam felis blandit. 
                Nam nunc enim, cursus vel quam eu, pretium convallis diam. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut maximus nisl metus, ac commodo libero semper sit amet. 
                Mauris ligula tellus, placerat at mi eget, posuere auctor urna. 
                Aenean porta nunc quis tortor aliquam, vitae placerat mauris placerat. 
                Vivamus facilisis congue lectus eu egestas. Ut semper eros a nunc lacinia tristique. 
                Sed tincidunt aliquam ornare. Sed elementum leo sapien, ut efficitur nibh commodo quis. 
                Phasellus dapibus et libero sit amet dapibus. In molestie eros ac turpis lacinia rhoncus. 
                Ut temp`or, lorem ut lobortis bibendum, nisl risus aliquam ipsum, eget maximus lectus lacus eu dui.
            </Typography>
            <Typography variant='h6' align='justify'>
                Nam fringilla pharetra ante, vitae condimentum lacus fermentum non. 
                In aliquam consequat ex, at dignissim risus venenatis non. 
                Morbi leo elit, dictum a tortor a, dapibus interdum tortor. 
                Proin metus nisl, fermentum a turpis quis, tempus iaculis leo. 
                Nam auctor a libero eget ullamcorper. Suspendisse bibendum ligula id dignissim ornare. 
                Suspendisse quis leo in orci sodales tempor at sed sem. Proin nisl sem, finibus id justo id, pharetra semper magna. 
                Nam lobortis lacinia efficitur. Proin non quam at dolor feugiat mattis. 
                Suspendisse odio eros, tempor nec urna eu, consectetur sodales nisi. 
                Etiam eget tellus ac nunc scelerisque gravida. Quisque ullamcorper id lectus ac dignissim.
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <Typography variant='h4' fontFamily="serif">
                Sample Materi Pembelajaran Empat.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed at dui ut nisi dapibus aliquam. Donec convallis orci nec risus scelerisque, 
                et efficitur augue lobortis. 
                Mauris mattis diam a quam euismod, rutrum aliquam felis blandit. 
                Nam nunc enim, cursus vel quam eu, pretium convallis diam. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut maximus nisl metus, ac commodo libero semper sit amet. 
                Mauris ligula tellus, placerat at mi eget, posuere auctor urna. 
                Aenean porta nunc quis tortor aliquam, vitae placerat mauris placerat. 
                Vivamus facilisis congue lectus eu egestas. Ut semper eros a nunc lacinia tristique. 
                Sed tincidunt aliquam ornare. Sed elementum leo sapien, ut efficitur nibh commodo quis. 
                Phasellus dapibus et libero sit amet dapibus. In molestie eros ac turpis lacinia rhoncus. 
                Ut temp`or, lorem ut lobortis bibendum, nisl risus aliquam ipsum, eget maximus lectus lacus eu dui.
            </Typography>
            <Typography variant='h6' align='justify'>
                Nam fringilla pharetra ante, vitae condimentum lacus fermentum non. 
                In aliquam consequat ex, at dignissim risus venenatis non. 
                Morbi leo elit, dictum a tortor a, dapibus interdum tortor. 
                Proin metus nisl, fermentum a turpis quis, tempus iaculis leo. 
                Nam auctor a libero eget ullamcorper. Suspendisse bibendum ligula id dignissim ornare. 
                Suspendisse quis leo in orci sodales tempor at sed sem. Proin nisl sem, finibus id justo id, pharetra semper magna. 
                Nam lobortis lacinia efficitur. Proin non quam at dolor feugiat mattis. 
                Suspendisse odio eros, tempor nec urna eu, consectetur sodales nisi. 
                Etiam eget tellus ac nunc scelerisque gravida. Quisque ullamcorper id lectus ac dignissim.
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <Typography variant='h4' fontFamily="serif">
                Sample Materi Pembelajaran Lima.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed at dui ut nisi dapibus aliquam. Donec convallis orci nec risus scelerisque, 
                et efficitur augue lobortis. 
                Mauris mattis diam a quam euismod, rutrum aliquam felis blandit. 
                Nam nunc enim, cursus vel quam eu, pretium convallis diam. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut maximus nisl metus, ac commodo libero semper sit amet. 
                Mauris ligula tellus, placerat at mi eget, posuere auctor urna. 
                Aenean porta nunc quis tortor aliquam, vitae placerat mauris placerat. 
                Vivamus facilisis congue lectus eu egestas. Ut semper eros a nunc lacinia tristique. 
                Sed tincidunt aliquam ornare. Sed elementum leo sapien, ut efficitur nibh commodo quis. 
                Phasellus dapibus et libero sit amet dapibus. In molestie eros ac turpis lacinia rhoncus. 
                Ut temp`or, lorem ut lobortis bibendum, nisl risus aliquam ipsum, eget maximus lectus lacus eu dui.
            </Typography>
            <Typography variant='h6' align='justify'>
                Nam fringilla pharetra ante, vitae condimentum lacus fermentum non. 
                In aliquam consequat ex, at dignissim risus venenatis non. 
                Morbi leo elit, dictum a tortor a, dapibus interdum tortor. 
                Proin metus nisl, fermentum a turpis quis, tempus iaculis leo. 
                Nam auctor a libero eget ullamcorper. Suspendisse bibendum ligula id dignissim ornare. 
                Suspendisse quis leo in orci sodales tempor at sed sem. Proin nisl sem, finibus id justo id, pharetra semper magna. 
                Nam lobortis lacinia efficitur. Proin non quam at dolor feugiat mattis. 
                Suspendisse odio eros, tempor nec urna eu, consectetur sodales nisi. 
                Etiam eget tellus ac nunc scelerisque gravida. Quisque ullamcorper id lectus ac dignissim.
            </Typography>
        </TabPanel>
        </Box>
    );
}