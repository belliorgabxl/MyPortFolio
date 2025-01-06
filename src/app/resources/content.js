import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Patarajarin',
    lastName:  'Napakarn',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Telecommunication Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Bangkok',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Thai', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/belliorgabxl/project_esp',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/patarajarin-napakarn-565b41344/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'gabxl_npk',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'patara1919@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Gabel Patarajarin</>,
    subline: <>I'm Gabel , Student Engineering at <InlineCode>KMITL</InlineCode> Faculty of Engineering Telecommunication <br/>Or Network Engineering , After that, I practiced as a <InlineCode>Web-Developer</InlineCode><br/>Both <InlineCode>Front-End</InlineCode> & <InlineCode>Back-End </InlineCode>  &nbsp;developer</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Gabel Pararajarin Napakarn is a engineer student at telecommunication engineering  Faculty of Engineering KMITL.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'TCC',
                timeframe: '01/03/2024 - Present',
                role: 'Telecom Engineer & Developer',
                achievements: [
                    <>Being to Network Engineering and Web Developer in TCC technology.</>,
                    <>And go to Back-End Developer (Go-lang , .NET) management all information and database in enterprises.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'One Bangkok',
                timeframe: '2024 - Present',
                role: 'Full-Stacke Developer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: "King Mongkut 's Institute of Technology Ladkrabang",
                description: <>Studied telecommunication engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Chasing after dreams in Developed way</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + MongoDB.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My Job :)',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image01.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image03.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image06.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image08.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image11.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/profile/image14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };