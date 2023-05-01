// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// import coursesData from '../data/courses.json';

// async function run() {

// await prisma.course.createMany({
//     data: coursesData,
//   });
//   const user = await prisma.user.upsert({
//     where: { email: 'cody@mail.com' },
//     update: {},
//     create: {
//       name: 'Coder Codes',
//       email: 'cody@mail.com',
//     },
//   });

//   console.log({ user });
// }

// run()
//   .catch((e) => {
//     console.log(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
