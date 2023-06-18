# Interactive Bar Chart with D3.js and Next.js

This is a small application that demonstrates how to create an interactive bar chart using D3.js and Next.js. The chart is rendered dynamically and allows users to visualize data in a visually appealing way.

## Features

- Fetches data from a mock API (JSON Server) and displays it in a bar chart.
- Utilizes D3.js to create scalable and interactive visualizations.
- Implements a responsive design that adjusts the chart layout based on the available screen space.

## Getting Started

Follow these instructions to set up the project locally:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install the dependencies: `npm install`
4. Start JSON server: `npm run serve-json` (you can see the mock data on port `http://localhost:4000`)
5. Start the development server: `npm run dev`
6. Open your browser and visit `http://localhost:3000` to see the interactive bar chart.

## Mock API (JSON Server)

During development, the project uses JSON Server to mock the API and provide the data for the bar chart. The mock data is stored in a `db.json` file. To start the JSON Server, run the following command:

npm run server

The mock API will be available at `http://localhost:8000`.

## Project Structure

The project follows the structure provided by Next.js:
```
├── public
│ └── data.json
├── src
│ ├── components
│ │ └── BarChart.js
│ ├── pages
│ │ └── index.js
│ └── package.json
└── next.config.js
```
- The `public` directory contains the `data.json` file, which serves as the static data file for the bar chart in production. For the developement enviroment it's configuered to use the file `db.json` at the root of the project.
- The `src/app/components` directory contains the `BarChart` component, which handles the rendering and interaction of the chart.
- The `src/app` directory contains the `index.js` file, which renders the `BarChart` component on the home page.
- The `next.config.js` file is used to configure Next.js for specific requirements, such as adding custom webpack configurations.

## Dependencies

The project relies on the following dependencies:

- Next.js: A framework for building server-rendered React applications.
- React: A JavaScript library for building user interfaces.
- D3.js: A powerful library for creating data visualizations.
- JSON Server: A simple mock API server for development purposes.
- Other dependencies (webpack, Babel, etc.) required for building and running a Next.js application.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.

## Contributions

Contributions to this project are welcome! If you encounter any issues or have suggestions for improvement, please create a new issue or submit a pull request.

## Acknowledgments

This project was inspired by the need for a simple and interactive bar chart using D3.js and Next.js. Special thanks to the open-source community for their valuable contributions.

## Contact

If you have any questions or inquiries, please feel free to contact [Daro](https://github.com/Daro007).

