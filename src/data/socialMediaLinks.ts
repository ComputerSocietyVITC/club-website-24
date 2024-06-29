interface SocialMediaLink {
    platform: string;
    url: string;
    icon: string;
}

const socialMediaLinks: SocialMediaLink[] = [
    {
        platform: "Instagram",
        url: "./assets/socialmedia/instagram.webp",
        icon: "/assets/socialmedia/instagram.webp",
    },
    {
        platform: "GitHub",
        url: "https://github.com/ComputerSocietyVITC",
        icon: "/assets/socialmedia/github.webp",
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/ieee-computer-society-vit-chennai/",
        icon: "/assets/socialmedia/linkedin.webp",
    },
    {
        platform: "Discord",
        url: "https://discord.gg/6vkY3kcZnE",
        icon: "/assets/socialmedia/discord.webp",
    },
    {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCOgwDinZGau4rwv3swAe-nQ",
        icon: "/assets/socialmedia/youtube.webp",
    },
    {
        platform: "Twitter",
        url: "https://twitter.com/ieeecsvitc",
        icon: "/assets/socialmedia/twitter.webp",
    },
    {
        platform: "Telegram",
        url: "https://t.me/IEEE_CS_VIT_Chennai",
        icon: "/assets/socialmedia/telegram.webp",
    },
    {
        platform: "Dev.to",
        url: "https://dev.to/ieeecsvitc",
        icon: "/assets/socialmedia/devto.webp",
    },
];

export default socialMediaLinks;
