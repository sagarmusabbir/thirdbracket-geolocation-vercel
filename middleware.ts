import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//declare & store country
const us = "US",
  bd = "BD",
  gb = "GB",
  ae = "AE";

export const config = {
  matcher: "/",
};

export default function middleware(req: NextRequest) {
  // const country = req.geo?.country || "GB";

  const country = (req.geo && req.geo.country) || "GB";

  // Specify the correct pathname
  if (country === bd) {
    req.nextUrl.pathname = "/bd";
  } else if (country === us) {
    req.nextUrl.pathname = `/us`;
  } else if (country === ae) {
    req.nextUrl.pathname = "/ae";
  } else {
    req.nextUrl.pathname = "/gb";
  }
  // Rewrite to URL
  // return NextResponse.rewrite(req.nextUrl);
  return NextResponse.redirect(req.nextUrl);

  // const country = req.geo?.country;

  // if (req.nextUrl.pathname === "/bd") {
  //   return NextResponse.next();
  // }

  //   if (country === us) {
  //     return NextResponse.redirect("/us");
  //   }

  // if (country === bd) {
  //   return NextResponse.redirect("/bd");
  // }

  //   if (country === ae) {
  //     return NextResponse.redirect("/ae");
  //   }

  //   if (country === gb) {
  //     return NextResponse.redirect("/gb");
  //   }
}
