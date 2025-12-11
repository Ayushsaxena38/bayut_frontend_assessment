# Bayut Clone (Frontend)

This is a responsive frontend clone of the **Bayut** real estate platform, built as an assessment project. It replicates the core look and feel of the original site, including a responsive navigation bar, hero search section, property listings, and a full authentication flow (Login/Register).

## 📝 Note to the Reviewer

**Next.js is a completely new technology for me.** My background is primarily in the MERN stack (React/Express), and this was my first time working with the Next.js App Router.

To complete this assessment, I rapidly upskilled by using:
* **Official Next.js Documentation:** For understanding server components and routing.
* **Google Gemini AI:** For troubleshooting errors and understanding best practices for the App directory structure.

I have thoroughly enjoyed learning this framework during the assessment and am eager to continue mastering it.

---

## 🚀 Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Custom configuration for Bayut branding)
* **Icons:** Lucide React
* **HTTP Client:** Axios
* **Deployment:** Render

## ✨ Features

* **Responsive Design:** Mobile-first approach using Tailwind CSS.
* **Authentication:** * Two-step Registration flow (Email check -> Profile creation).
    * Login with JWT handling.
    * Protected state (Login/Logout buttons toggle based on token presence).
* **Components:** Modular architecture (Navbar, Hero, Property Cards).
* **Performance:** Optimized image loading using Next/Image with remote patterns.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev