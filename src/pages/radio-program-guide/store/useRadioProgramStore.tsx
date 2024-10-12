// store
import { create } from "zustand";
import { fetchRadioPrograms } from "../fetch";
import { Program } from "../radio-programs";
import dayjs, { Dayjs } from "dayjs";

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
    console.log(
      jsonData.then((res) => {
        console.log(res.progs);
        const genreList: string[] = res.progs.prog.map(
          (pro) => pro.genre.program.name
        );
        const noDuplicatesList = Array.from(new Set(genreList));
        setPrograms(res.progs?.prog);
        setGenreList(noDuplicatesList);
      })
    );
  },
  setSearchDay: (day) => {
    set({ searchDay: day });
  },
  setGenres: (list) => {
    console.log(list);
    set({ genres: list });
  },
}));
