import { IconCloud, IconCloudProps } from "@/components/ui/icon-cloud";

const slugs = [
  "react",
  "react-native",
  "typescript",
  "javascript",
  "nextdotjs",
  "tailwindcss",
  "framer-motion",
  "html5",
  "css3",
  "zustand",
  "reactquery",
  "tanstackquery",
  "vite",
  "webpack",
  "swc",
  "jest",
  "testinglibrary",
  "cypress",
  "playwright",
  "storybook",
  "figma",
  "shadcnui",
  "git",
  "github",
  "githubactions",
  "vercel",
  "docker",
  "amazonaws",
];


export const MyIconCloud: React.FC<IconCloudProps> = ({ width, height }) => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <IconCloud width={width} height={height} images={images} />
    </div>
  );
};
