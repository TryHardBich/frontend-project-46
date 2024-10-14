#!/usr/bin/env node
import { Command } from "commander";
import parseData from "../parsing.js";
const program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .version('-V, version')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]  output format')
;
program.parse()