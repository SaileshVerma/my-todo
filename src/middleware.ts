import {NextResponse, NextRequest} from 'next/server'
import {cookies} from 'next/headers';
import isTokenExpired from './app/helper/tokenHelper';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const token = cookies().get('token');

    if (isTokenExpired(token?.value ?? '')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/about']
}