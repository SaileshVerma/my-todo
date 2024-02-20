import { Children } from "react";
import LoginLayout from "./layout";

export default function LoginPage() {
  return (
    <div>
      <div className="flex h-1/2">Name</div>
      <div>Email</div>
      <div>Password</div>
    </div>
  );
}

// LoginPage.getLayout = (page: { children: React.ReactNode }) => {
//   return <LoginLayout children={children}></LoginLayout>;
// };
