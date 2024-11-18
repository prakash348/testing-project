import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  // console.log("running -----------");
  const jwtToken = cookies().get("jwtToken");
  if (!jwtToken) return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog", "/dashboard", "/"],
};
