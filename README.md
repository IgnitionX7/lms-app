Learning Management System (LMS)
🚀 Project Overview

This is a Learning Management System (LMS) built with modern web technologies to provide an immersive and interactive learning experience. The platform features course management, authentication, student progress tracking, and payment integration.
🛠 Tech Stack

This LMS is built using the latest web technologies:

    Next.js 15 – App Router architecture for server-side rendering (SSR) and static site generation (SSG)

    TypeScript – Strongly typed JavaScript for improved reliability

    Tailwind CSS – Utility-first CSS framework for styling

    ShadCN – Component library for elegant UI

    Clerk – Authentication and user management

    Sanity – Headless CMS for content and course management

    Stripe – Payment processing for course enrollments

    Framer Motion – Advanced animations and UI interactions

    Supabase (Planned) – Backend and database management

📌 Features

    User Authentication – Secure sign-in and sign-up via Clerk

    Course Management – Admins can create and update course content

    Student Dashboard – Tracks progress and completed courses

    Payments Integration – Seamless checkout with Stripe

    Rich UI/UX – Animations and interactive elements powered by Framer Motion

📂 Project Structure
├── app/                  # Next.js App Router
│   ├── courses/          # Course pages
│   ├── dashboard/        # User dashboard
│   ├── api/             # Server actions
├── components/          # Reusable UI components
├── lib/                 # Utility functions and helpers
├── sanity/              # Sanity CMS integration
├── styles/              # Global styles (Tailwind)
├── .env.local           # Environment variables
🛠 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/lms-project.git
cd lms-project
2️⃣ Install dependencies
pnpm install
3️⃣ Set up environment variables

Create a .env.local file and add the required credentials for Clerk, Sanity, Stripe, etc.
4️⃣ Run the development server
pnpm dev

The app will be available at (https://lms-project-sage.vercel.app).
🚀 Deployment

This LMS can be deployed on platforms like Vercel, Netlify, or any Next.js-supported hosting service.
📜 License

This project is licensed under the MIT License.

For inquiries, reach out via robin_zill@yahoo.com


