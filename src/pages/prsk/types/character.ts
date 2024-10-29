import { UnitName } from "./unit-name-enum";

export type Character = {
  name: string;
  iconNowUrl: string;
  iconPastUrl: string;
  birthday: string;
  tall: number;
  unit: UnitName;
};
