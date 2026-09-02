// app/components/Breadcrumbs.js
//
// Visible breadcrumb trail plus the matching BreadcrumbList markup. Deep pages
// previously offered only a "back" link, so neither visitors nor search engines
// could see where a page sat in the site.

import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import "./breadcrumbs.css";

export default function Breadcrumbs({ items }) {
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href}>
                {isLast ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <>
                    <Link href={item.href}>{item.name}</Link>
                    <span className="crumbs-sep" aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
