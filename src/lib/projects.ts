import pronotes from '../assets/pronotes.png'
import tictactoePied from '../assets/tictactoe-pied.png'
import shortly from '../assets/short-ly.png'

export const projects = [
    {
        title: "Pro Notes",
        description: "Pro Notes is a note-taking app that allows users to create, edit, and delete notes. It also supports speech to textfunctionality on web browsers that support the feature.",
        image: pronotes,
        githubUrl: "https://github.com/BenjaminLikita/pro-notes",
        link: "https://pro-notes-beta.vercel.app/",
        stacks: ["React", "Vite", "TypeScript"]
    },
    {
        title: "Tictactoe Pied",
        description: "Tictactoe Pied is a simple tictactoe game built with React, Vite, and TypeScript. It features a responsive design and a simple AI that makes the game more challenging.",
        image: tictactoePied,
        githubUrl: "https://github.com/BenjaminLikita/tictactoe",
        link: "https://tictactoe-pied3.vercel.app/",
        stacks: ["React", "Vite", "TypeScript"]
    },
    {
        title: "Short-ly",
        description: "Short-ly is a URL shortening service that allows users to shorten long URLs for easier sharing and tracking.",
        image: shortly,
        githubUrl: "https://github.com/BenjaminLikita/short-ly",
        link: "https://shortt-ly.vercel.app/",
        stacks: ["Next", "TypeScript", "Prisma", "Sqlite"]
    },
]