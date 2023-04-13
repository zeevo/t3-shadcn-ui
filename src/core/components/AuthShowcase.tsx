import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/core/utils/api";

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {sessionData && (
        <p className="text-center text-xl font-bold text-base-content">
          <span>Logged in as {sessionData.user?.name}</span>
          <span> - {secretMessage}</span>
        </p>
      )}
      <button
        className="btn-primary btn w-full"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export default AuthShowcase;
