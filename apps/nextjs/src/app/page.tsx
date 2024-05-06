// /* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

export const runtime = "edge";

export default function HomePage() {
  const test = { someValue: 1 };
  useEffect(() => {
    if (test.someValue === 1) alert("1");
    eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <h1>Test</h1>;
}
