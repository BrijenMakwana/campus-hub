<img src="./assets/icon.png" alt="Campus Hub" width="230" height="230"/>

# Campus Hub (Buy and Sell Books Among University Students)

Campus Hub is a mobile app that allows university students to **buy, sell, and discover books** within their campus community. Simplified book management, AI-powered features, and a seamless user experience make Campus Hub the go-to platform for campus book trading.

<a href="https://play.google.com/store/apps/details?id=com.brijenmakwana.campushub&pcampaignid=web_share" target="_blank">
  <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="300"/>
</a>

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Database Schema](#database-schema)
- [Built With](#built-with)

## Overview

### About the App

- **Platform**: Mobile app built with `React Native` and `Expo`.
- **Functionality**:
  - Students can **buy, sell, and wishlist books** within their university.
  - Integration with **Google Books API** simplifies book details.
  - **AI-powered price suggestions** help determine fair buying or selling prices.
  - Users can search for books, view available listings, and directly connect with other students.
  - Quickly search for books by scanning their barcodes.

### Key Features

- **University-Exclusive Access**:
  - Students register and log in using their **university domain email** for a secure and campus-specific environment.

- **Simplified Book Listings**:
  - Use the **Google Books API** to search and autofill book details when listing books for sale.
  - Students can list books by adding the price, book condition (e.g., good, used, worn), and any remarks.
  - The feature supports multiple currency conversions, allowing students to list books in their preferred currency.
  - Students can **edit** their book listings, including the price, condition, and remarks, at any time.
  - Students can **delete** their book listings if they no longer wish to sell the book.

- **AI-Powered Pricing**:
  - AI suggests buying or selling prices based on the book's condition and trends.

- **Wishlist Management**:
  - Save books you want to buy in a **wishlist** for easy tracking.

- **Search and Connect**:
  - Search for books and view details, including:
    - Students' information
    - Book price and condition
    - Direct contact options
  - Scan book barcodes for quick and accurate searches.


## Screenshots

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
<img src="https://i.imgur.com/Gdc2dCi.png" alt="screenshot 1" width="250"/>
<img src="https://i.imgur.com/jXtiGpT.png" alt="screenshot 2" width="250"/>
<img src="https://i.imgur.com/XPxCWpE.png" alt="screenshot 3" width="250"/>
<img src="https://i.imgur.com/Cvh0kMU.png" alt="screenshot 4" width="250"/>
<img src="https://i.imgur.com/YwtWAZS.png" alt="screenshot 5" width="250"/>
<img src="https://i.imgur.com/GWEbjQs.png" alt="screenshot 6" width="250"/>
<img src="https://i.imgur.com/u3pl57t.png" alt="screenshot 7" width="250"/>
<img src="https://i.imgur.com/JMH2Gvv.png" alt="screenshot 8" width="250"/>
</div>

## Database Schema
<img src="https://i.imgur.com/hQ3n0Rs.png" alt="database schema"/>


## Built With

- **React Native** (Expo)
- **TypeScript**
- **Google Books API** for book search and details
- **Gemini AI** (Google Generative AI) for price suggestions
- **Supabase** for backend and authentication
- **Expo Router** for seamless screen navigation
- **TanStack Query** for efficient data fetching and caching
- **Expo-Camera** for quick book searches via barcodes
- **React Hook Form** for form handling and validation
