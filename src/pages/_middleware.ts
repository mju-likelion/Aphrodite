import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import _ from "lodash";

export function middleware(request: NextRequest) {
  // create an instance of the class to access the public methods. This uses `next()`,
  // you could use `redirect()` or `rewrite()` as well
  const response = NextResponse.next();
  const targetPage: string | undefined = request.page.name;

  const cookie: string | undefined = request.cookies.jwt;

  if (targetPage !== "/" && !_.isNil(request.page.name) && !cookie) {
    return NextResponse.redirect("/");
  }

  return response;
}
