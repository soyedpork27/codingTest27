-- 코드를 입력하세요
SELECT MEMBER_ID, MEMBER_NAME, GENDER, date_format(DATE_OF_BIRTH, '%Y-%m-%d') as DATE_OF_BIRTH
from MEMBER_PROFILE
where DATE_FORMAT(DATE_OF_BIRTH, '%m') = '03' and TLNO is NOT NULL and GENDER = 'W'
order by member_id asc;