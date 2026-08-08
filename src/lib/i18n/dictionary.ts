import type { Locale } from './locales';

/**
 * Central dictionary for all UI copy.
 * Add new keys here first, then translate in both locales.
 */
export const dictionary = {
	nav: {
		about: { es: 'Sobre mí', en: 'About' },
		stack: { es: 'Stack', en: 'Stack' },
		projects: { es: 'Proyectos', en: 'Projects' },
		contact: { es: 'Contacto', en: 'Contact' },
		cta: { es: 'Hablemos', en: 'Let\'s talk' }
	},
	toggle: {
		es: { es: 'Español', en: 'Español' },
		en: { es: 'English', en: 'English' }
	},
	hero: {
		available: { es: 'Disponible para nuevos proyectos', en: 'Available for new projects' },
		greeting: { es: 'Hola, soy', en: 'Hi, I\'m' },
		name: { es: 'Pablo Soler', en: 'Pablo Soler' },
		role: { es: 'Fullstack Developer', en: 'Fullstack Developer' },
		tagline: {
			es: 'Construyo productos del servidor a la pantalla.',
			en: 'Building products from server to screen.'
		},
		ctaProjects: { es: 'Ver mis proyectos', en: 'See my projects' },
		ctaContact: { es: 'Contáctame', en: 'Get in touch' }
	},
	about: {
		eyebrow: { es: 'Sobre mí', en: 'About' },
		title: { es: 'El viaje del servidor a la pantalla', en: 'From server to screen' },
		text: {
			es: 'Desarrollador fullstack autodidacta con la costumbre de ir hasta el fondo. Construyo con JavaScript y TypeScript a lo largo de todo el stack, automatizo lo repetitivo con Python y he bajado a bajo nivel con C++ en frameworks de MMOs como TrinityCore. Ese recorrido me da una visión completa del viaje: del servidor que lo corre a la interfaz que la gente usa. Un CMS de foro que construí hoy está en producción, dando servicio a una comunidad activa.',
			en: 'Self-taught fullstack developer with a habit of going deep. I build with JavaScript and TypeScript across the stack, automate the tedious with Python, and have gone low-level with C++ in MMO frameworks like TrinityCore. That range gives me a complete view of the journey: from the server it runs on to the interface people use. A forum CMS I built is in production today, serving an active community.'
		},
		education: { es: 'Formación', en: 'Education' },
		educationText: {
			es: 'Autodidacta y en Platzi, la plataforma de educación online.',
			en: 'Self-taught and on Platzi, the online education platform.'
		},
		languages: { es: 'Idiomas', en: 'Languages' },
		langES: { es: 'Español (nativo)', en: 'Spanish (native)' },
		langEN: { es: 'Inglés', en: 'English' }
	},
	stack: {
		eyebrow: { es: 'Stack', en: 'Stack' },
		title: { es: 'Stack técnico', en: 'Tech stack' },
		subtitle: {
			es: 'Tecnologías con las que construyo, de punta a punta.',
			en: 'Technologies I build with, end to end.'
		},
		categories: {
			languages: { es: 'Lenguajes', en: 'Languages' },
			frontend: { es: 'Frontend', en: 'Frontend' },
			backend: { es: 'Backend', en: 'Backend' },
			devops: { es: 'Servidores y DevOps', en: 'Servers & DevOps' },
			ai: { es: 'Inteligencia artificial', en: 'AI' }
		},
		items: {
			typescript: { es: 'TypeScript / JavaScript', en: 'TypeScript / JavaScript' },
			cpp: { es: 'C++', en: 'C++' },
			go: { es: 'Go', en: 'Go' },
			python: { es: 'Python', en: 'Python' },
			svelte: { es: 'Svelte / SvelteKit', en: 'Svelte / SvelteKit' },
			htmlcss: { es: 'HTML / CSS', en: 'HTML / CSS' },
			node: { es: 'Node.js', en: 'Node.js' },
			sql: { es: 'SQL (PostgreSQL / MySQL)', en: 'SQL (PostgreSQL / MySQL)' },
			docker: { es: 'Docker', en: 'Docker' },
			dockerCompose: { es: 'Docker Compose', en: 'Docker Compose' },
			nginx: { es: 'Nginx', en: 'Nginx' },
			kubernetes: { es: 'Kubernetes', en: 'Kubernetes' },
			ciCd: { es: 'CI/CD y GitHub Actions', en: 'CI/CD & GitHub Actions' },
			cloud: { es: 'Cloud y Edge (Cloudflare)', en: 'Cloud & Edge (Cloudflare)' },
			linux: { es: 'Linux y administración de servidores', en: 'Linux & server administration' },
			gameServers: { es: 'Servidores de videojuegos', en: 'Game servers' },
			agentic: { es: 'Programación agéntica', en: 'Agentic programming' }
		}
	},
	projects: {
		eyebrow: { es: 'Proyectos', en: 'Projects' },
		title: { es: 'Proyectos', en: 'Projects' },
		subtitle: {
			es: 'Trabajo real, con usuarios reales.',
			en: 'Real work, with real users.'
		},
		forum: {
			name: { es: 'CMS-lite para foro', en: 'CMS-lite for forum' },
			description: {
				es: 'Un CMS ligero para foros, en producción y usado activamente por una comunidad. Creado para resolver necesidades concretas de moderación, organización de contenido y gestión de usuarios.',
				en: 'A lightweight CMS for forums, in production and actively used by a community. Built to solve concrete needs around moderation, content organization, and user management.'
			},
			tag: { es: 'En producción con usuarios', en: 'In production with users' }
		},
		moreSoon: {
			es: 'Más proyectos en camino. Explorá mi GitHub mientras tanto.',
			en: 'More projects on the way. Explore my GitHub in the meantime.'
		},
		viewCode: { es: 'Ver código', en: 'View code' }
	},
	contact: {
		eyebrow: { es: 'Contacto', en: 'Contact' },
		title: { es: 'Contacto', en: 'Contact' },
		subtitle: {
			es: '¿Tenés un proyecto en mente o querés trabajar juntos? Escribime.',
			en: 'Got a project in mind or want to work together? Reach out.'
		},
		nameLabel: { es: 'Nombre', en: 'Name' },
		namePlaceholder: { es: 'Tu nombre', en: 'Your name' },
		emailLabel: { es: 'Tu email', en: 'Your email' },
		emailPlaceholder: { es: 'tu@email.com', en: 'you@email.com' },
		messageLabel: { es: 'Mensaje', en: 'Message' },
		messagePlaceholder: {
			es: 'Contame sobre tu proyecto o tu propuesta...',
			en: 'Tell me about your project or proposal...'
		},
		send: { es: 'Enviar mensaje', en: 'Send message' },
		sending: { es: 'Enviando...', en: 'Sending...' },
		success: {
			es: '¡Gracias por escribirme! Tu mensaje fue enviado y te voy a responder.',
			en: 'Thanks for reaching out! Your message was sent and I will get back to you.'
		},
		error: {
			es: 'No se pudo enviar el mensaje. Probá de nuevo o contactame por GitHub.',
			en: 'Could not send the message. Please try again or reach me on GitHub.'
		},
		required: { es: 'Todos los campos son obligatorios', en: 'All fields are required' },
		githubLabel: { es: 'GitHub', en: 'GitHub' },
		openGithub: { es: 'Abrir GitHub', en: 'Open GitHub' }
	},
	footer: {
		built: { es: 'Hecho con', en: 'Built with' },
		rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' }
	}
} as const;

export type Dict = typeof dictionary;
export type DictKey = keyof Dict;
