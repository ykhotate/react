import { UnitName } from "../types";

export const getCharaTag = (nameTag: string, unit: UnitName): string => {
  let url: string = "";
  switch (unit) {
    case UnitName.VIRTUAL_SINGER:
      url += "virtualsinger/";
      break;
    case UnitName.LEO_NEED:
      url += "unite01/";
      break;
    case UnitName.MORE_MORE_JUMP:
      url += "unite02/";
      break;
    case UnitName.VIVID_BAD_SQUAD:
      url += "unite03/";
      break;
    case UnitName.WONDERLANDS_SHOWTIME:
      url += "unite04/";
      break;
    case UnitName.NIGHT_CODE_25:
      url += "unite05/";
      break;
  }
  url += nameTag;
  return url;
};
