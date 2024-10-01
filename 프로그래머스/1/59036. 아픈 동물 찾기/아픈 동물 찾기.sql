-- 코드를 입력하세요
SELECT ANIMAL_ID, NAME
from ANIMAL_INS
where INTAKE_CONDITION = 'Sick'
ORDER BY ANIMAL_ID asc

# select intake_condition from animal_ins where intake_condition != 'normal'