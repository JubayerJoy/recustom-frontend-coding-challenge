import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    domain?: string;
  };

  if (!body.domain) {
    return new Response("Missing domain", { status: 400 });
  }

  // Because of a current bug with NextJS 14, we have to revalidate
  // the whole slug, not just the specific domain page
  // See https://github.com/vercel/next.js/issues/59825
  // TODO: Make this only invalidate the org domain page
  revalidatePath(`/[domain]`, "layout");
  revalidatePath(`/[domain]`, "page");

  return new Response("OK", { status: 200 });
}
