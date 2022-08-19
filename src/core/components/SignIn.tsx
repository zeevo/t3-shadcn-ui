import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { useSession, signIn, signOut } from "next-auth/react";
import styled from "../../theme";
import GhostButton from "./Button";
import Separator from "./Separator";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 45,
  height: 45,
  borderRadius: "100%",
  backgroundColor: "$bg",
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  // color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const Bold = styled("span", {
  fontWeight: "bold",
});

const Flex = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const FlexElement = styled("div", {
  flex: "0 0 auto",
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

const SignIn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Flex>
          <FlexElement>
            <span>
              Signed in as <Bold> {session.user?.name} </Bold>
            </span>
          </FlexElement>
          <Separator orientation="horizontal" />
          <div>
            <p>
              <Avatar>
                <AvatarImage
                  src={session.user?.image as string}
                  alt="Github profile picture"
                />
              </Avatar>
            </p>
          </div>
        </Flex>

        <GhostButton fillWidth variant="contained" onClick={() => signOut()}>
          Sign out
        </GhostButton>
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
