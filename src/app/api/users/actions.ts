"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function createUserIfNotExists(userId: string) {
  const user = await currentUser();
  if (!user) return null;
  const email = user?.emailAddresses[0].emailAddress || null;

  const existingUser = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        id: userId,
        emailAddress: email ?? "",
        firstName: user?.firstName ?? "",
        lastName: user?.lastName ?? "",
      },
    });
  }

  return existingUser;
}
