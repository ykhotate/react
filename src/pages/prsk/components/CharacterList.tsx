import { useEffect, useState } from "react";
import { Character } from "../types";
import { getCharaData } from "../features";
import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

const CharacterList = () => {
    const [characterList, setCharacterList] =useState<Character[]>([])
    useEffect(()=>{
        setCharacterList(getCharaData)
    },[])
  return (
    <>
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {characterList && characterList.length > 0
        ? characterList.map((character, index) => {
            return (
                <ListItem
                  key={index}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${index + 1}`}
                        src={character.iconUrl}
                      />
                    </ListItemAvatar>
                    <ListItemText id={character.name} primary={character.name} />
                  </ListItemButton>
                </ListItem>
              );
          })
        : null}
        </List>
    </>
  );
};
export default CharacterList;
