"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { ModeToggle } from "./toggle-mode";

export default function Header() {
  const { user } = useUser();

  console.log(user?.emailAddresses[0].emailAddress);

  return (
    <header className="bg-background border-b">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              Blogchain
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Button asChild>
                  <Link
                    href="/dashboard"
                    className="text-sm font-semibold text-muted-foreground"
                  >
                    Dashboard
                  </Link>
                </Button>
                <ModeToggle />
                <UserButton />
              </div>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/sign-in" className="text-sm font-semibold">
                    Sign In
                  </Link>
                </Button>
                <Button asChild>
                  <Link
                    href="/sign-up"
                    className="text-sm font-semibold text-muted-foreground"
                  >
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
