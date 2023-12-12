export const getPossibleGames = (
  data: string,
  config: { red: number; green: number; blue: number }
) => {
  const lines = data.split("\n");

  const output = lines.reduce(
    (acc, line) => {
      const gameid = line.match(/Game\s(\d+):/)?.[1] || "0";
      const reveals = line
        .split(": ")[1]
        .split("; ")
        .map((reveal) =>
          reveal.split(", ").map((play) => ({
            color: play.split(" ")[1],
            number: play.split(" ")[0],
          }))
        );
      const solution = reveals.flat(1).reduce((acc, reveal) => {
        return (
          acc &&
          config[reveal.color as keyof typeof config] >= parseInt(reveal.number)
        );
      }, true);
      const redPower = Math.max(
        ...reveals
          .flat(1)
          .flatMap((reveal) =>
            reveal.color === "red" ? [parseInt(reveal.number)] : []
          )
      );
      const greenPower = Math.max(
        ...reveals
          .flat(1)
          .flatMap((reveal) =>
            reveal.color === "green" ? [parseInt(reveal.number)] : []
          )
      );

      const bluePower = Math.max(
        ...reveals
          .flat(1)
          .flatMap((reveal) =>
            reveal.color === "blue" ? [parseInt(reveal.number)] : []
          )
      );
      console.log(gameid, reveals, solution, {
        redPower,
        greenPower,
        bluePower,
      });
      return {
        gameIdSum: solution ? acc.gameIdSum + parseInt(gameid) : acc.gameIdSum,
        power: acc.power + redPower * greenPower * bluePower,
      };
    },
    { gameIdSum: 0, power: 0 }
  );
  return output;
};
