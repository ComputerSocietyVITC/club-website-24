// * REFER HERE, IMPORTANT *

// Supported Date Formats
// The JavaScript `Date` object supports several date formats, but the most reliable formats include:
// 1. ISO 8601 Extended Format:
//    - "YYYY-MM-DD" (e.g., "2024-06-13")
//    - "YYYY-MM-DDTHH:MM:SS" (e.g., "2024-06-13T14:00:00")
// 2. Short Date Format:
//    - "MM/DD/YYYY" (e.g., "06/13/2024")
// 3. Long Date Format:
//    - "MMM DD, YYYY" (e.g., "June 13, 2024")
// 4. Date-Time Format:
//    - "MM/DD/YYYY HH:MM:SS" (e.g., "06/13/2024 14:00:00")
//
// However, the ISO 8601 format is recommended because it is the most consistent and avoids ambiguities related to locale settings.

interface Blog {
    title: string;
    date: string;
    imageUrl: string;
    author: string;
    url: string;
}

const blogData: Blog[] = [
    {
        title: "Security Vulnerabilities and Prevention in HTML5",
        date: "2023-01-01",
        imageUrl:
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjsmp9hfel0l8ny0yra7r.png",
        author: "Mainak Chattopadhyay",
        url: "https://dev.to/ieeecsvitc/security-vulnerabilities-and-prevention-in-html5-p0m",
    },
    {
        title: "The impact of security in FOSS projects and the future",
        date: "2022-01-29",
        imageUrl:
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4qbql81juzvwtfryu9zp.jpg",
        author: "Abhijith Ganesh",
        url: "https://dev.to/ieeecsvitc/the-impact-of-security-in-foss-projects-and-the-future-3jom",
    },
    {
        title: "PwnKit: PrivESC flaw in Linux",
        date: "2022-01-27",
        imageUrl:
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fit8dkklkemfztks9rvhq.png",
        author: "Shivansh Sharma",
        url: "https://dev.to/ieeecsvitc/pwnkit-privesc-flaw-in-linux-48nl",
    },
    {
        title: "Activate your Free Azure account with these quick tips",
        date: "2022-01-12",
        imageUrl:
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4lra9ld9j8l8gia7yfpi.png",
        author: "Mayank Gupta",
        url: "https://dev.to/ieeecsvitc/learn-how-to-activate-free-microsoft-azure-account-with-these-quick-tips-1620",
    },
    {
        title: "Demystifying Blockchain Technology",
        date: "2022-01-09",
        imageUrl:
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Filcr62gjtv5vosnvgxzo.jpg",
        author: "Narayan Subramanian",
        url: "https://dev.to/ieeecsvitc/demystifying-blockchain-technology-2gj4",
    },
    {
        title: "Integrating Rich Text Editor with Django",
        date: "2022-01-07",
        imageUrl:
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvga1ecx6rore431dx2yd.png",
        author: "Onkar Apte",
        url: "https://dev.to/ieeecsvitc/integrating-rich-text-editor-with-django-k19",
    },
    {
        title: "Understanding and Exploiting Log4J Vulnerability",
        date: "2021-12-26",
        imageUrl:
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frh1srsj9jz2putl5zfxi.jpg",
        author: "Shivansh Sharma",
        url: "https://dev.to/ieeecsvitc/understanding-and-exploiting-log4j-vulnerability-28ji",
    },
];

export const getSortedBlogDataInDescendingOrder = (): Blog[] => {
    return blogData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
};
