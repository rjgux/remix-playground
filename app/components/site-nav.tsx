import { Link } from "@remix-run/react";

export default function SiteNav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/account" prefetch="intent">
        Account
      </Link>
      <Link to="/dashboard" prefetch="intent">
        Dashboard
      </Link>
    </nav>
  );
}
