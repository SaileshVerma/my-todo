import {jwtDecode} from "jwt-decode";

export default function isTokenExpired(token: string): Boolean {
    const decodeToken = jwtDecode(token);

    if ((decodeToken.exp ?? 1) < (Date.now() / 1000)) {
        return true;
    }

    return false;
}