/*
  Warnings:

  - Added the required column `problem_id` to the `user_attempts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_attempts" ADD COLUMN     "problem_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "user_attempts" ADD CONSTRAINT "user_attempts_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "grind_169_problems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
