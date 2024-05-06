/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

export const runtime = "edge";

export default function HomePage() {
  const test = { someValue: 1 };
  useEffect(() => {
    if (test.someValue === 1) alert("1");
  }, []);
  return <h1>Test</h1>;
}
