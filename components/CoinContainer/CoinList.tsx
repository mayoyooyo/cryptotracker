import CoinContainer from ".";

export default function CoinList({ filteredCoins }: any) {
  return (
    <>
      {filteredCoins.map((coin: any) => {
        return (
          <CoinContainer
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            high_24h={coin.high_24h}
            low_24h={coin.low_24h}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}
