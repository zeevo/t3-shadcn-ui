import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { signIn, signOut, useSession } from "next-auth/react";
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

        <button
          className="btn-primary btn"
          onClick={() => {
            void signOut();
          }}
        >
          Sign out
        </button>
        <pre>
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      Not signed in <br />
      <button
        className="btn-primary btn"
        onClick={() => {
          void signIn();
        }}
      >
        <span className="font-normal">Sign in</span>
      </button>
    </div>
  );
};

export default SignIn;
