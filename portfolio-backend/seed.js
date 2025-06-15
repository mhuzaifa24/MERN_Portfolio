const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Education = require('./models/education_model');
const Project = require('./models/project_model');
const Skill = require('./models/skills_model');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolioDB';

const seedData = async () => {
   try {
   await mongoose.connect(MONGO_URI);
      console.log('MongoDB connected.');

    // Optional: Clear existing data
   await Education.deleteMany({});
   await Project.deleteMany({});
   await Skill.deleteMany({});

    // ✅ Seed Education
   await Education.insertMany([
      {
      degree: 'Bachelors of Computer Science',
      institution: 'Information Technology University (ITU)',
      year: '2023-Present',
      },
      {
      degree: 'Intermediate',
      institution: 'Punjab Group Of Colleges',
      year: '2020-2022',
      },
      {
      degree: 'Matriculation',
      institution: 'The Trust School',
      year: '2018-2020',
      },
   ]);

    // ✅ Seed Projects
   await Project.insertMany([
      {
         title: 'Text Editor in C++',
         description: 'Data Structures project using linked list for file editing.',
      },
      {
         title: 'AuXion',
         description: 'C++ Project developing a Distributed Auction System',
      },
      {
         title: 'Portfolio Website',
         description: 'Personal portfolio built in ReactJS using Material UI.',
      },
      {
         title: 'Library Management System',
         description: 'C++ project for storing book records.',
      },
      {
         title: 'AI Search Algorithms',
         description: 'Python implementations of BFS, DFS, UCS, A*, etc.',
      },
      {
         title: 'ChefMate',
         description: 'AI Powered Platform for cooking assistant',
      },
    ]);

    // ✅ Seed Skills
    await Skill.insertMany([
      { name: 'C++', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'AI', level: 80 },
      { name: 'React', level: 40 },
      { name: 'JavaScript', level: 80 },
   ]);

      console.log('✅ Database seeded successfully!');
      process.exit();
   } catch (error) {
      console.error('❌ Error seeding data:', error);
      process.exit(1);
   }
};

seedData();
