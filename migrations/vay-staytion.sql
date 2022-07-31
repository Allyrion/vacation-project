CREATE TABLE users (
    id SERIAL PRIMARY KEY
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    username varchar(20) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    type varchar(8) DEFAULT 'customer',
    date_created timestamp DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE properties (
    id SERIAL PRIMARY KEY
    title varchar(50) NOT NULL,
    location varchar(50) NOT NULL,
    rating int,
    price numeric(7,2) NOT NULL,
    type varchar(30) NOT NULL,
    img TEXT NOT NULL,
    details TEXT,
    admin_id INT NOT NULL REFERENCES users,
    date_created timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    check_in timestamp NOT NULL,
    check_out timestamp NOT NULL,
    user_id INT NOT NULL REFERENCES users,
    property_id INT NOT NULL REFERENCES properties,
    date_created timestamp DEFAULT CURRENT_TIMESTAMP
)