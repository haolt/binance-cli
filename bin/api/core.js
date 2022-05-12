import ccxt from 'ccxt';

const binanceExchange = new ccxt.binance({
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_SECRET_KEY',
});

binanceExchange.setSandboxMode(true);

export default binanceExchange;
