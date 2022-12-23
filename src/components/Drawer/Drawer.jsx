import React,{useState} from "react";
import {Drawer,List,ListItem,Link,ListItemText} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './styles';
function DrawerComponent() {
    const classes = useStyles();
      const [openDrawer, setOpenDrawer] = useState(false);
      return (
        <>
          <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <List>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    Merge Sort
                  {/* <Link to="/about">About</Link> */}
                </ListItemText>
              </ListItem>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText> Insertion Sort
                  {/* <Link to="/contact">Contact</Link> */}
                </ListItemText>
              </ListItem>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText> Bubble Sort
                  {/* <Link to="/about">Faq</Link> */}
                </ListItemText>
              </ListItem>
            </List>
          </Drawer>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
          </IconButton>
        </>
      );
    }
    export default DrawerComponent;