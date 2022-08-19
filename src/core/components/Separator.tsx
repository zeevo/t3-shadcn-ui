import * as Separator from "@radix-ui/react-separator";
import styled from "../../theme";

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: "$uiHovered",
  height: "15px",
  width: "1px",
  marginRight: "15px",
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
});

export default StyledSeparator;
