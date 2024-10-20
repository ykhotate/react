import charaData from "../../../assets/prsk-chara.json"
import { Character } from "../types"

export const getCharaData =(): Character[] =>{
    const characters:Character[] = charaData;
    return characters;
}