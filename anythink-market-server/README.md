# Anythink Market Server

This project is an Express server that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Project Structure

```
anythink-market-server
├── src
│   └── server.js        # Entry point of the application
├── .dockerignore         # Files to ignore when building the Docker image
├── Dockerfile            # Instructions to build the Docker image
├── package.json          # npm configuration file
├── nodemon.json          # Nodemon configuration settings
└── README.md             # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd anythink-market-server
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Run the server**:
   ```bash
   yarn start
   ```

The server will start and listen on port 8001.

## Docker

To build and run the Docker container, use the following commands:

1. **Build the Docker image**:
   ```bash
   docker build -t anythink-market-server .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 8001:8001 anythink-market-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.