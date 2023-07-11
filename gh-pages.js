import ghpages from 'gh-pages';

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/suleimankrim/portfolio.git', // Update to point to your repository
		user: {
			name: 'suleiman', // update to use your name
			email: 'sulimankareem90@gmail.com' // Update to use your email
		}
	},
	() => {
		console.log('Deploy Complete!');
	}
);
