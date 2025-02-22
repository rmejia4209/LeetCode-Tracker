-- DropForeignKey
ALTER TABLE "grind_169_problems" DROP CONSTRAINT "grind_169_problems_topic_id_fkey";

-- AddForeignKey
ALTER TABLE "grind_169_problems" ADD CONSTRAINT "grind_169_problems_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
