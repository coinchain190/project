"use client";

import { useEffect } from "react";
import { createUserIfNotExists } from "@/app/api/users/actions";
import { ArrowRight, Clock, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrendingCoinsSlider from "@/components/trading-coin-slider";
import Header from "@/components/header";

const trendingCoins = [
  { name: "Bitcoin", symbol: "BTC", price: 39876.54, change: 2.5 },
  { name: "Ethereum", symbol: "ETH", price: 2234.12, change: -1.2 },
  { name: "Cardano", symbol: "ADA", price: 1.23, change: 5.7 },
  { name: "Dogecoin", symbol: "DOGE", price: 0.087, change: 10.3 },
  { name: "Shiba", symbol: "SHIB", price: 0.001, change: 0.8 },
  { name: "Solana", symbol: "SOL", price: 34.56, change: 0.8 },
  { name: "Litecoin", symbol: "LTC", price: 123.45, change: -0.5 },
];

export default function Home() {
  useEffect(() => {
    createUserIfNotExists();
  }, []);
  return (
    <>
      <Header />
      <main className="max-w-7xl  mx-auto px-4 py-4 space-y-16">
        <TrendingCoinsSlider trendingCoins={trendingCoins} />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 overflow-hidden">
            <div className="relative h-full">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Featured article"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <div className="flex items-center space-x-2 text-sm mb-2">
                  <span className="bg-primary text-secondary px-2 py-1 rounded">
                    Markets
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> 2 hours ago
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Elon Musk Post About &apos;Executed&&lsquo; Squirrel Drives
                  Meme Coin PNUT to $130 Million Market Cap
                </h1>
                <p className="text-gray-200">
                  The latest tweet from Tesla CEO causes another crypto market
                  stir...
                </p>
                <Button variant="secondary" className="mt-4">
                  Read More
                </Button>
              </div>
            </div>
          </Card>

          <Card className="bg-card rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-secondary-foreground">
                Most Read
              </h2>
              <Button variant="link" className="text-blue-400">
                See all
              </Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <Link href="#" key={item} className="block group">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl font-bold text-secondary-foreground group-hover:text-blue-500 transition-colors">
                      0{item}
                    </span>
                    <div>
                      <h3 className="text-secondary-foreground group-hover:text-blue-400 font-medium transition-colors">
                        Bitcoin Price Surges Past $40K, Setting New Year High
                      </h3>
                      <p className="text-gray-400 text-sm">5 min read</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </div>

        <Tabs defaultValue="news" className="mb-12">
          <TabsList className="mb-4">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="news">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card
                  key={item}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Article thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <span>Markets</span>
                      <span>•</span>
                      <span>3 min read</span>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      $750 Million Crypto Investment in Focus as Bitcoin Breaks
                      New Records
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Latest developments in the cryptocurrency market as
                      institutional investors...
                    </p>
                    <Button variant="link" className="mt-2 p-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="analysis">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Similar structure to news, but with analysis content */}
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card
                  key={item}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 group">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Video thumbnail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 hover:text-blue-600 transition-colors">
                      How to Protect Against Malicious Software
                    </h3>
                    <p className="text-sm text-gray-600">
                      Security tips for cryptocurrency users
                    </p>
                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>15:23</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Learn Crypto</h2>
            <Button variant="outline">See more guides</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Guide thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 hover:text-blue-600 transition-colors">
                    What is TRON (TRX) and How Does It Work?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    A comprehensive guide to understanding the TRON
                    blockchain...
                  </p>
                  <Button variant="outline" className="w-full">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="bg-card rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Join our newsletter</h2>
          <p className=" mb-6 max-w-md mx-auto">
            Stay up to date with the latest cryptocurrency news, insights, and
            analysis.
          </p>
          <div className="flex max-w-md mx-auto">
            <Input placeholder="Enter your email" type="email" className="" />
            <Button className="0">Subscribe</Button>
          </div>
        </Card>
      </main>

      <footer className=" text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Rankings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Learn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Guidelines
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} CryptoNews. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
