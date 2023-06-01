# MovieDB React App

This is a React application that utilizes the MovieDB API to display information about movies. It allows users to search for movies, view movie details, and save their favorite movies.

## Installation

1. Clone the repository to your local machine using the following command:

   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```
   cd MovieDB-React-App
   ```

3. Install the dependencies by running:

   ```
   npm install
   ```

## Configuration

In order to use the MovieDB API, you will need to obtain an API key from the [MovieDB website](https://www.themoviedb.org/) by creating an account.

Once you have obtained the API key, create a file named `.env.local` in the root of the project directory. Inside the file, add the following line:

```
REACT_APP_API_URL="https://api.themoviedb.org/3/movie/popular?api_key=[your_api_key]"
```

Replace `your_api_key` with your actual API key.

## Usage

To start the application, run the following command:

```
npm start
```

This will start the development server and open the application in your default browser. If the browser doesn't open automatically, you can visit [http://localhost:3000](http://localhost:3000) to view the application.

## Features

- **Movie Details**: Click on image from the table to view its details.

## Dependencies

The main dependencies used in this project are:

- [React](https://reactjs.org/): TypeScript library for building user interfaces.
- [@mui](https://mui.com/): React UI tools
- [usehooks-ts](https://usehooks-ts.com/): React hooks library

For a complete list of dependencies, refer to the `package.json` file.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

---

Thank you for using the MovieDB React App! If you have any further questions or need assistance, please don't hesitate to reach out. Enjoy exploring movies!