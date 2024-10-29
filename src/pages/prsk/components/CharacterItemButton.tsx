import { Character } from "../types";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useSnackbar } from "notistack";

type CharacterItemButtonProps = {
  chara: Character;
};

const CharacterItemButton: React.FC<CharacterItemButtonProps> = ({ chara }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleListButton = (character: Character) => {
    closeSnackbar(character.name);
    enqueueSnackbar(character.name + " の誕生日は " + character.birthday);
  };
  return (
    <>
      <ListItem key={chara.name} disablePadding>
        <ListItemButton onClick={() => handleListButton(chara)}>
          <ListItemAvatar>
            <Avatar alt={`Avatar n°${chara.name}`} src={chara.iconNowUrl} />
          </ListItemAvatar>
          <ListItemText id={chara.name} primary={chara.name} />
        </ListItemButton>
      </ListItem>
    </>
  );
};
export default CharacterItemButton;
