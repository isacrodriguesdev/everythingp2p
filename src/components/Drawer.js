import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Fontawesome } from "@fortawesome/react-fontawesome";
import { SendIcon, Home } from "@material-ui/icons";

class Drawer extends React.Component {
  state = {
    translateX: 0,
  };

  toggleMenu() {
    this.setState({
      translateX: this.state.translateX === 0 ? -200 : 0,
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          ...styles.drawer,
          transform: `translateX(${this.state.translateX}px)`,
        }}>
        <div
          style={{
            position: "absolute",
            right: -35,
            top: 5,
          }}
        >
          <button
            onClick={() => this.toggleMenu()}
            style={{
              width: 30,
              height: 30,
              backgroundColor: "red",
            }}
          ></button>
        </div>
        <div style={{}}>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItem
              button={true}
              style={{
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid 0",
              }}
            >
              <Home style={{ color: "white" }} />
              <ListItemText
                primary="Home"
                style={{
                  top: 2,
                  position: "relative",
                  marginLeft: 5,
                  color: "white",
                }}
              />
            </ListItem>

            <ListItem
              button={true}
              style={{
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid 0",
              }}
            >
              <Home style={{ color: "white" }} />
              <ListItemText
                primary="Games"
                style={{
                  top: 2,
                  position: "relative",
                  marginLeft: 5,
                  color: "white",
                }}
              />
            </ListItem>

            <ListItem
              button={true}
              style={{
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid 0",
              }}
            >
              <Home style={{ color: "white" }} />
              <ListItemText
                primary="Serviços"
                style={{
                  top: 2,
                  position: "relative",
                  marginLeft: 5,
                  color: "white",
                }}
              />
            </ListItem>
            <ListItem
              button={true}
              style={{
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid 0",
              }}
            >
              <Home style={{ color: "white" }} />
              <ListItemText
                primary="Exchanges"
                style={{
                  top: 2,
                  position: "relative",
                  marginLeft: 5,
                  color: "white",
                }}
              />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

const styles = {
  drawer: {
    transition: "all 0.5s ease-out",
    position: "absolute",
    width: 200,
    height: "100%",
    backgroundColor: "rgb(40, 42, 60)",
    boxShadow: "1px 2px 10px rgba(0,0,0,.4)",
    // padding: "0px 20px",
  },
  itemList: {
    padding: "2px 0px",
    cursor: "pointer",
    margin: "8px 0px",
  },
};

export default Drawer;
