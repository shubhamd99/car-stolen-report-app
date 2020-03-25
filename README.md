# Stolen Cars Complain App

## Note: Authentication is not added, only API Endpoints are there
Since Authentication is not there i'm displaying as two different page one for complains and other for police login
* http://localhost:8000/home
* http://localhost:8000/police/123

Run the project --> npm run dev

## Workflow:
1. On Login of the Officer we are assigning the un-assigned complains to his bucket in the backend.
2. On Creating complains we are checking the officers that are online and not having a complain assined already, then we are assigning the complain to that officer.
3. When we change the complain status to completed, we are un-assigning that complain from the officer making his bucket empty for other cases.

## Proposed Solution
We can create lambda in AWS that will trigger after some interval by the cron, that will take care of this assigning and unassigning of the complains.

### API Endpoints

```
/api/signin
/api/register
/api/logout/api/:id
/api/complains
/api/complain
/api/complains/:id
```

### Database Schema

```
CREATE extension "uuid-ossp";

CREATE TABLE IF NOT EXISTS complains (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	car_model text NOT NULL,
	customer_name VARCHAR(100) NOT NULL,
	customer_phone_number text NOT NULL,
	notes jsonb,
	is_completed BOOLEAN DEFAULT FALSE NOT NULL,
	created_at TIMESTAMP without time zone DEFAULT now() NOT NULL,
	CONSTRAINT complains_pkey PRIMARY KEY ( id )
);

CREATE TABLE IF NOT EXISTS users (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	name VARCHAR(100),
	email text UNIQUE NOT NULL,
	hash VARCHAR(100) NOT NULL,
	created_at TIMESTAMP without time zone DEFAULT now() NOT NULL,
	CONSTRAINT users_pkey PRIMARY KEY ( id ),
	fk_complains_id uuid references complains (id)
);

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS complains;
```

![alt txt](https://i.imgur.com/qqLd4JY.png)
![alt text](https://i.imgur.com/WGIehdC.png)