<img src="./assets/icon.png" alt="Campus Hub" width="230" height="230"/>

# Campus Hub (Buy and Sell Books Among University Students)

Campus Hub is a mobile app that allows university students to **buy, sell, and discover books** within their campus community.

University books are often expensive, and Campus Hub bridges the gap by enabling juniors to buy second-hand books from seniors at reasonable prices.

This not only makes education more affordable but also promotes sustainability by reusing books, reducing waste, and indirectly contributing to saving trees.

With simplified book management, AI-powered features, and a seamless user experience, Campus Hub is the go-to platform for campus book trading.

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
    <img src="https://i.imgur.com/1DXYOGI.jpeg" alt="screenshot 1" width="250"/>
    <img src="https://i.imgur.com/OoKJ9Vz.jpeg" alt="screenshot 2" width="250"/>
    <img src="https://i.imgur.com/8e29hoP.jpeg" alt="screenshot 3" width="250"/>
    <img src="https://i.imgur.com/TPlB0UN.jpeg" alt="screenshot 4" width="250"/>
    <img src="https://i.imgur.com/v3l1p6O.jpeg" alt="screenshot 5" width="250"/>
    <img src="https://i.imgur.com/JpO4nLz.jpeg" alt="screenshot 6" width="250"/>
    <img src="https://i.imgur.com/zwLWqNi.jpeg" alt="screenshot 7" width="250"/>
    <img src="https://i.imgur.com/amjQW84.jpeg" alt="screenshot 8" width="250"/>
    <img src="https://i.imgur.com/KFTU3fs.jpeg" alt="screenshot 9" width="250"/>
    <img src="https://i.imgur.com/8jDM2om.jpeg" alt="screenshot 10" width="250"/>
    <img src="https://i.imgur.com/WANo9kU.jpeg" alt="screenshot 11" width="250"/>
    <img src="https://i.imgur.com/oZWwFJn.jpeg" alt="screenshot 12" width="250"/>
    <img src="https://i.imgur.com/dBLiCjC.jpeg" alt="screenshot 13" width="250"/>
    <img src="https://i.imgur.com/qfk3lFs.jpeg" alt="screenshot 14" width="250"/>
    <img src="https://i.imgur.com/0tHfVER.jpeg" alt="screenshot 15" width="250"/>
    <img src="https://i.imgur.com/pTzBzhq.jpeg" alt="screenshot 16" width="250"/>
    <img src="https://i.imgur.com/NtcS2qz.jpeg" alt="screenshot 17" width="250"/>
    <img src="https://i.imgur.com/zJTyAO3.jpeg" alt="screenshot 18" width="250"/>
    <img src="https://i.imgur.com/1GMcjo1.jpeg" alt="screenshot 19" width="250"/>
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
- **Zustand** for state management, including currency settings
