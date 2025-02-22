-- CreateEnum
CREATE TYPE "difficulty_val" AS ENUM ('easy', 'medium', 'hard');

-- CreateTable
CREATE TABLE "grind_169_problems" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(64) NOT NULL,
    "link" VARCHAR(128) NOT NULL,
    "difficulty" "difficulty_val" NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "goal_time" INTEGER NOT NULL,
    "is_premium" BOOLEAN NOT NULL,

    CONSTRAINT "grind_169_problems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topics" (
    "id" SERIAL NOT NULL,
    "topic" VARCHAR(32) NOT NULL,

    CONSTRAINT "topics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_attempts" (
    "id" SERIAL NOT NULL,
    "attempt_time" INTEGER NOT NULL,

    CONSTRAINT "user_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "topics_topic_key" ON "topics"("topic");

-- AddForeignKey
ALTER TABLE "grind_169_problems" ADD CONSTRAINT "grind_169_problems_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

