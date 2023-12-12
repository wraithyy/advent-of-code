const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

export const solveTrebuchet = (data: string) => {
  const lines = data.split("\n");
  return lines.reduce((acc, line) => {
    let newLine = line;
    numbers.forEach((number, index) => {
      newLine = newLine.replaceAll(
        number,
        number[0] + (index + 1) + number.at(-1) + ""
      );
    });
    const parsed = newLine.replace(/[^\d.-]+/g, "");
    console.log(
      parseInt(parsed.split("")[0] + "" + parsed.split("").at(-1)),
      "=>",
      line,
      " -- ",
      newLine
    );
    return acc + parseInt(parsed.split("")[0] + "" + parsed.split("").at(-1));
  }, 0);
};
