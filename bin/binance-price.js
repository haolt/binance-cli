import { Command } from 'commander';
import { fetchASpecificTickerAPI, fetchTickersAPI } from './api/index.js';

const program = new Command();

const getPriceInMarket = ({
  ass,
  cur = 'USDT',
}) => {
  if (!ass) {
    fetchTickersAPI();
    return;
  };
  const symbol = `${ass}/${cur}`;
  fetchASpecificTickerAPI(symbol);
};

program
  .option(
    '--ass <ASSET: COIN/TOKEN>',
    'Set a specific coin/token'
  )
  .option(
    '--cur <CURRENCY>',
    'Set a specific base currency'
  )
  .action((cmd) => getPriceInMarket(cmd))
  .parse(process.argv);
