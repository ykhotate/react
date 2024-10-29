import { Character } from "../types";
import { List } from "@mui/material";
import CharacterItemButton from "./CharacterItemButton";

type CharacterListProps = {
  charas: Character[];
};

const CharacterList: React.FC<CharacterListProps> = ({ charas }) => {
  return (
    <>
      <List dense sx={{ bgcolor: "background.paper" }}>
        {charas && charas.length > 0
          ? charas.map((character) => {
              return <CharacterItemButton chara={character} />;
            })
          : null}
      </List>
    </>
  );
};
export default CharacterList;
