import * as Separator from "@radix-ui/react-separator";
import styled from "../../theme";

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: "$text",
  marginRight: "15px",
  "&[data-orientation=horizontal]": { height: "1px", width: "100%" },
  "&[data-orientation=vertical]": { height: "15px", width: "1px" },
});

export default StyledSeparator;
