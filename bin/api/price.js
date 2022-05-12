import chalk from 'chalk';
import binanceExchange from './core.js';

export const fetchASpecificTickerAPI = async (symbol) => {
  try {
    const ticker = await binanceExchange.fetchTicker(symbol);
    console.table([
      {
        Symbol: ticker.symbol,
        Percentage: ticker.percentage,
        CurrentValue: ticker.last,
      }
    ]);
  } catch (err) {
    console.error(chalk.red.bold(`ERROR: ${err.message}`));
  };
};

export const fetchTickersAPI = async () => {
  try {
    const tickers = await binanceExchange.fetchTickers();
    console.info(chalk.blue.bold('SOME TICKERS:'));
    console.table(Object.values(tickers).map(ticker => ({
      Symbol: ticker.symbol,
      Percentage: ticker.percentage,
      CurrentValue: ticker.last,
    })));
  } catch (err) {
    console.error(chalk.red.bold(`ERROR: ${err.message}`));
  };
};
