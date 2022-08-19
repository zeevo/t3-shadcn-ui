import { FunctionComponent } from "react";
import getConfig from "../../core/lib/config";
import { getProviders, signIn } from "next-auth/react";
import GhostButton from "../../core/components/Button";
import { useRouter } from "next/router";

interface SignInProps {
  providers: {
    name: string;
    id: string;
  }[];
}

const SignIn: FunctionComponent<SignInProps> = ({ providers }) => {
  const {
    query: { callbackUrl },
  } = useRouter();

  return (
    <div>
      <h1>Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <GhostButton
            variant="contained"
            onClick={() =>
              signIn(provider.id, { callbackUrl: callbackUrl as string })
            }
            fillWidth
          >
            Sign in with {provider.name}
          </GhostButton>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const config = getConfig();

  return {
    props: {
      providers: config.providers,
      config: getConfig(),
    },
  };
};

export default SignIn;
