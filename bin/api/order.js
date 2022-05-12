import chalk from 'chalk';
import binanceExchange from './core.js';

export const placeAnMarketOrderAPI = async (answers) => {
  const { asset, currency, action, quantity } = answers;
  try {
    const orderResponse = await binanceExchange.createOrder(
      `${asset}/${currency}`,
      'market',
      action,
      quantity,
    );
    const {
      trades: [
        {
          symbol,
          side,
          amount,
          price,
        }
      ]
    } = orderResponse;
    console.info(chalk.blue.bold(`
      ${side.toUpperCase()} ${chalk.green(amount)} ${symbol?.split('/')[0]} AT ${chalk.green(`$${price}`)} SUCCESSFULLY! GOOD LUCK, "HODLER" =)))
      CHECK YOUR BALANCES AGAIN ^^
    `));
  } catch (err) {
    console.error(chalk.red.bold(`ERROR: ${err.msg}`));
  };
};
