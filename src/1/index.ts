import fs from "fs";
import path from "path";
import { solveTrebuchet } from "./functions";

const filePath = path.join(__dirname, "../assets/1/input.txt");

export const runDay1 = () => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("SOLUTION");
    console.log(solveTrebuchet(data));
  });
};
