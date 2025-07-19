# PriceChain

PriceChain is a modern, responsive React application built with Vite that serves as a cryptocurrency marketplace. It allows users to track real-time prices, view detailed information, and analyze historical trends for various cryptocurrencies.

## Features

* **Real-time Cryptocurrency Tracking:** Stay updated with live prices, 24-hour changes, and market capitalization for a wide range of cryptocurrencies.
* **Detailed Coin Information:** Dive deep into individual coin pages to access current price, market rank, 24H high/low, and a brief description.
* **Interactive Price Charts:** Visualize historical price movements over 7, 30, or 90 days using interactive line charts, powered by Google Charts.
* **Multi-Currency Support:** View cryptocurrency prices in USD, EUR, or INR.
* **Intuitive Search:** Easily search for cryptocurrencies by name using the search bar on the homepage with type-ahead suggestions.
* **Responsive Design:** Optimized for a seamless user experience across various devices and screen sizes.
* **Navigation Bar:** Includes links to Home, Features, Blog, and API sections, along with a currency selector and a Sign Up button.
* **Footer:** Provides quick links, resources, and social media links.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A fast build tool for modern web projects.
* **React Router DOM:** For declarative routing in React applications.
* **React Google Charts:** A React wrapper for Google Charts to display interactive data visualizations.
* **CoinGecko API:** Used to fetch real-time and historical cryptocurrency data.
* **Font Awesome:** For various icons used throughout the application.
* **CSS:** For styling and responsive design.

## Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (LTS version recommended)
* npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Eklavvyaaaaa/PriceChain.git](https://github.com/Eklavvyaaaaa/PriceChain.git)
    cd PriceChain
    ```
    (Note: The `homepage` field in `package.json` suggests this is the repository.)

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the Vite development server, usually at `http://localhost:5173`.

4.  **Open your browser** and navigate to the displayed URL.

PriceChain/
├── public/
├── src/
│   ├── assets/             # Images and other static assets
│   ├── components/
│   │   ├── Footer/         # Footer component and styles
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── LineChart/      # Google Line Chart component
│   │   │   └── LineChart.jsx
│   │   └── NavBar/         # Navigation bar component and styles
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   ├── context/
│   │   └── CoinContext.jsx # React Context for coin data and currency
│   ├── pages/
│   │   ├── Api/            # API/Developers page
│   │   │   ├── Api.jsx
│   │   │   └── Api.css
│   │   ├── Blog/           # Blog page
│   │   │   ├── Blog.jsx
│   │   │   └── Blog.css
│   │   ├── Coin/           # Individual coin detail page
│   │   │   ├── Coin.jsx
│   │   │   └── Coin.css
│   │   └── Home/           # Homepage component and styles
│   │       ├── Home.jsx
│   │       └── Home.css
│   ├── App.jsx             # Main application component and routing
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point of the React application
├── .gitignore              # Specifies intentionally untracked files
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency tree lock file
├── README.md               # Project README (this file)
└── vite.config.js          # Vite configuration for base path


## Deployment

This project uses `gh-pages` for deployment to GitHub Pages.

1.  **Build the project:**
    ```bash
    npm run build
    # or
    yarn build
    ```

2.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    # or
    yarn deploy
    ```
    The `homepage` field in `package.json` is configured for deployment to `https://Eklavvyaaaaa.github.io/PriceChain/`.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License.

## Contact

Your Name/Organization Name - Eklavya Puri
Project Link: [https://github.com/Eklavvyaaaaa/PriceChain](https://github.com/Eklavvyaaaaa/PriceChain)
