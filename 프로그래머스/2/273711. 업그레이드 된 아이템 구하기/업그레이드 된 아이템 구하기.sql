-- 코드를 작성해주세요

# 서브쿼리
# select a.ITEM_ID, a.ITEM_NAME, a.RARITY
# from ITEM_INFO as a
# join item_tree as b
# on a.item_id = b.item_id
# where b.PARENT_ITEM_ID in (select c.item_id
# from ITEM_INFO as c
# join ITEM_TREE as d
# on c.ITEM_ID = d.item_id
# where c.rarity = 'RARE')
# order by a.ITEM_ID desc

# JOIN 활용
SELECT a.ITEM_ID, a.ITEM_NAME, a.RARITY
FROM ITEM_INFO AS a
JOIN ITEM_TREE AS b
ON a.ITEM_ID = b.ITEM_ID
JOIN ITEM_INFO AS c
ON b.PARENT_ITEM_ID = c.ITEM_ID
WHERE c.RARITY = 'RARE'
ORDER BY a.ITEM_ID desc;