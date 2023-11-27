import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import Link from "next/link";

import { Icons } from "./_components/icons";
import { ModeToggle } from "./_components/mode-toggle";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { Button } from "./_components/ui/button";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="container flex h-14 items-center justify-end gap-2">
        <ModeToggle />
        <Button
          asChild
          variant="ghost"
          className="h-9 w-9 fill-current px-0 py-2"
        >
          <a href="https://github.com/zeevo/t3-shadcn-ui">
            <Icons.gitHub className="h-4 w-4" />
          </a>
        </Button>
      </nav>
      <main className="flex flex-1 flex-col items-center gap-6">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          t3-shadcn-ui
        </h1>
        <div className="flex gap-2">
          <a href="https://create.t3.gg/">
            <Avatar>
              <AvatarImage
                className="p-2 dark:hidden"
                src="https://create.t3.gg/images/t3-dark.svg"
              ></AvatarImage>
              <AvatarImage
                className="light:hidden p-2"
                src="https://create.t3.gg/images/t3-light.svg"
              ></AvatarImage>
            </Avatar>
          </a>

          <a href="https://ui.shadcn.com/">
            <Avatar>
              <AvatarImage src="https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/android-chrome-512x512.png"></AvatarImage>
            </Avatar>
          </a>
        </div>
        <div className="flex w-full max-w-lg flex-col gap-2 rounded border p-2">
          <p className="text-2xl">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>

          <p className="text-center text-2xl">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
              {session ? "Sign out" : "Sign in"}
            </Link>
          </Button>

          <CrudShowcase />
        </div>
      </main>
    </div>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className=" flex-col items-center justify-center">
      {latestPost ? (
        <p className="text-center">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
