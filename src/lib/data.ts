export const experiences = [
	{
		startDate: 'July 2023',
		endDate: 'Current',
		position: 'SDE-1',
		name: 'SaaS Labs · Full-time',
		location: 'Palo Alto, California, United States · Remote',
		description: [
			'-  Engineered the JustCall Global Search feature, utilizing React.js, Tailwind CSS, and TypeScript for the frontend, and Node.js with Algolia for the backend. Additionally, designed and implemented custom scrapers for help articles and blogs, incorporating OpenAI for generating searchable tags. This enhancement resulted in a streamlined search process, facilitating over 3000 daily searches and significantly improving user accessibility',
			'-  Developed and deployed a widely adopted meeting automation bot for Zoom and Google Meet, used by over 5000 monthly users to attend and record meetings, using puppeteer, Node.js and TypeScript..'
		]
	},
	{
		startDate: 'Aug 2021',
		endDate: 'Mar 2023',
		position: 'SDE Intern',
		name: 'SaaS Labs · Internship',
		location: 'Palo Alto, California, United States · Remote',
		description: [
			'- Led the development and maintenance of suits of five web application suites using React.js, Next.js, and Node.js.',
			'- Demonstrated full-stack proficiency and achieved a 32% performance improvement through optimisation techniques such as lazy-loading, infinite-scroll, debounce, and code splitting'
		]
	},
	{
		startDate: 'Jan 2023',
		endDate: 'Feb 2023',
		position: 'Full stack developer',
		name: 'Pearl Thoughts · Part-time',
		location: 'India · Remote',
		description: [
			'- Built a PDF Generation service using the serverless framework (TypeScript) and deployed it on AWS lambda.',
			'- Integrated the service in a next.js (TypeScript) application.'
		]
	},
	{
		startDate: 'Jun 2021',
		endDate: 'July 2021',
		position: 'Full Stack Engineer Intern',
		name: 'Lets Endorse · Internship',
		location: 'Banglore, Karnataka, India · Remote',
		description: [
			'- Developed an end-to-end full-stack (MERN) admin module using React and the Google Maps JavaScript API, enabling seamless area selection and data storage for over 200 administrators at LetsEndorse.',
			'- Implemented efficient caching strategies during the migration from Redux to React-Query, resulting in a notable 20% improvement in application performance.'
		]
	}
];

export const projects = [
	{
		title: 'Dialworks',
		isFeatured: true,
		thumbnail:
			'https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/dialworks.png?updatedAt=1685343492678',
		liveUrl: 'https://dialworks.io',
		githubUrl: '',
		techStack: [
			'React',
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Node.js',
			'Express',
			'MongoDB',
			'Mysql',
			'socket.io',
			'Twilio',
			'@tanstack/react-query'
		]
	},
	{
		title: 'memegeneratorai',
		isFeatured: true,
		thumbnail:
			'https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/memegeneratorai.png?updatedAt=1685343477251',
		liveUrl: 'https://memegeneratorai.online',
		githubUrl: '',
		techStack: [
			'remix.run',
			'TypeScript',
			'Tailwind CSS',
			'Headless ui',
			'Prisma',
			'PostgreSQL',
			'Clodinary',
			'openai',
			'NLPConnect/ViT-GPT2-Image-Captioning model'
		]
	},
	{
		title: 'react-use-form-validate',
		isFeatured: false,
		thumbnail:
			'https://opengraph.githubassets.com/aa55e4a45c75a3d72a3fbe1791116ffc8c01cb32d6846e991f70d7d93939f2a7/himanshubhardwaz/react-use-form-validate',
		liveUrl: 'https://www.npmjs.com/package/react-use-form-validate',
		githubUrl: 'https://github.com/himanshubhardwaz/react-use-form-validate',
		techStack: ['React', 'Javascript']
	},
	{
		title: 'takepoll',
		isFeatured: false,
		thumbnail:
			'https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/takepoll.png?updatedAt=1685343783107',
		liveUrl: 'https://takepoll.vercel.app',
		githubUrl: '',
		techStack: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'prisma',
			'PostgreSQL',
			'@tanstack/react-query'
		]
	},
	{
		title: 'Chess game',
		isFeatured: false,
		thumbnail:
			'https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/chess.png?updatedAt=1685343607042',
		liveUrl: 'https://chess-2-0.vercel.app',
		githubUrl: 'https://github.com/himanshubhardwaz/chess-2.0',
		techStack: ['react', 'chess.js', 'react-dnd', 'rxjs']
	},
	{
		title: 'create-npm-typescript-package',
		isFeatured: false,
		thumbnail:
			'https://opengraph.githubassets.com/aa55e4a45c75a3d72a3fbe1791116ffc8c01cb32d6846e991f70d7d93939f2a7/himanshubhardwaz/create-npm-typescript-package',
		liveUrl: 'https://www.npmjs.com/package/create-npm-typescript-package',
		githubUrl: 'https://github.com/himanshubhardwaz/create-npm-typescript-package',
		techStack: ['TypeScript', '@changesets/cli']
	}
];

export const featuredProjects = projects.slice(0, 3);
