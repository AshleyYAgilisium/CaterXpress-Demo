// local imports
import itemSlice, { getItems } from "../store/slices/items";
import cartSlice from "../store/slices/cart";
import payDone from "../Assets/img/payDone.svg";

// imports from downloads
import { useSelector,  useDispatch } from "react-redux";
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      width: 500,
      margin: 50
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    content:{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        margin: "20px 40px"
    },
    check:{
       background: "transparent linear-gradient(180deg, #DB750A 0%, #DB4300 100%) 0% 0% no-repeat padding-box"
    }
  });

const Payment = () => {
    const items = useSelector(getItems) || [];
    const classes = useStyles();
    const dispatch = useDispatch();
    const [pay,setPay] = React.useState(false);

    return(
        <div className="payment">
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.content}>
                    <h2>Payment</h2>
                    <hr/>
                    {pay?
                        <div className="payment-done">
                            {/* <CheckCircleOutlineIcon color="#DB4300" /> */}
                            <img src={payDone} alt="payment cpmpleted"/>
                            <div style={{color: "#8E8E8E",padding:"50px 5px",font:"normal normal normal 26px/15px Roboto"}}>
                                Your Payment was Successful.<br/><br/><br/>Enjoy Your Food!
                            </div>
                            <Link to="/">
                                <div className="pay-button" onClick={()=>setPay(false)}>Back to Menu</div>
                            </Link>
                        </div>
                    :
                        <div>
                            <input className="payment-input" placeholder="CARD NUMBER"/>
                            <input className="payment-input" placeholder="CARD HOLDER'S NAME"/>
                            <div>
                                <select className="payment-input">
                                    <option value="" disabled selected hidden>MM</option>
                                </select>
                                <select className="payment-input">
                                    <option value="" disabled selected hidden>YYYY</option>
                                </select>
                                <input className="payment-input" placeholder="CVV"/>
                            </div>
                            <div>
                                <Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />                                
                                <label for="credit">Save credit card information</label><br/>
                            </div>
                            <div className="pay-button" onClick={()=>{
                                console.log(items);
                                dispatch(itemSlice.actions.removeItems());
                                dispatch(cartSlice.actions.removeAll());
                                setPay(true);
                            }}>Pay</div>
                        </div>
                    }
                    
                </CardContent>
            </Card>
        </div>
    );
}

export default Payment;