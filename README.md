# Stolen Cars Complain App

## Note: Authentication is not added, only API Endpoints are there

Run the project --> npm run dev

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