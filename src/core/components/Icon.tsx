import {
  Code,
  Github,
  Home,
  Key,
  Network,
  Twitter,
  Type,
  User,
  SunMoon,
} from "lucide-react";

const icons = {
  Home,
  Github,
  User,
  Twitter,
  Key,
  Type,
  Code,
  Network,
  SunMoon,
};

interface IconProps {
  value:
    | "Code"
    | "Github"
    | "Home"
    | "Key"
    | "Network"
    | "Twitter"
    | "Type"
    | "User"
    | "SunMoon";
}

const Icon: React.FC<IconProps> = ({ value }) => {
  const Component = icons[value];
  return <Component size={20} />;
};

export default Icon;
