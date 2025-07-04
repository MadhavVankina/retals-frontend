NO_OF_WHEELS (ENUM)

'2'
'4'

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

VEHICLE_AVAILABILITY_STATUS (ENUM)

'available'
'booked'
'in-maintenance'
'decommissioned'

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

vehicle_model_type (TABLE)

model_type_id UUID (PK)
model_type_name VARCHAR(255) NOT NULL
no_of_wheels NO_OF_WHEELS NOT NULL
created_on DATE NOT NULL
last_modified_at DATE NOT NULL


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

vehicles (TABLE)

vehicel_id UUID (PK)
model_type_id UUID (FK)
model_name VARCHAR(255)
availablity_status VEHICLE_AVAILABILITY_STATUS,
license_plate VARCHAR(255)
vehicle_color VARCHAR(255)
create_on DATE
last_modified_at DATE

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

customer (TABLE)

customer_id UUID (PK)
first_name VARCHAR(255)
last_name VARCHAR(255)


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

bookings (TABLE)

booking_id UUID (PK)
customer_id UUID (FK)
vehicle_id UUID (FK)
start_date DATE
end_date DATE