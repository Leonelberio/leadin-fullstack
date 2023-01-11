// middleware.ts
import { NextResponse } from 'next/server'
import { useSelector } from 'react-redux';


const ISSERVER = typeof window === "undefined";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
if(!ISSERVER){

  // const { isAuthenticated, userInfo } = useSelector(
  //   (state) => state.auth
  // );
const accessToken = localStorage.getItem("token")
   
  //  if (request.nextUrl.pathname.startsWith('/browse/category')) {  
    if(accessToken !== null) {

      //  NextResponse.redirect('/login')
    return NextResponse.rewrite(new URL('/login', request.url));

    }
          
      
    }
// }


}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/browse/:category*',
}