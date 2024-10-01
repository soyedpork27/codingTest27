-- 코드를 입력하세요
SELECT PT_NAME, PT_NO, GEND_CD, AGE, 
CASE WHEN TLNO IS NULL THEN 'NONE' ELSE TLNO end AS TLNO
from PATIENT
where AGE < 13 and GEND_CD = 'W'
order by AGE desc, PT_NAME asc

# select (select 'NONE' from patient where TLNO = NULL) as TNLO from patient