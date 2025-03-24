# TwinStruct Monitoring Dashboard

## Overview

the twinstruct monitoring dashboard is a comprehensive react-based web application designed to provide real-time insights into various environmental and power consumption metrics within a facility. this project leverages the flexibility and power of next.js and chart.js to display real-time data, such as room temperature, window activity, and power consumption levels, in an interactive and user-friendly dashboard.

## Features

- real-time data visualization: display room temperatures, window activities, and power consumption using dynamic graphs and charts.
- interactive ui components: utilize interactive tabs and sliders to explore different datasets.
- contextual alerts: automated email notifications based on predefined conditions (e.g., high temperature, unexpected power usage).
- responsive design: adapts to various screen sizes for optimal viewing on desktops, tablets, and smartphones.

## Technology Stack

- next.js: server-side rendering and api routes.
- react: ui library for building interactive elements.
- chart.js: simple yet flexible charting library.
- nextui: modern and rich ui components for react.
- emailjs: client-side api to send emails directly from the frontend without a backend server.

## Getting Started

### Prerequisites

- node.js (lts version)
- npm or yarn

### Installation

1. clone the repository:

   ```bash
   git clone https://github.com/faridaoweid/twinstruct-dashboard.git
   cd twinstruct-dashboard
   ```

2. install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. set up environment variables:  
   create a `.env.local` file in the root directory and add the following variables:

   ```plaintext
   NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_ACCOUNT_ID=your_emailjs_account_id
   ```

   replace `your_emailjs_service_id`, `your_emailjs_template_id`, and `your_emailjs_account_id` with your actual emailjs credentials to enable email notifications.

4. run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

navigate through the tabs on the dashboard to view different data visualizations:

- room temperature: displays current and historical temperature data.
- window activity: shows windows’ open/close activities alongside environmental factors like rain.
- power consumption: monitors energy usage over time and alerts for any discrepancies.

adjust settings and filters to customize the display and manage the conditions under which alerts are sent.

## Contributing

contributions are welcome! please open an issue to discuss your ideas or submit a pull request.

1. fork the repository
2. create your feature branch (`git checkout -b feature/amazingfeature`)
3. commit your changes (`git commit -m 'add some amazingfeature'`)
4. push to the branch (`git push origin feature/amazingfeature`)
5. open a pull request

## License

distributed under the mit license. see `license` for more information.

## Deployment

this project is deployed on vercel and can be accessed at [https://farida-eight.vercel.app/](https://farida-eight.vercel.app/).

for more information on how to use or contribute to twinstruct monitoring dashboard, please refer to the official documentation or contact the maintainers.
