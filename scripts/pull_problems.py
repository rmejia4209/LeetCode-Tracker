import time

from bs4 import BeautifulSoup, Tag
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from typing import Literal, TypedDict
from urllib.parse import urlencode, urlparse, urlunparse


class ProblemDetails(TypedDict):
    priority: int
    title: str
    link: str
    difficulty: Literal['Easy', 'Medium', 'Hard']
    goal_time: int  # in seconds
    topic: str
    premium: bool


def build_url() -> str:
    url = urlparse('https://www.techinterviewhandbook.org/grind75/')
    query_string = urlencode(
        {'weeks': 26, 'hours': 40, 'order': 'all_rounded', 'grouping': 'none'}
    )
    return urlunparse(url._replace(query=query_string))


def get_page_html(url: str) -> str:
    '''Returns page's html'''
    url = build_url()
    options = Options()
    options.add_argument('--headless')
    driver = webdriver.Chrome(options=options)
    driver.get(url)
    time.sleep(1)
    show_topics_btn = driver.find_element(
        By.XPATH, '//*[text()="Show topics"]'
    )
    if show_topics_btn:
        show_topics_btn.click()

    html = driver.page_source
    driver.quit()
    return html


def get_problems() -> list[Tag]:
    url = build_url()
    html = get_page_html(url)
    soup = BeautifulSoup(html, 'html.parser')
    return soup.find_all(attrs={'role': 'listitem'})


def get_grind_169() -> list[ProblemDetails]:
    problems = get_problems()
    grind_169: list[ProblemDetails] = []
    for problem in problems:
        info = problem.get_text(separator='|').replace("|·|", "|").split('|')
        priority, title, difficulty, time, topic = info
        grind_169.append({
            'priority': int(priority),
            'title': title,
            'link': problem.find('a').get('href'),
            'difficulty': difficulty.lower(),
            'goal_time': int(time.split(" ")[0]) * 60,
            'topic': topic,
            'premium': bool(problem.find(
                attrs={'aria-label': 'LeetCode Premium question'}
            ))
        })
    return grind_169
