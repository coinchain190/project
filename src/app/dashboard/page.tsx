import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

// Mock cryptocurrency data
const cryptoData = [
  { name: "Bitcoin", symbol: "BTC", price: 29341.23, change: 2.5 },
  { name: "Ethereum", symbol: "ETH", price: 1845.67, change: -1.2 },
  { name: "Cardano", symbol: "ADA", price: 0.3789, change: 5.7 },
  { name: "Dogecoin", symbol: "DOGE", price: 0.0731, change: -0.8 },
];

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Your Crypto Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {cryptoData.map((crypto) => (
          <Card key={crypto.symbol}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {crypto.name}
              </CardTitle>
              <Badge variant={crypto.change >= 0 ? "default" : "destructive"}>
                {crypto.symbol}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${crypto.price.toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                {crypto.change >= 0 ? (
                  <span className="text-green-600 flex items-center">
                    <ArrowUpIcon className="mr-1 h-4 w-4" />
                    {crypto.change}%
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center">
                    <ArrowDownIcon className="mr-1 h-4 w-4" />
                    {Math.abs(crypto.change)}%
                  </span>
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cryptocurrency Market Overview</CardTitle>
          <CardDescription>Latest prices and 24h changes</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">24h Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cryptoData.map((crypto) => (
                <TableRow key={crypto.symbol}>
                  <TableCell className="font-medium">{crypto.name}</TableCell>
                  <TableCell>{crypto.symbol}</TableCell>
                  <TableCell className="text-right">
                    ${crypto.price.toFixed(2)}
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      crypto.change >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {crypto.change >= 0 ? "+" : ""}
                    {crypto.change}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
