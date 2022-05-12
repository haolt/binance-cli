#!/usr/bin/env node --no-warnings
import chalk from 'chalk';
import figlet from 'figlet';
import { Command } from 'commander';

const program = new Command();

if (process.argv.length < 3) {
  console.info(chalk.blue(figlet.textSync('Binance CLI', { horizontalLayout: 'full' })));
  console.info(chalk.blue.bold('by Hao Le - Make It Awesome | https://haodev.wordpress.com'));
  console.info();
};

program
  .version('1.0.0')
  .command('balance', 'Check your own balances')
  .command('price', 'Check the coin/token price(s)')
  .command('order', 'Place a buy/sell order')
  .parse(process.argv);
