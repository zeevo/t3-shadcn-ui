import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>t3-shadcn-ui</title>
        <meta name="description" content="t3-shadcn-ui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

        <main className="flex flex-1 flex-col items-center">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
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
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl">
                {hello.data ? hello.data.greeting : "Loading tRPC query..."}
              </p>
              <AuthShowcase />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <Button
        size="lg"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
};
