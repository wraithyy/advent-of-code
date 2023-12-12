import * as readline from "readline";
import * as path from "path";
import * as fs from "fs";
import { runDay1 } from "./1";
import { runDay2 } from "./2";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter day number: ", (number: string) => {
  switch (number) {
    case "1":
      runDay1();
      break;
    case "2":
      runDay2();
      break;
    default:
      console.log("You entered something else");
      break;
  }

  rl.close();
});
