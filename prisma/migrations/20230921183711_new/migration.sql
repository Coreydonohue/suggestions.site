-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER,
    "title" TEXT,
    "author" TEXT,
    "description" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "director" TEXT,
    "genre" TEXT,
    "description" TEXT,
    "rank" INTEGER,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "series" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "genre" TEXT,
    "description" TEXT,
    "rank" INTEGER,

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);
