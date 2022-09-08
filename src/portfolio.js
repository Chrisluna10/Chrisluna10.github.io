const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Chrisluna10.github.io/portfolio',
  title: 'CL',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chris Luna',
  role: 'Full-Stack Developer',
  description:
    'I am a Full-Stack Web developer. Utilizing modern development tools like React and Rails to deliver powerful applications. I am passionate about problem solving and team building as well as learning new material to further my knowledge in coding. I created a mobile application with a team of developers at my previous position using React Native with Typescript and Ruby on rails that has been released to the Google Play store and Apple App store.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/chris-luna-09a755219/',
    github: 'https://github.com/Chrisluna10',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Boopd',
    description:
      'Boopd is a Capstone project I worked on with three other developers as our final project at LEARN Academy. Our goal was to create a pet-adoption-resource made with React and Ruby on Rails.',
    stack: ['Ruby on Rails', 'postgreSQL', 'React'],
    sourceCode: 'https://github.com/Chrisluna10/boopd',
  },
  {
    name: 'Marketplace App',
    description:
      'This Marketplace project was created to showcase my full-stack development skills with a React.js frontend and Ruby on Rails backend. The web application is hosted on Heroku with AWS S3. I went off of OfferUps website as inspiration for styling this application. In this Marketplace project, a user is able to create an account and utilize full CRUD functionality to post items for other users to see. I implemented devise, modified the controllers and added rails serializers to display specific information from the user when they post their item.',
    stack: ['Ruby on Rails', 'postgreSQL', 'React'],
    sourceCode: 'https://github.com/Chrisluna10/marketplace-app',
    livePreview: 'https://marketplace-app-cl.herokuapp.com/',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Ruby',
  'Rails',
  'PostgreSQL',
  'Material UI',
  'Git',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'chrisluna4224@gmail.com',
}

export { header, about, projects, skills, contact }
