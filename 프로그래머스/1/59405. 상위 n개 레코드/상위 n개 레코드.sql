-- 코드를 입력하세요
# SELECT NAME
# from ANIMAL_INS
# order by datetime asc
# limit 1;

select NAME from ANIMAL_INS where DATETIME = (SELECT MIN(DATETIME) from ANIMAL_INS);
