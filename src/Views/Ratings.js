import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import exBur from '../Assets/img/exBur.png';
import { ReactComponent as RemoveIcon } from '../Assets/img/remove-button.svg';

const useStyles = makeStyles({
    root:{
        margin: "1% 10% 5%",
        textAlign: "left"
    },
    card:{
        display: "flex",
        position: "relative"
    },
    back:{
        textAlign: "end",
        font: "normal normal normal 23px/28px Roboto",
        color: "#E87803",
        padding: 10
    }
})

const Ratings = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    return(
        <div  className={classes.root}>
            <h2>Rate your food</h2>
            <Card className={classes.card}>
                <div className="rating-img">
                    <img src={exBur} alt="Example burger"/>
                </div>
                <div className="rest-rating-sec">
                    <div className="rat-title-sec">
                        <div className="ret-rest-tit">Example Burger</div>
                        <div>Help the community to decide</div>
                    </div>
                    <div>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography style={{color: "#E87803"}} component="legend">Food</Typography>
                            <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            className="rating-box"
                            />
                        </Box>
                    </div>
                </div>
                <div className="remove-sec">
                    <Link to="/myorders"><RemoveIcon /></Link>
                </div>
            </Card>
            <Link to="/"><div className={classes.back}>Back to home</div></Link>
        </div>
    );
}

export default Ratings;