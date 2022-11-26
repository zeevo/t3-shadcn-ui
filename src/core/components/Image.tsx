import NextImage from "next/image";

const BaseImage = styled(NextImage, {
  objectFit: "contain",
  width: "auto !important",
  position: "relative !important",
  height: "100% !important",
});

const ImgContainer = styled("div", {
  "& > span": {
    position: "unset !important",
    height: "100%",
  },
});

const ImgWrapper = styled("img", {
  maxWidth: "100%",
});

const Image = ({ variant, children, ...props }: any) => {
  if (!variant) {
    variant = "normal";
  }
  switch (variant) {
    case "next":
      return (
        <ImgContainer>
          <BaseImage {...props}>{children}</BaseImage>
        </ImgContainer>
      );
    // "normal"
    default:
      return <ImgWrapper {...props}>{children}</ImgWrapper>;
  }
};

export default Image;
