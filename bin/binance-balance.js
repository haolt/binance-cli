import { Command } from 'commander';
import { getMyBalance } from './api/index.js';

const program = new Command();

program
  .action(getMyBalance)
  .parse(process.argv);
