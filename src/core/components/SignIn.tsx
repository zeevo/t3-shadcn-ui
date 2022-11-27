import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { useSession, signIn, signOut } from "next-auth/react";
import GhostButton from "./Button";
import Separator from "./Separator";

const SignIn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: "0 0 auto",
            }}
          >
            <span>
              Signed in as{" "}
              <span style={{ fontWeight: "bold" }}> {session.user?.name} </span>
            </span>
          </div>
          <Separator orientation="horizontal" />
          <div>
            <p>
              <AvatarPrimitive.Root>
                <AvatarPrimitive.Image
                  src={session.user?.image as string}
                  alt="Github profile picture"
                />
              </AvatarPrimitive.Root>
            </p>
          </div>
        </div>

        <GhostButton onClick={() => signOut()}>Sign out</GhostButton>
        <pre>
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      Not signed in <br />
      <GhostButton fillWidth variant="contained" onClick={() => signIn()}>
        Sign in
      </GhostButton>
    </div>
  );
};

export default SignIn;
