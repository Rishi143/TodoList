import './App.css';
import { TextField, InputAdornment, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from "@material-ui/core";
import { AddCircleOutlineOutlined, Delete } from "@material-ui/icons";
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: "",
      items: []
    }

    this.textHandler = this.textHandler.bind(this);
    this.iconClickHandler = this.iconClickHandler.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  textHandler(e) {
    this.setState({ text: e.target.value })
  }

    iconClickHandler(e) {
      this.setState(prevState => {
        return {
          items: [...prevState.items, prevState.text],
          text: ""
        }
      })
    }

  deleteHandler(index) {
    this.setState(prevState => { return { items: prevState.items.filter((item, i) => index !== i) } })
  }

  keyPressHandler(e) {
    e.key === "Enter" && this.iconClickHandler();    
  }

  render() {
    return <div className="App">
      <TextField variant="outlined" label="Title" value={this.state.text}
        onChange={this.textHandler}
        onKeyPress={this.keyPressHandler}
        InputProps={{
          endAdornment: <InputAdornment position="start">
            <AddCircleOutlineOutlined onClick={this.iconClickHandler} />
          </InputAdornment>,
        }}
      />
      <List>
        {
          this.state.items.map((item, index) => {
            return <ListItem key={index}>
              <Typography style={{ marginRight: "10px" }}>{index + 1}</Typography>
              <ListItemText>{item}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton><Delete onClick={(e) => this.deleteHandler(index)} /></IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          })
        }
      </List>
    </div>
  }
}

export default App;
