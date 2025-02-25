/*
  Warnings:

  - Added the required column `rating` to the `user_attempts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_attempts" ADD COLUMN     "rating" INTEGER NOT NULL;
