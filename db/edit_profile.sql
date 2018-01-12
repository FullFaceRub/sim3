update users 
set first_name = $1,
set last_name = $2,
set gender = #3,
set hobby = $4,
set hair_color = $5,
set eye_color = $6,
set birthday_day = $7,
set birthday_month = $8,
set birthday_year = $9
where auth_id = $1