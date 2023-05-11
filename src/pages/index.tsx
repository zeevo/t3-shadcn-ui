import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

import { Layout } from "@/components/layout";
import { api } from "@/utils/api";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { toast } = useToast();

  return (
    <Layout>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Template by zeevo/next-starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">Introduction</div>
        </div>
        <div className="space-y-2">
          <h2 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Next Starter
          </h2>
          <p className="text-lg text-muted-foreground">
            This template combines T3 App and shadcn UI
          </p>
        </div>
        <Separator className="my-4 md:my-6" />
        <h2 className="my-4 scroll-m-20 text-2xl font-bold tracking-tight">
          Authentication
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>tRPC</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl ">
                {hello.data ? hello.data.greeting : "Loading tRPC query..."}
              </p>
              <AuthShowcase />
            </div>
          </CardContent>
        </Card>
        <Separator className="my-4 md:my-6" />
        <h2 className="my-4 scroll-m-20 text-2xl font-bold tracking-tight">
          Toasts
        </h2>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          Click me
        </Button>
      </div>
    </Layout>
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
        variant="outline"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
};
