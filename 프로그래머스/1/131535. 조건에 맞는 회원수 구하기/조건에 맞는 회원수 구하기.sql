-- 코드를 입력하세요
SELECT count(*)
from USER_INFO
where DATE_FORMAT(JOINED, '%Y') = 2021 and AGE >= 20 and AGE < 30;

# SELECT DATE_FORMAT(JOINED, '%Y')
# from USER_INFO