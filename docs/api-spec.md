# API Specification

## Base URL
```
http://localhost:5000/api/v1
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Users

#### Get All Users
```http
GET /users
```

**Response**
```json
{
  "users": [
    {
      "id": "uuid",
      "email": "user@example.com",
      "name": "John Doe"
    }
  ]
}
```

#### Get User by ID
```http
GET /users/:id
```

**Response**
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "name": "John Doe"
}
```

### Sermons

#### Get All Sermons
```http
GET /sermons
```

### Events

#### Get All Events
```http
GET /events
```
