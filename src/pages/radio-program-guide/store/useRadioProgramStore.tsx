import { create } from "zustand";
import dayjs, { Dayjs } from "dayjs";
import { fetchRadioPrograms } from "../features";
import { Program } from "../types";

type RadioProgramState = {
  programs: Program[];
  searchDay: Dayjs;
  genres: string[];
};

type RadioProgramAction = {
  setPrograms: (programs: Program[]) => void;
  fetchPrograms: () => void;
  setSearchDay: (day: Dayjs) => void;
  setGenres: (list: string[]) => void;
};

export type RadioProgramStore = RadioProgramState & RadioProgramAction;

export const useRadioProgramStore = create<RadioProgramStore>()((set) => ({
  programs: [],
  searchDay: dayjs(),
  genres: [],
  setPrograms: (programs) => set({ programs: programs }),
  fetchPrograms: () => {
    const setPrograms = useRadioProgramStore.getState().setPrograms;
    const setGenreList = useRadioProgramStore.getState().setGenres;
    const searchDay = useRadioProgramStore.getState().searchDay;
    const jsonData = fetchRadioPrograms(searchDay);

    jsonData.then((res) => {
      const genreList: string[] = res.map((pro) => pro.genre.program?.name);
      const noDuplicatesList = Array.from(new Set(genreList));
      setPrograms(res);
      setGenreList(noDuplicatesList);
    });
  },
  setSearchDay: (day) => {
    set({ searchDay: day });
  },
  setGenres: (list) => {
    console.log(list);
    set({ genres: list });
  },
}));
