import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import project1 from "./assets/projects/project-1-1.png";
import project2 from "./assets/projects/project-2-2.png";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            navbar: {
                about: "About Me",
                technologies: "Technologies",
                experience: "Experience",
                projects: "Projects",
                contact: "Contact"
            },
            hero: {
                'description': 'I am a professional web developer with two years of experience, specializing in JavaScript, PHP, and MySQL. I have a strong interest in new technologies and am actively enhancing my skills in React, Node.js, and Express.'
            },
            about: {
                'about <1>me</1>': "About <1>Me</1>",
                'about me': "About Me",
                'description': 'From a young age, I have been passionate about programming, choosing to pursue it as a career. I have learned frameworks like React and Express, along with various other languages and tools. I continue my journey both professionally and personally, never shying away from a challenge. My only limit is the time it takes to find a solution.'
            },
            technologies: {
                'technologies': "Technologies",
            },
            experience: {
                'experience': "Experience",
                'experiences': [
                    {
                        'role': "Full Stack Developer",
                        'company': "KS Agency",
                        'date': "June 2022 - Present",
                        'description': "Developed and maintained web applications utilizing JavaScript, PHP, and MySQL. Contributed to a significant project, 'Easy Local,' where I implemented an API using Laravel to extend service functionalities beyond the core project.",
                        'technologies': [
                            'PHP',
                            'MySQL',
                            'JavaScript',
                            'MySQL',
                            'Laravel',
                            'Wordpress'
                        ]
                    },
                ]
            },
            projects: {
                'title': "Projects",
                'projects': [
                    {
                        'title': "Acme Dashboard",
                        'image': project2,
                        'link': 'https://nextjs-dashboard-ks-58604179.vercel.app/',
                        'github': 'https://github.com/dominikgorczyca/nextjs-dashboard',
                        'description': 
                            'This Next.js dashboard application, deployed on Vercel, allows you to manage invoices for predefined customers with features to create, view, update, and delete invoices. It also provides dashboard insights. To log in, use the email <strong>user@nextmail.com</strong> and password <strong>123456</strong>.',
                        'technologies': [
                            'Next.js',
                            'Vercel',
                            'Tailwind',
                            'Typescript',
                            'PostgreSQL',
                            'NextAuth',
                        ]
                    },
                    {
                        'title': "Portfolio Website",
                        'image': project1,
                        'link': '#',
                        'github': 'https://github.com/dominikgorczyca/dominikgorczyca.github.io',
                        'description': "A simple personal portfolio website showcasing projects, skills, and contact information. Has language support for English and Polish.",
                        'technologies': [
                            'React',
                            'Tailwind',
                            'Framer Motion',
                            'i18next',   
                        ]
                    }
                ]
            },
            contact: {
                'contact': "Contact",
                'email': 'Email Address',
                'message': 'Message',
                'submit': 'Submit',
                'success': 'Email sent successfully!',
            },
            footer: {
                'all_rights_reserved': 'All rights reserved.'
            }
        },
        pl: {  
            navbar: {
                about: "O mnie",
                technologies: "Technologie",
                experience: "Doświadczenie",
                projects: "Projekty",
                contact: "Kontakt"
            },
            hero: {
                'description': 'Jestem profesjonalnym deweloperem webowym z dwuletnim doświadczeniem, specjalizującym się w JavaScript, PHP i MySQL. Interesuję się nowymi technologiami i aktywnie rozwijam swoje umiejętności w React, Node.js i Express.'
            },
            about: {
                'about <1>me</1>': "O <1>Mnie</1>",
                'about me': "O mnie", 
                'description': 'Od najmłodszych lat pasjonuję się programowaniem i zdecydowałem się na karierę w tej dziedzinie. Nauczyłem się frameworków takich jak React i Express, a także wielu innych języków i narzędzi. Kontynuuję swoją podróż zarówno zawodowo, jak i prywatnie, nigdy nie unikając wyzwań. Moim jedynym ograniczeniem jest czas potrzebny na znalezienie rozwiązania.'
            },
            technologies: {
                'technologies': "Technologie",
            },
            experience: {
                'experience': "Doświadczenie",
                'experiences': [
                    {
                        'role': "Full Stack Developer",
                        'company': "Agencja KS",
                        'date': "Czerwiec 2022 - Obecnie",
                        'description': "Rozwijałem i utrzymywałem aplikacje internetowe wykorzystując JavaScript, PHP i MySQL. Współpracowałem przy znaczącym projekcie 'Easy Local', gdzie między innymi stworzyłem API używając Laravela, aby rozszerzyć funkcjonalności usługi poza główny projekt.",
                        'technologies': [
                            'PHP',
                            'MySQL',
                            'JavaScript',
                            'MySQL',
                            'Laravel',
                            'Wordpress'
                        ]
                    },
                ]
            },
            projects: {
                'title': "Projekty",
                'projects': [
                    {
                        'title': "Acme Dahsboard",
                        'image': project2,
                        'link': 'https://nextjs-dashboard-ks-58604179.vercel.app/',
                        'github': 'https://github.com/dominikgorczyca/nextjs-dashboard',
                        'description': 'Ta aplikacja dashboardowa w Next.js, wdrożona na Vercel, pozwala zarządzać fakturami dla zdefiniowanych klientów, oferując funkcje tworzenia, przeglądania, aktualizacji i usuwania faktur. Zapewnia także wgląd w dane na dashboardzie. Aby się zalogować, użyj emaila <strong>user@nextmail.com</strong> i hasła <strong>123456</strong>.',
                        'technologies': [
                            'Next.js',
                            'Vercel',
                            'Tailwind',
                            'Typescript',
                            'PostgreSQL',
                            'NextAuth',
                        ]
                    },
                    {
                        'title': "Strona Portfolio",
                        'image': project1,
                        'link': '#',
                        'github': 'https://github.com/dominikgorczyca/dominikgorczyca.github.io',
                        'description': "Prosta strona portfolio osobista prezentująca projekty, umiejętności i dane kontaktowe. Obsługuje języki angielski i polski.",
                        'technologies': [
                            'React',
                            'Tailwind',
                            'Framer Motion',
                            'i18next',   
                        ]
                    }
                ]
            },
            contact: {
                'contact': "Kontakt",
                'email': 'Adres Email',
                'message': 'Wiadomość',
                'submit': 'Wyślij',
                'success': 'Email wysłany pomyślnie!',
            },
            footer: {
                'all_rights_reserved': 'Wszelkie prawa zastrzeżone.'
            }
        }
    }
});

export default i18n;
