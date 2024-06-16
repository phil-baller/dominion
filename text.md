# Charity Organization Website

Welcome to the Charity Organization Website repository! This project is built using Next.js and Sanity CMS to promote charity events, share news, and provide information about our organization.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to create a user-friendly and interactive website for our charity organization. The website showcases our mission, upcoming events, latest news, and provides an easy way for visitors to get involved and donate.

## Features

- Dynamic content management with Sanity CMS
- SEO-friendly and fast performance with Next.js
- Responsive design for all devices
- Events calendar and news section
- Contact form for inquiries and support
- Donation integration

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation
- [Sanity CMS](https://www.sanity.io/) - A headless CMS for managing content
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling
- [Vercel](https://vercel.com/) - A cloud platform for deploying Next.js applications

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/charity-organization-website.git
   cd charity-organization-website
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

## Configuration

1. **Set up Sanity CMS:**

   - Create a Sanity project at [Sanity.io](https://www.sanity.io/).
   - Generate an API token for your project.
   - Copy the `sanity.json` configuration file from your Sanity project to the root of this repository.

2. **Configure environment variables:**

   Create a `.env.local` file in the root of your project and add the following environment variables:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=your-sanity-dataset
   SANITY_API_TOKEN=your-sanity-api-token
   ```

## Running the Project

1. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. **Build for production:**

   ```bash
   pnpm build
   pnpm start
   ```

## Deployment

This project can be easily deployed to Vercel. Follow these steps:

1. **Deploy to Vercel:**

   - Push your project to a Git repository.
   - Go to [Vercel](https://vercel.com/) and import your Git repository.
   - Set the required environment variables in the Vercel dashboard.
   - Deploy your project.

## Contributing

We welcome contributions to this project! To contribute, follow these steps:

1. **Fork the repository:**

   Click the "Fork" button at the top right of this page to create a copy of this repository under your GitHub account.

2. **Clone the forked repository:**

   ```bash
   git clone https://github.com/your-username/charity-organization-website.git
   cd charity-organization-website
   ```

3. **Create a new branch:**

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make your changes and commit them:**

   ```bash
   git commit -m "Your detailed description of the changes."
   ```

5. **Push to the branch:**

   ```bash
   git push origin your-feature-branch
   ```

6. **Create a pull request:**

   Open a pull request from your branch to the main branch of this repository and describe your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify the content as per your project's requirements and specifics.
