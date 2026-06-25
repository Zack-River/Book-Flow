import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export async function TopNavBar() {
  const { userId } = await auth();

  return (
    <nav className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm fixed top-0 w-full z-50 animate-slide-down">
      <div className="flex justify-between items-center h-16 px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex items-center gap-gutter">
          <Link href="/" className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">
            BookFlow
          </Link>
          <div className="hidden md:flex gap-md ml-xl">
            <Link href="#features" className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200">
              Features
            </Link>
            <Link href="/search" className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200">
              Providers
            </Link>
            <Link href="#pricing" className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200">
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          {!userId ? (
            <>
              <SignInButton mode="modal">
                <button className="font-body-md text-body-md text-on-surface-variant hover:text-primary px-4 py-2 transition-colors duration-200 cursor-pointer">
                  Log In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-primary text-on-primary font-body-md text-body-md px-4 py-2 rounded-lg hover:bg-[#003ea8] transition-colors duration-200 active:scale-95 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="font-body-md text-body-md text-on-surface-variant hover:text-primary px-4 py-2 transition-colors duration-200">
                Dashboard
              </Link>
              <UserButton />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
