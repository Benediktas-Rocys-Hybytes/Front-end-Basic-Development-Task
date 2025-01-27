import ReactGA from "react-ga4";

// Initialise Google Analytics
export const initializeAnalytics = () => {
    ReactGA.initialize("G-CWEWLKLCPX"); 
};

// Log a pageview
export const logPageView = (url) => {
    ReactGA.send({ hitType: "pageview", page: url });
};
