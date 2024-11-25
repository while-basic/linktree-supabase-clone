import { type LinkItem } from "@/types/link";

export const githubRepoName = "while-basic";

export const imageBaseUrl =
  process.env.NODE_ENV === "production" ? "" : `/${githubRepoName}`;
export const name = "@chriscelaya";
export const description = "Mechatronic Technologist";

export const socialLinks = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/christophercelaya/" },
  // { platform: "Twitter", url: "https://x.com/" },
  { platform: "Mail", url: "mailto:chris@chriscelaya.xyz" },
  // { platform: "Tiktok", url: "https://tiktok.com/@anthonysistilli" },
  {
    platform: "Youtube",
    url: "https://www.youtube.com/@christophercelaya",
  },
  // { platform: "Discord", url: "https://discord.gg/JNc6uPUqUU" },
  { platform: "Instagram", url: "https://www.instagram.com/chriscelaya/" },
  // Add the new GitHub link
  {
    platform: "GitHub",
    url: "https://github.com/while-basic",
  },
];

export const items: LinkItem[] = [
  {
    type: "youtube",
    title: "Latest Youtube Video",
    youtubeId: "",
  },
  { type: "category", title: "My Stuff" },

  {
    type: "link",
    title: "Buy me a coffee :)",
    url: "https://buymeacoffee.com/christophercelaya                ",
  },
];
