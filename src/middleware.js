import { NextResponse } from "next/server";

const isLoggedIn = true;

export function middleware(request) {
    // if (!isLoggedIn && request.url === "http://192.168.1.5:3000/home") {
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