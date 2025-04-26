# 📦 vins-currency-cons

[![npm version](https://img.shields.io/npm/v/vy-currency-cons.svg)](https://www.npmjs.com/package/vy-currency-cons)  
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


> A lightweight Node.js package to fetch the latest currency exchange conversion values easily.

---

## ✨ Features

- 🌍 Real-time currency conversion  
- ⚡ Promise-based, async API  
- 🔥 Minimal dependencies, fast and reliable  

---

## 📥 Installation

```bash
npm install vins-currency-cons
```
```bash
# or
yarn add vins-currency-cons
```

## 🚀 Usage
```
const { getLatestExchange } = require('vins-currency-cons');

(async () => {
  try {
    // Convert 100 USD to INR
    const converted = await getLatestExchange('INR', 'USD', 100);
    console.log(`100 USD = ₹${converted}`);
  } catch (err) {
    console.error('Conversion error:', err.message);
  }
})();

```


## 📚 API Reference

getLatestExchange(to, from, units) → Promise<Number>
Fetches the latest exchange rate and converts the given amount.

Parameter	Type	Description
to-	String	ISO currency code to convert to (e.g. INR)
from-	String	ISO currency code to convert from (e.g. USD)
units	Number	Amount to be converted

Returns:
A Promise that resolves to a Number representing the converted amount.


## 🛠 Example
```bash
const { getLatestExchange } = require('vins-currency-cons');

getLatestExchange('EUR', 'GBP', 50)
  .then(amount => {
    console.log(`50 GBP = €${amount}`);
  })
  .catch(err => {
    console.error(err);
  });
```


## 📝 Error Handling
The function will reject the promise with an Error in cases such as:

Invalid or unsupported currency codes

Network/API failures

Non-numeric units parameter

Example:
```
getLatestExchange('XYZ', 'USD', 100)
  .catch(err => {
    // Error: Unsupported currency code: XYZ
    console.error(err.message);
  });

```


## 🌍 Supported Currencies
Supports all major ISO currency codes, including but not limited to:
USD, INR, EUR, GBP, JPY, CAD, AUD, CHF, CNY, HKD, SGD, etc.

## 👨‍💻 Author
Vinay Yadav
GitHub: @Vinay8git
Email: vinayyadav.devs@gmail.com

## 📄 License
This project is licensed under the MIT License.
