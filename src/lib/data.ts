export const experiences = [
	{
		startDate: 'Aug 2021',
		endDate: 'Mar 2023',
		position: 'SDE',
		name: 'SaaS Labs · Full-time',
		location: 'Palo Alto, California, United States · Remote',
		description: [
			'- Developed the JustCall Global Search feature using React.js, Tailwind CSS, and TypeScript for the frontend, and Node.js with Algolia for the backend.',
			'- Enhanced user experience by enabling efficient product and help arFcle searches on JustCall.'
		]
	},
	{
		startDate: 'Aug 2021',
		endDate: 'Mar 2023',
		position: 'SDE',
		name: 'SaaS Labs · Internship',
		location: 'Palo Alto, California, United States · Remote',
		description: [
			'- Responsible for development of two separate web applications using React.js from scratch.',
			'- Boosted application performance by 15% following best practices such as lazy-loading, infinite-scroll, debounce,code splitting and other performance optimisations.',
			'- Designed and develop a matchmaking algorithm using socket.io and Twilio.',
			'- Contributed in developing and maintaining apis for the application using Node.js(Express)',
			'- Created reusable functional components and custom hooks for web applications and performed Error handling using Error Boundaries'
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
		position: 'Full stack engineer',
		name: 'Lets Endorse · Internship',
		location: 'Banglore, Karnataka, India · Remote',
		description: [
			'- Built an end-to-end admin module, which allows admin to select a particular area on a map, add or delete coordinates using a form or clicking on the map, save related data, using React and Google Maps JavaScript API.',
			'- Designed required Schemas in Mongodb, and created required APIs in Node.js following RESTful API Conventions..'
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
