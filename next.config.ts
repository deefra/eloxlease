import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep eloxlease.nl's trailing-slash pathnames (/silences02/, /leasevoorstel/, …).
  trailingSlash: true,
};

export default nextConfig;
