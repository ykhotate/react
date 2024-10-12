import { radikoClient } from "../../hooks";
import { XMLParser } from "fast-xml-parser";
import { RadioPrograms } from "./radio-programs";
import { Dayjs } from "dayjs";

export const fetchRadioPrograms = async (
  searchDay: Dayjs
): Promise<RadioPrograms> => {
  const dayString = searchDay.format("YYYYMMDD");
  const searchURI = dayString + "/FMT" + ".xml";
  const response = await radikoClient.get(searchURI);
  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  console.log(jsonData);
  return jsonData.radiko.stations.station as RadioPrograms;
};
