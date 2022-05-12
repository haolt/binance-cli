import chalk from 'chalk';
import binanceExchange from './core.js';

export const getMyBalance = async () => {
  try {
    const { info: { balances } } = await binanceExchange.fetchBalance();
    const displayCryptos = balances
                            .filter(balance => (parseFloat(balance.free) || parseFloat(balance.locked)))
                            .map(balance => ({
                              Asset: balance.asset,
                              Free: parseFloat(balance.free),
                              Locked: parseFloat(balance.locked),
                            }));

    console.info('');
    console.info(chalk.blue.bold('YOUR BALANCE:     '));
    console.table(displayCryptos);
  } catch (err) {
    console.error(chalk.red.bold(`ERROR: ${err.message}`));
  };
};
