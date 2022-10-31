import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRaw`TRUNCATE TABLE "Hotel" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Room" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Event" RESTART IDENTITY CASCADE`;

  /*event = await prisma.event.create({
      data: {
        title: 'Driven.t',
        logoImageUrl: 'https://files.driveneducation.com.br/images/logo-rounded.png',
        backgroundImageUrl: 'linear-gradient(to right, #FA4098, #FFD77F)',
        isOnline: true,
        isPresential: true,
        onlinePrice: 15000,
        presentialPrice: 20000,
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(21, 'days').toDate(),
      }
    });*/
  await prisma.$executeRaw`INSERT INTO "Event"
       (title, "logoImageUrl", "backgroundImageUrl", "isOnline", "isPresential", "onlinePrice", "presentialPrice", "startsAt", "endsAt", "updatedAt")
        VALUES
        ('Driven.t', 'https://files.driveneducation.com.br/images/logo-rounded.png', 'linear-gradient(to right, #FA4098, #FFD77F)', true, true, 150, 200, '2022-11-11 20:41:12.731' , '2022-12-11 20:41:12.731', '2022-12-11 20:41:12.731');`;
  await prisma.$executeRaw`INSERT INTO "Hotel"
    ("eventId", "name", "imageUrl", "accommodationsTypes", "updatedAt")
    VALUES
    (1, 'Driven Resort', 'https://media-cdn.tripadvisor.com/media/photo-s/1b/b1/7f/38/emporio-acapulco-hotel.jpg', 3, '2022-11-11 20:41:12.731' )`;
  await prisma.$executeRaw`INSERT INTO "Hotel"
  ("eventId", "name", "imageUrl", "accommodationsTypes", "updatedAt")
  VALUES
  (1, 'Driven Hotel', 'https://media-cdn.tripadvisor.com/media/photo-s/1b/b1/7f/38/emporio-acapulco-hotel.jpg', 2, '2022-11-11 20:41:12.731' )`;
  await prisma.$executeRaw`INSERT INTO "Hotel"
  ("eventId", "name", "imageUrl", "accommodationsTypes", "updatedAt")
  VALUES
  (1, 'Driven Hospedagems Brabas', 'https://media-cdn.tripadvisor.com/media/photo-s/1b/b1/7f/38/emporio-acapulco-hotel.jpg', 1, '2022-11-11 20:41:12.731' )`;

  for (let i = 0; i < 16; i++) {
    const randomNumber = Math.round(Math.random() * 2 + 1);
    await prisma.$executeRaw`INSERT INTO "Room"
    ("number", "hotelId", "accommodationType", "available", "updatedAt")
    VALUES
    (${i}, 1, ${randomNumber}, true, '2022-11-11 20:41:12.731')`;
  }
  for (let i = 0; i < 16; i++) {
    const randomNumber = Math.round(Math.random() * 2 + 1);
    await prisma.$executeRaw`INSERT INTO "Room"
    ("number", "hotelId", "accommodationType", "available", "updatedAt")
    VALUES
    (${i}, 2, ${randomNumber}, true, '2022-11-11 20:41:12.731')`;
  }
  for (let i = 0; i < 16; i++) {
    const randomNumber = Math.round(Math.random() * 2 + 1);
    await prisma.$executeRaw`INSERT INTO "Room"
    ("number", "hotelId", "accommodationType", "available", "updatedAt")
    VALUES
    (${i}, 3, ${randomNumber}, true, '2022-11-11 20:41:12.731')`;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
