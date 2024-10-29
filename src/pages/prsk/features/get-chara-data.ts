import { getCharaTag } from ".";
import charaData from "../../../assets/prsk-chara.json";
import { PRSK_ICON_URL_BACK, PRSK_ICON_URL_FRONT } from "../../../consts";
import { Character } from "../types";

export const getCharaData = (): Character[] => {
  const characters: Character[] = charaData.map((chara) => {
    const iconLinkFront = PRSK_ICON_URL_FRONT + getCharaTag(chara.nameTag, chara.unit)
    const character: Character = {
        name: chara.name,
        iconNowUrl: iconLinkFront + "/now" + PRSK_ICON_URL_BACK,
        iconPastUrl: iconLinkFront + "/past" + PRSK_ICON_URL_BACK,
        birthday: chara.birthday,
        tall: chara.tall,
        unit: chara.unit
    }
    return character;
  });

  return characters;
};
