import {NextRequest, NextResponse} from "next/server";

export default function middleware(req: NextRequest) {
    console.log("###################################88888888888")
    return NextResponse.redirect(new URL('/login', req.url));

}
export const config = {
    matcher: '/about/:path*',
}