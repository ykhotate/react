import { useEffect, useState } from "react";
import { Character, UnitName } from "../types";
import { getCharaData } from "../features";
import CharacterList from "./CharacterList";
import { Stack } from "@mui/material";

const UnitList = () => {
  const [characterList, setCharacterList] = useState<{
    [unit: number]: Character[];
  }>([]);
  useEffect(() => {
    const charaData = getCharaData();
    const unitList = charaData.reduce((acc, item) => {
      if (!acc[item.unit]) {
        acc[item.unit] = [];
      }
      acc[item.unit].push(item);
      return acc;
    }, {} as { [unit: number]: Character[] });
    setCharacterList(unitList);
  }, []);

  return (
    <>
      <Stack direction={"row"} spacing={1}>
        {Object.values(UnitName).map((unit) => {
          return (
            <CharacterList
              key={unit}
              charas={characterList[UnitName[unit as keyof typeof UnitName]]}
            />
          );
        })}
      </Stack>
    </>
  );
};
export default UnitList;
