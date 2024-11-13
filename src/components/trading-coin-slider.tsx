import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CoinData {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

interface CoinCardProps {
  coin: CoinData;
}

interface TrendingCoinsSliderProps {
  trendingCoins: CoinData[];
}

const TrendingCoinsSlider: React.FC<TrendingCoinsSliderProps> = ({
  trendingCoins = [],
}) => {
  return (
    <div className="mb-8 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex space-x-4 pb-2">
        {trendingCoins.map((coin) => (
          <CoinCard key={coin.symbol} coin={coin} />
        ))}
      </div>
    </div>
  );
};

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  const isPositive = coin.change >= 0;

  return (
    <Card className="flex-shrink-0 w-48">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">{coin.symbol}</span>
          <span
            className={`text-sm ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="h-4 w-4 inline" />
            ) : (
              <TrendingDown className="h-4 w-4 inline" />
            )}
            {coin.change}%
          </span>
        </div>
        <div className="text-lg font-semibold">
          ${coin.price.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600">{coin.name}</div>
      </CardContent>
    </Card>
  );
};

export default TrendingCoinsSlider;
