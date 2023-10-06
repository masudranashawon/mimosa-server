# Mimosa Beauty Parlor and Spa

## Introduction

Mimosa Beauty and Spa is the ultimate destination for enhancing your innate beauty, indulging in luxurious spa treatments, and revitalizing your inner spirit. Our team of dedicated professionals is wholeheartedly committed to delivering a remarkable and tailored experience that leaves you not only looking beautiful but feeling confident and utterly rejuvenated.

Welcome to a world where beauty and serenity converge. At Mimosa, we believe in the power of self-care and the transformative effects of pampering.

## Features

Explore Our Feature-Rich Platform:

- **Browse Beauty Packages**: Users can explore a variety of beauty packages tailored to their needs.
- **Explore Specialists**: Users can discover and learn more about beauty specialists available on the platform.
- **Book Packages**: Users have the option to easily book their preferred beauty packages.
- **Manage Bookings**: Users can conveniently manage their booked packages.
- **Admin Control**:
  - Admins can efficiently manage user accounts and permissions.
  - Admins have full control over the management of beauty packages, including adding, editing, or removing them.
  - Admins can manage specialists, such as adding new specialists or updating their profiles.

## Technologies

Cutting-Edge Technologies Empowering Mimosa Beauty Spa:

- Express.js
- Node.js
- MongoDB
- Mongoose
- TypeScript
- JSON Web Tokens (JWT) for authentication

## Models

Mimosa Beauty Spa's Innovative Models:

### User

| Field       | Type               |
| ----------- | ------------------ |
| Name        | String             |
| Email       | String             |
| Password    | String             |
| PhotoUrl    | String             |
| Address     | String (Optional)  |
| PhoneNumber | String (Optional)  |
| Role        | Enum [user, admin] |
| Bookings    | Booking[]          |

### BeautyPackage

| Field       | Type         |
| ----------- | ------------ |
| Title       | String       |
| Description | String       |
| Category    | String       |
| Images      | String[]     |
| Price       | Number       |
| Specialists | Specialist[] |
| Bookings    | Booking[]    |

### Specialist

| Field          | Type            |
| -------------- | --------------- |
| Name           | String          |
| Designation    | String          |
| Bio            | String          |
| PhotoUrl       | String          |
| DateOfBirth    | String          |
| BeautyPackages | BeautyPackage[] |

### Booking

| Field         | Type |
| ------------- | ---- |
| User          | {}   |
| BeautyPackage | {}   |

## API Routes

Mimosa Beauty Spa's API Routes Overview:

| SL No. | HTTP Verb | Endpoint                               | Description             | Permission |
| ------ | --------- | -------------------------------------- | ----------------------- | ---------- |
| 1      | POST      | /api/auth/register                     | Register a user         | All        |
| 2      | POST      | /api/auth/login                        | Login a user            | All        |
| 3      | GET       | /api/users                             | Get all users           | Admin      |
| 4      | GET       | /api/users/{userId}                    | Get an user             | User/Admin |
| 5      | DELETE    | /api/users/{userId}                    | Delete an user          | User/Admin |
| 6      | PUT       | /api/users/{userId}                    | Update an user          | User/Admin |
| 7      | GET       | /api/beauty_packages                   | Get all beauty packages | All        |
| 8      | GET       | /api/beauty_packages/{beautyPackageId} | Get a beauty package    | All        |
| 9      | POST      | /api/beauty_packages                   | Create a beauty package | Admin      |
| 10     | PUT       | /api/beauty_packages/{beautyPackageId} | Update a beauty package | Admin      |
| 11     | DELETE    | /api/beauty_packages/{beautyPackageId} | Delete a beauty package | Admin      |
| 12     | GET       | /api/specialists                       | Get all specialists     | All        |
| 13     | GET       | /api/specialists/{specialistId}        | Get a specialist        | All        |
| 14     | POST      | /api/specialists/{beautyPackageId}     | Create a specialist     | Admin      |
| 15     | PUT       | /api/specialists/{specialistId}        | Update a specialist     | Admin      |
| 16     | DELETE    | /api/specialists/{specialistId}        | Delete a specialist     | Admin      |
| 17     | POST      | /api/bookings/create/{beautyPackageId} | Create a booking        | User       |
| 18     | GET       | /api/bookings                          | Get all bookings        | Admin      |
| 19     | DELETE    | /api/bookings/{bookingId}              | Delete a booking        | User       |

## Requirements

> - **Node.js**
> - **Yarn**
> - **MongoDB**

## Installation

To install and configure Mimosa, Follow the steps below:

1. Clone the `repository` using:

```
git clone https://github.com/masudranashawon/mimosa-server.git
```

2. Navigate to the `project` directory using:

```
cd mimosa
```

3. Install the required `dependencies` by running:

```
yarn
```

4. Create a `.env` file in the root directory and add the following variables:

- `MONGO_URI`=Your MongoDB connection URI
- `JWT_SECRET`=A secret key for JWT token generation

5. Start the `development` server by running:

```
yarn dev
```

These steps will help you set up Mimosa locally and configure the required environment variables for seamless functionality. Happy learning!

## Links

[Mimosa API Endpoint](https://mimosa-server-weld.vercel.app/)

## Conclusion

Discover your oasis of beauty and relaxation at Mimosa. From soothing spa treatments to expert beauty services, we've got it all. Book your beauty package today and treat yourself to the ultimate pampering experience. We're excited to have you as a part of the Mimosa community. Feel free to explore our repository for additional information, resources, and updates.

Stay beautiful, stay confident, and welcome to the world of Mimosa!

## Contributing

Contributions to Mimosa are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.
