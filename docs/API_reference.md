# API Documentation

## Overview
The Web3 Connect API provides endpoints for integrating Web3 applications with the Pi Network ecosystem. This document outlines the available endpoints, request/response formats, and authentication methods.

## Base URL

[https://api.web3connect-pi.com/v1](https://api.web3connect-pi.com/v1) 


## Authentication
All API requests require an API key. Include the API key in the request headers:
```
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### 1. User Registration
- **Endpoint**: `/users/register`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "username": "string",
        "email": "string",
        "password": "string"
    }
    ```
- **Response**:
    ```json
    {
        "message": "User  registered successfully",
        "userId": "string"
    }
    ```

### 2. Connect Web3 App
- **Endpoint**: `/apps/connect`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "userId": "string",
        "appId": "string"
    }
    ```
- **Response**:
    ```json
    {
        "message": "App connected successfully",
        "connectionId": "string"
    }
    ```

### 3. Transfer Assets
- **Endpoint**: `/transactions/transfer`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "fromUser Id": "string",
        "toUser Id": "string",
        "amount": "number"
    }
    ```
- **Response**:
    ```json
    {
        "message": "Transfer successful",
        "transactionId": "string"
    }
    ```

## Conclusion
This API documentation provides the necessary information to integrate with the Web3 Connect platform. For further assistance, please refer to the user guide or contact support.
