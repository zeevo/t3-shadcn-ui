import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import Button from "./Button";

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div>
      <h3>
        {sessionData && <span>Logged in as {sessionData?.user?.name}</span>}
      </h3>
      {data && (
        <div className="mt-4 mb-4">
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </div>
      )}

      <Button
        variant="contained"
        className="p-3"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
};

export default AuthShowcase;
