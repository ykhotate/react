import { Program, RadioPrograms } from "../types";

export const RadikoXMLParser = (
  xmlString: string,
  jsonData: RadioPrograms
): Program[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  // 時間情報を取得
  const stations = Array.from(xmlDoc.getElementsByTagName("station")).map(
    (station) => ({
      progs: Array.from(station.getElementsByTagName("prog")).map(
        (prog, id) => ({
          id: prog.getAttribute("id"),
          ft: prog.getAttribute("ft"),
          to: prog.getAttribute("to"),
          ftl: prog.getAttribute("ftl"),
          tol: prog.getAttribute("tol"),
          dur: prog.getAttribute("dur"),
          index: id,
        })
      ),
    })
  );
  const data = jsonData.progs.prog.map((program, id) => {
    const xml = stations[0].progs.find((xmlProg) => xmlProg.index === id);
    return {
      ...program,
      id: xml?.id,
      ft: xml?.ft,
      to: xml?.to,
      ftl: xml?.ftl,
      tol: xml?.tol,
      dur: xml?.dur,
    } as Program;
  });
  return data;
};
