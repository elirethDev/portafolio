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
		role: { es: 'Fullstack Engineer', en: 'Fullstack Engineer' },
		tagline: {
			es: 'Construyo productos del kernel a la nube.',
			en: 'Building products from kernel to cloud.'
		},
		ctaProjects: { es: 'Ver mis proyectos', en: 'See my projects' },
		ctaContact: { es: 'Contáctame', en: 'Get in touch' }
	},
	about: {
		eyebrow: { es: 'Sobre mí', en: 'About' },
		title: { es: 'El viaje del servidor a la pantalla', en: 'From server to screen' },
		text: {
			es: 'Fullstack que entiende la pila completa porque la ha vivido de punta a punta: C++ a bajo nivel en frameworks de MMOs, automatización con Python, y productos en producción con JavaScript/TypeScript, Docker y Cloudflare. Construyo sistemas que no se caen cuando crecen.',
			en: 'Fullstack engineer who understands the entire stack because I have lived it end to end: low-level C++ in MMO frameworks, automation with Python, and products in production with JavaScript/TypeScript, Docker, and Cloudflare. I build systems that don\'t fall over as they grow.'
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
		rolErrante: {
			name: { es: 'RolErrante CMS-lite', en: 'RolErrante CMS-lite' },
			description: {
				es: 'Sistema de organización de fichas e historias para comunidades de roleplay en Warcraft. En producción y usado activamente por una comunidad.',
				en: 'Character sheet and story organization system for Warcraft roleplay communities. In production and actively used by a community.'
			},
			tag: { es: 'En producción con usuarios', en: 'In production with users' }
		},
		totalRPChat: {
			name: { es: 'TotalRPChat', en: 'TotalRPChat' },
			description: {
				es: 'Rework completo del sistema de chat y radio para servidores de rol de Project Zomboid, pensado para comunidades RP.',
				en: 'Full rework of the chat and radio system for Project Zomboid, built with roleplay servers in mind.'
			},
			tag: { es: 'Mod de Project Zomboid', en: 'Project Zomboid mod' }
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
