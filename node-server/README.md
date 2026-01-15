# Anythink Market Express Server

This project is an Express server that listens on port 8001. It is set up for automatic code reloading using nodemon and can be run locally or within a Docker container.

## Project Structure

```
node-server
├── src
│   └── index.js        # Entry point of the application
├── package.json        # Configuration file for npm
├── .dockerignore       # Files to ignore when building the Docker image
├── Dockerfile          # Instructions to build the Docker image
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Yarn package manager (optional, but recommended).

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-ok3hir80.git
   cd Anythink-Market-ok3hir80/node-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server Locally

To start the server with automatic reloading, run:

```
yarn start
```

The server will be available at `http://localhost:8001`.

### Running the Server in Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t anythink-market-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 anythink-market-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.