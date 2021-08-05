import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from "axios";
import Slider from "react-slick";

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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [data,setData] = useState([])
    const [category,setCategory] = useState("electronics")

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    useEffect(() => {
        const axiosData = async () => {
            const result = await axios(`https://fakestoreapi.com/products/category/${category}`)
            console.log(result);
            setData(result.data);
        };
        axiosData();
    }, [category])

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Electronics" onClick={() => setCategory("electronics")} {...a11yProps(0)} />
                    <Tab label="Jewelery" onClick={() => setCategory("jewelery")} {...a11yProps(1)} />
                    <Tab label="Men's clothing" onClick={() => setCategory("men's clothing")} {...a11yProps(2)} />
                    <Tab label="Women's clothing"  onClick={() => setCategory("women's clothing")} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            {Array(4).fill(0).map((el, index) => {
                return (
                    <TabPanel className="tabContent" value={value} index={index}>
                        <Slider {...settings}>
                            {data.map((item) => {
                                return (
                                    <img src={item.image} className="categoryImage" alt=""/>
                                )
                            })}
                        </Slider>
                    </TabPanel>
                )
            })}
        </div>
    );
}
