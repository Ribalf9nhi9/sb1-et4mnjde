import React from 'react';
import { LineChart, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <LineChart className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">TradePro Signals</span>
            </div>
            <p className="text-sm">
              Professional forex trading signals and mentoring services to help you succeed in the financial markets.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-500">Services</a></li>
              <li><a href="#performance" className="hover:text-blue-500">Performance</a></li>
              <li><a href="#mentoring" className="hover:text-blue-500">Mentoring</a></li>
              <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:support@tradepro.com" className="hover:text-blue-500">
                  support@tradepro.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>24/7 Chat Support</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} TradePro Signals. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Risk Warning: Trading forex carries a high level of risk and may not be suitable for all investors.
          </p>
        </div>
      </div>
    </footer>
  );
}