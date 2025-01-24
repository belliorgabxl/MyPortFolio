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
        link: 'https://github.com/belliorgabxl',
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
                        src: '/images/profile/image14.jpg',
                        alt: 'My Project',
                        width: 16,
                        height: 12
                    },
                    {
                        src: '/images/projects/project-01/cover-04.png',
                        alt: 'My Project',
                        width: 16,
                        height: 12
                    },
                    {
                        src: '/images/projects/project-01/image-03.jpg',
                        alt: 'My Project',
                        width: 16,
                        height: 12
                    },
                    {
                        src: '/images/gallery/img-01.jpg',
                        alt: 'My Project',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                company: 'One Bangkok',
                timeframe: '2024 - Present',
                role: 'Full-Stacke Developer',
                achievements: [
                    <>Being to Network Engineering and Web Developer in TCC technology.</>,
                    <>And go to Back-End Developer (Go-lang , .NET) management all information and database in enterprises.</>,
                    <>Being to Network Engineering and Web Developer in TCC technology.</>,
                    <>And go to Back-End Developer (Go-lang , .NET) management all information and database in enterprises.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/image-02.jpg',
                        alt: 'TCC Project',
                        width: 16,
                        height: 16
                    },
                    {
                        src: '/images/profile/image15.jpg',
                        alt: 'TCC project',
                        width: 16,
                        height: 16
                    }
                 ]
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
                        src: '/images/assets/nextjs.jpeg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'React',
                description: <>Building Website with React 3 Project</>,
                images: [
                    {
                        src: '/images/assets/react.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: '.NET Core Back-End',
                description: <>Experience for .NET Core 1 Year in TCC tech group</>,
                images: [
                    {
                        src: '/images/assets/dotnet.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Go-lang Back-End',
                description: <>Experience for Go-lang 6 Month in TCC tech group</>,
                images: [
                    {
                        src: '/images/assets/golang.png',
                        alt: 'Project image',
                        width: 20,
                        height: 9
                    },
                    {
                        src: '/images/assets/fiber.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'CQRS Architecture',
                description: <>Command Query Responsibility Segregation (CQRS) is a design pattern that i usually use for project</>,
                images: [
                    {
                        src: '/images/assets/cqrs.png',
                        alt: 'CQRS',
                        width: 20,
                        height: 9
                    },
                ]
            },
            {
                title: 'Grafana',
                description: <>Log-Monitoring for API</>,
                images: [
                    {
                        src: '/images/assets/grafana.png',
                        alt: 'CQRS',
                        width: 20,
                        height: 9
                    },
                ]
            },
            {
                title: 'Elastic-Search',
                description: <>Search-Engine for Website & Database index search</>,
                images: [
                    {
                        src: '/images/assets/elasticsearch.png',
                        alt: 'CQRS',
                        width: 20,
                        height: 9
                    },
                ]
            },
        ]
    },
    tools :{
        display: true, 
        title: 'Expert Tools For Developer',
        tool:[
            {
                tooler: 'Docker',
                description: <>Virtual Machine & Compose & Docker Script and other</>,
                images: [
                    {
                        src: '/images/assets/docker_image.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                tooler: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/assets/figma.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-02/figma01.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                tooler: 'Postman',
                description: <>API test with  postman tools. experiences 2 year</>,
                images: [
                    {
                        src: '/images/assets/postman.png',
                        alt: 'postman',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                tooler: 'DBeaver',
                description: <>Database management so good by DBeaver</>,
                images: [
                    {
                        src: '/images/assets/dbeaver.jpg',
                        alt: 'Dbeaver',
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