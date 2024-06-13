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

const blogData = [
    {
        title: "How to Learn React",
        date: "2024-06-13", // ISO 8601 format
        readTime: "5m read",
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        title: "Understanding JavaScript Closures",
        date: "2024-06-14",
        readTime: "4m read",
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        title: "A Guide to CSS Flexbox",
        date: "2024-06-15",
        readTime: "6m read",
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        title: "Mastering Async/Await in JavaScript",
        date: "2024-06-16",
        readTime: "7m read",
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        title: "Introduction to TypeScript",
        date: "2024-06-17",
        readTime: "5m read",
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        title: "Building RESTful APIs with Node.js",
        date: "2024-06-18",
        readTime: "8m read",
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        title: "State Management with Redux",
        date: "2024-06-19",
        readTime: "4m read",
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        title: "Understanding CSS Grid",
        date: "2024-06-20",
        readTime: "3m read",
        imageUrl: "https://via.placeholder.com/300"
    }
];

export const getSortedBlogDataInDescendingOrder = () => {
    return blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
};
