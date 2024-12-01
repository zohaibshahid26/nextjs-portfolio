export async function getProjects() {
  // This function can be used to fetch project data from an API or database
  // For now, we'll return a static list of projects
  return [
    {
      name: 'Weather App',
      description: 'Get real-time weather updates for any location.',
      link: '/projects/weather-app'
    },
    {
      name: 'Crypto Tracker',
      description: 'Track the latest prices and trends of cryptocurrencies.',
      link: '/projects/crypto-tracker'
    },
    {
      name: 'Recipe Finder',
      description: 'Find recipes based on ingredients you have.',
      link: '/projects/recipe-finder'
    }
  ]
}
