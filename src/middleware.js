import { NextResponse } from "next/server";

const isLoggedIn = true;

export function middleware(request) {
    console.log(request)
    // if (!isLoggedIn && request.url === "http://localhost:3000/home") {
    //     return NextResponse.redirect(new URL("/register", request.url))
    // }
    if (isLoggedIn) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
    matcher: [
        '/home', '/shirts', '/pants', '/productDetail', '/carts',
        '/payment', 
    ],
}