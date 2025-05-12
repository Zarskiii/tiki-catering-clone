# Zar's Tiki Shack - Hawaiian Shave Ice Catering

A modern and responsive website for Zar's Tiki Shack, a Hawaiian shave ice catering service.

## Technologies Used

This project is built with:

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router

## Project Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tiki-catering-clone.git

# Navigate to the project directory
cd tiki-catering-clone

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The development server will start at http://localhost:8080 (or another port if 8080 is in use).

### Building for Production

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

- `/src/components` - Reusable components
- `/src/components/ui` - UI components from shadcn/ui
- `/src/pages` - Page components
- `/src/lib` - Utility functions and helpers
- `/src/hooks` - Custom React hooks

## Features

- Responsive design for mobile, tablet, and desktop
- Modern UI with Tailwind CSS
- Component-based architecture with React
- TypeScript for type safety
- Fast development with Vite

## Project info

**URL**: https://lovable.dev/projects/517cc1a7-4328-4a35-9253-e38abbed93f3

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/517cc1a7-4328-4a35-9253-e38abbed93f3) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/517cc1a7-4328-4a35-9253-e38abbed93f3) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Contact Form Setup

The contact form on this website is powered by EmailJS, which allows the form to send emails directly from the browser without needing a backend server.

### Setting up EmailJS for the Contact Form

1. **Create an EmailJS Account**
   - Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
   - The free tier allows 200 emails per month

2. **Add an Email Service**
   - From your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authorization steps to connect your email

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use the following dynamic variables in your template:
     - `{{name}}` - The sender's name
     - `{{email}}` - The sender's email
     - `{{phone}}` - The sender's phone number
     - `{{event_date}}` - The event date
     - `{{event_type}}` - The type of event
     - `{{guest_count}}` - The number of guests
     - `{{location}}` - The event location
     - `{{message}}` - The message content

4. **Update the Contact Component**
   - Open `src/components/Contact.tsx`
   - Update the following constants with your EmailJS credentials:
     ```javascript
     const EMAILJS_SERVICE_ID = "service_xxxx";  // Update with your Service ID
     const EMAILJS_TEMPLATE_ID = "template_xxxx"; // Update with your Template ID
     const EMAILJS_PUBLIC_KEY = "xxxx";          // Update with your Public Key
     ```

5. **Test the Form**
   - Fill out the contact form on your website
   - Submit the form and verify that you receive the email
   - Check for any errors in the browser console

### Notes
- The EmailJS Public Key is safe to include in client-side code
- For increased security, consider adding Google reCAPTCHA to your form
- The form includes basic validation for required fields

## Development

This project uses:
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components

### Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
