import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const us = "US";
const bd = "BD";
const gb = "GB";
const ae = "AE";

export default function middleware(req: NextRequest) {
  const country = req.geo?.country;

  if (country === us) {
    return NextResponse.redirect("./us");
  } else if (country === bd) {
    return NextResponse.redirect("./bd");
  } else if (country === ae) {
    return NextResponse.redirect("./ae");
  } else if (country === gb) {
    return NextResponse.redirect("./gb");
  }
}