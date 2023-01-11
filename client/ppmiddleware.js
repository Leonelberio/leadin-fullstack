import { NextRequest, NextResponse } from "next/server";


const ISSERVER = typeof window !== "undefined";


export const middleware =  (request) => {
  if (!ISSERVER) {
    const accessToken = localStorage.getItem("token");
    if (accessToken === null) {
    if (request.nextUrl.pathname.startsWith("/classes")) {
      
        console.log("Non connecte " + accessToken);
        return NextResponse.rewrite(new URL("/login", request.url));
      }

       if (request.nextUrl.pathname.startsWith("/login")) {
        if (accessToken !== null){
        return NextResponse.redirect(new URL("/", request.url));}
    }


    }

  //   if (request.nextUrl.pathname.startsWith("/classes")) {
  //     if (accessToken) {
  //       console.log("connecte " + accessToken + " 222");
  //       return NextResponse.rewrite(new URL("/classes/id", request.url));
  //     }
  //   }


  }}

// }

export const config = {
  matcher: ["/classes/:id*", "/user/:id*", "/login"]
}
