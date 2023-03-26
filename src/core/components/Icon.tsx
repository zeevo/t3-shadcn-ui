import { Github, Home, Twitter, User } from "lucide-react";

const icons = {
  Home,
  Github,
  User,
  Twitter,
};

interface IconProps {
  value: "Home" | "Github" | "User" | "Twitter";
}

const Icon: React.FC<IconProps> = ({ value }) => {
  const Component = icons[value];
  return <Component size={20} />;
};

export default Icon;
