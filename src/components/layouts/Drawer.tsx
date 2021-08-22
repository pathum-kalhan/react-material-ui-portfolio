import React, { Fragment, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { List } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import { toggleDrawer } from "../../store/actions/authActions";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";


import { useDispatch, useSelector } from "react-redux";
import {State} from "../../store/reducers/index"
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function TemporaryDrawer(props:any) {
  const isDrawerOpen = useSelector((state:State)=> state.auth.isDrawerOpen);

  const dispatch = useDispatch()
  const classes = useStyles();
  const theme = useTheme();

  const [openIndex, setOpenIndex] = useState(0);

 

  const handleDrawerClose = () => {
    dispatch(toggleDrawer());
  };

  const handleClick = (index:number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const onToggle = () => (event:any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    props.toggleDrawer();
  };

 

  const list = (anchor:string) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />

      <List>
        {['/home'].map((route, index:number) => (
          <Fragment key={index}>
            <ListItem button onClick={(e) => handleClick(index)}>
              <ListItemText primary={route} />
             
            </ListItem>
           
          </Fragment>
        ))}
      </List>
    </div>
  );

  return (
    
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={onToggle()}
        variant="persistent"
      >
        {list("left")}
      </Drawer>
    
  );
}



export default TemporaryDrawer;

