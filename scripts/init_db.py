import os
import psycopg2
from psycopg2.extensions import cursor
from contextlib import contextmanager
from dotenv import load_dotenv
from pull_problems import ProblemDetails, get_grind_169
from typing import Generator


@contextmanager
def get_session() -> Generator[cursor, None, None]:
    load_dotenv()
    conn = psycopg2.connect(
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("USER"),
        password=os.getenv("PASSWORD"),
        host=os.getenv("HOST"),
        port=os.getenv("PORT")
    )
    cursor = conn.cursor()
    try:
        yield cursor
    finally:
        conn.commit()
        cursor.close()
        conn.close()


def add_topics(topics: set[str]) -> dict[str, int]:
    topic_ids = {topic: None for topic in topics}
    with get_session() as session:
        query = 'Insert INTO topics (topic) VALUES (%s) RETURNING id'
        for topic in topics:
            session.execute(query, tuple([topic]))
            topic_ids[topic] = session.fetchone()[0]

    return topic_ids


def add_problems(
    problems: list[ProblemDetails], topic_ids: dict[str, int]
) -> None:

    with get_session() as session:
        query = (
            '''
            INSERT INTO grind_169_problems
                (title, link, difficulty, topic_id, goal_time, is_premium)
            VALUES
                (%s, %s, %s, %s, %s, %s)
            '''
        )
        for problem in problems:
            problem_details = (
                problem['title'],
                problem['link'],
                problem['difficulty'],
                topic_ids[problem['topic']],
                problem['goal_time'],
                problem['premium']
            )
            session.execute(query, problem_details)


def main() -> None:
    problems: list[ProblemDetails] = get_grind_169()
    topic_ids = add_topics(set([problem['topic'] for problem in problems]))
    add_problems(problems, topic_ids)
    return


if __name__ == '__main__':
    main()
