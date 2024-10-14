import { useRadioProgramStore } from "../store";
import { ProgramGrid } from "./";

const TimeTable = () => {
  const programs = useRadioProgramStore((state) => state.programs);

  return (
    <>
      {programs && programs.length > 0
        ? programs.map((program, index) => {
            return (
              <ProgramGrid
                title={program.title}
                ftl={String(program.ftl)}
                key={index}
              />
            );
          })
        : null}
    </>
  );
};
export default TimeTable;
