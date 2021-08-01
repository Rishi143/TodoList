import React, { useState } from 'react';
import { TextField, InputAdornment, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from "@material-ui/core";
import { AddCircleOutlineOutlined, Delete } from "@material-ui/icons";

export function TodoList() {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    const textHandler = (e) => {
        setText(e.target.value);
    }

    const iconClickHandler = (e) => {
        setItems(prevItems => [...prevItems, text]);
        setText("")
    }
    
    const deleteHandler = (index) => {
        setItems(prevItems => prevItems.filter((item, i) => index !== i))
    }

    const keyPressHandler = (e) => {
        e.key === "Enter" && iconClickHandler();
    }

    return (<div className="App">
        <TextField variant="outlined" label="Title" value={text}
            onChange={textHandler}
            onKeyPress={keyPressHandler}
            InputProps={{
                endAdornment: <InputAdornment position="start">
                    <AddCircleOutlineOutlined onClick={iconClickHandler} />
                </InputAdornment>,
            }}
        />
        <List>
            {
                items.map((item, index) => {
                    return <ListItem key={index}>
                        <Typography style={{ marginRight: "10px" }}>{index + 1}</Typography>
                        <ListItemText>{item}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton><Delete onClick={(e) => deleteHandler(index)} /></IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                })
            }
        </List>
    </div>)
}

export default TodoList
