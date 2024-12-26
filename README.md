<img src="./assets/icon.png" alt="Campus Hub" width="230" height="230"/>

# Campus Hub (Buy and Sell Books Among University Students)

Campus Hub is a mobile app that allows university students to **buy, sell, and discover books** within their campus community.

University books are often expensive, and Campus Hub bridges the gap by enabling juniors to buy second-hand books from seniors at reasonable prices.

This not only makes education more affordable but also promotes sustainability by reusing books, reducing waste, and indirectly contributing to saving trees.

With simplified book management, AI-powered features, and a seamless user experience, Campus Hub is the go-to platform for campus book trading.

<a href="https://play.google.com/store/apps/details?id=com.brijenmakwana.campushub&pcampaignid=web_share" target="_blank">
  <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="300"/>
</a>

## Watch the Demo Video

<a href="http://www.youtube.com/watch?feature=player_embedded&v=kcXzDxx9RU4" target="_blank">
  <img src="http://img.youtube.com/vi/kcXzDxx9RU4/0.jpg"
alt="Campus Hub YouTube Video" width="560" />
</a>

Click on the image to watch the video on YouTube.

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

### Getting Started

Welcome screen introducing Campus Hub and the app’s key features.

<img src="https://i.imgur.com/zOhl7y6.png" alt="screenshot 1"/>
<img src="https://i.imgur.com/5dbDuaI.png" alt="screenshot 2"/>

### Onboarding

Students can sign up using their university-specific domain to create a campus-specific book network.

<img src="https://i.imgur.com/TFaV3oD.png" alt="screenshot 3"/>

### Home / Marketplace

Browse available books and see listings from other students in your university.

<img src="https://i.imgur.com/zf3qTp4.png" alt="screenshot 4"/>

### Book Details

View detailed information about a book, including its condition, price, and remarks.

<img src="https://i.imgur.com/Kg5ITw7.png" alt="screenshot 5"/>

### Search Books

Search for the books you want to buy or sell, powered by Google Books.

<img src="https://i.imgur.com/p0yAXf1.png" alt="screenshot 6"/>

### Barcode Search

Quickly search for books by scanning their barcodes.

<img src="https://i.imgur.com/6BBHBvx.png" alt="screenshot 7"/>

### Search and List Books for Sale

Use the Google Books API to search and autofill book details when listing books for sale.

<img src="https://i.imgur.com/KYR7lgb.png" alt="screenshot 8"/>

### AI-Powered Price Suggestions

AI suggests buying or selling prices based on the book's condition and trends.

<img src="https://i.imgur.com/m7Jfnw3.png" alt="screenshot 9"/>

### Books Management

Manage your book listings, including editing details and removing items you no longer want to sell.

<img src="https://i.imgur.com/8NPVrCb.png" alt="screenshot 10"/>

### Currency Settings

Set your preferred currency for book listings and price suggestions.

<img src="https://i.imgur.com/ZoSeVMH.png" alt="screenshot 11"/>


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
