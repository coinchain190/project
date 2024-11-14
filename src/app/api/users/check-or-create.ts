// app/api/users/check-or-create.ts
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { createUserIfNotExists } from "./actions";

export async function GET(request: NextRequest) {
  const { userId } = getAuth(request);

  if (!userId) {
    return NextResponse.json(
      { error: "Usuário não autenticado" },
      { status: 401 }
    );
  }

  await createUserIfNotExists(userId);

  return NextResponse.json({
    message: "Usuário verificado/criado com sucesso",
  });
}
