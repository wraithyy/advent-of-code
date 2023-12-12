import fs from "fs";
import path from "path";
import { getPossibleGames } from "./functions";

const filePath = path.join(__dirname, "../assets/2/input.txt");
const CONFIG = {
  red: 12,
  green: 13,
  blue: 14,
};
export const runDay2 = () => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("SOLUTION");
    console.log(getPossibleGames(data, CONFIG));
  });
};
