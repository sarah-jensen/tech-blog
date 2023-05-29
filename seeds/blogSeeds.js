const { Blog } = require('../models');

const blogData = [
  {
    id: 'ef945b59-6834-4e76-8c68-351594c89907',
    title: 'Introduction to Artificial Intelligence',
    content: 'Artificial Intelligence (AI) is a branch of computer science...',
    author_id: '190e5b08-cf69-49d0-9655-2bf22975e01f',
  },
  {
    id: '7a5b805a-23ae-45de-b52f-64adc1d5c79b',
    title: 'Building Responsive Web Design',
    content: 'Responsive web design is an approach to web design...',
    author_id: '3143a642-8703-4437-8ae8-679f84c84b8c',
  },
  {
    id: '1d530556-116d-4642-8ed8-8ab2b2fd9a70',
    title: 'The Future of Blockchain Technology',
    content: 'Blockchain technology has gained significant attention...',
    author_id: '8556ef9d-bfbc-44a9-a057-e0695d89f24e',
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;