import inquirer from 'inquirer';
import chalk from 'chalk';
import Confirm from 'prompt-confirm';
import { Command } from 'commander';
import { placeAnMarketOrderAPI } from './api/index.js';

const program = new Command();

const placeAnOrder = () => {
  inquirer
  .prompt([
    {
      name: 'asset',
      type: 'input',
      message: 'Which coin/token do you wanna place?(required)',
      validate: (asset) => !!asset,
      filter: (type) => type.toUpperCase(),
    },
    {
      name: 'currency',
      type: 'input',
      message: 'Which currency is based? (Default: USDT)',
      default: 'USDT',
    },
    {
      name: 'action',
      type: 'list',
      message: 'Which is order type?',
      choices: ['Buy', 'Sell'],
      default: 'Buy',
      filter: (type) => type.toLowerCase(),
    },
    {
      name: 'quantity',
      type: 'number',
      message: 'How quantity? (required float)',
      filter: (quantity) => (parseFloat(quantity) || ''),
      validate: (quantity) => (quantity > 0),
    },
  ])
  .then((answers) => {
    const confirm = new Confirm(chalk.bold(`Are you sure to place this market order?`));

    confirm.ask((isConfirm) => {
      if (isConfirm) {
        placeAnMarketOrderAPI(answers);
      }
    });
  })
  .catch((err) => {
    console.error(err?.isTtyError || err.message);
  });
};

program
  .action(placeAnOrder)
  .parse(process.argv);
