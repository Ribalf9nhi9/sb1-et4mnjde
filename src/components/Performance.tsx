import React from 'react';
import { LineChart, ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

export default function Performance() {
  const trades = [
    { pair: 'EUR/USD', profit: 120, pips: 45, date: '2024-03-15' },
    { pair: 'GBP/JPY', profit: -30, pips: -15, date: '2024-03-14' },
    { pair: 'USD/CAD', profit: 85, pips: 32, date: '2024-03-14' },
    { pair: 'AUD/USD', profit: 150, pips: 58, date: '2024-03-13' },
    { pair: 'EUR/GBP', profit: 95, pips: 38, date: '2024-03-13' },
  ];

  return (
    <section id="performance" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Trading Performance</h2>
          <p className="text-xl text-blue-200">Track record of consistent profits and reliable signals</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-lg">
              <h4 className="text-sm text-blue-200 mb-1">Win Rate</h4>
              <p className="text-2xl font-bold text-blue-400">82%</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-lg">
              <h4 className="text-sm text-blue-200 mb-1">Monthly Profit</h4>
              <p className="text-2xl font-bold text-blue-400">+1,250 pips</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-lg">
              <h4 className="text-sm text-blue-200 mb-1">Average Trade</h4>
              <p className="text-2xl font-bold text-blue-400">+35 pips</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-lg">
              <h4 className="text-sm text-blue-200 mb-1">Active Members</h4>
              <p className="text-2xl font-bold text-blue-400">500+</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-800">
                  <th className="text-left py-3 px-4 text-blue-200">Currency Pair</th>
                  <th className="text-left py-3 px-4 text-blue-200">Profit/Loss</th>
                  <th className="text-left py-3 px-4 text-blue-200">Pips</th>
                  <th className="text-left py-3 px-4 text-blue-200">Date</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade, index) => (
                  <tr key={index} className="border-b border-blue-800/50 hover:bg-white/5">
                    <td className="py-3 px-4 flex items-center text-white">
                      <LineChart className="h-5 w-5 mr-2 text-blue-400" />
                      {trade.pair}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`flex items-center ${trade.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.profit > 0 ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                        ${Math.abs(trade.profit)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={trade.pips > 0 ? 'text-green-400' : 'text-red-400'}>
                        {trade.pips > 0 ? '+' : ''}{trade.pips}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-blue-200">{trade.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}