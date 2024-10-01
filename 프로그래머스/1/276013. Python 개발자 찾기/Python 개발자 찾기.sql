-- 코드를 작성해주세요
# select ID, EMAIL, FIRST_NAME, LAST_NAME
# from DEVELOPER_INFOS
# where skill_1 = 'Python' or skill_2 = 'Python' or skill_3 = 'Python'
# order by ID asc

# ---

select ID, EMAIL, FIRST_NAME, LAST_NAME
from DEVELOPER_INFOS
WHERE "Python" IN(SKILL_1, SKILL_2, SKILL_3)
order by ID asc