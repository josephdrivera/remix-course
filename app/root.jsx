import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import MainNavigation from "./components/MainNavigation.jsx";
import styles from "./styles/main.css";

// Combine both link arrays into a single export
export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
      <html lang="en">
      <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <Meta/>
          <Links/> {/* This will now include both sets of links */}
      </head>
      <header>
          <MainNavigation/>
      </header>
      <body>
      <Outlet/>
      <ScrollRestoration/>
      <Scripts/>
      <LiveReload/>
      </body>
      </html>
  );
}
