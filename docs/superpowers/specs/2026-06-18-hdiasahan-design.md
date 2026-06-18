# Design Document: hdiasahan

## Project Overview
A public-facing website for "hdiasahan" hosted on Blogger, built with Vite, React, and Tailwind CSS. The site will act as a dynamic interface for data managed manually in a Supabase database.

## Architecture
- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Blogger (via Single File Bundle)

## Data Schema (Supabase)
### 1. `products`
- `id` (uuid, primary key)
- `name` (text)
- `description` (text)
- `price` (numeric)
- `image_url` (text)
- `category` (text)
- `created_at` (timestamp)

### 2. `certificates`
- `id` (uuid, primary key)
- `certificate_no` (text, unique)
- `recipient_name` (text)
- `type` (text)
- `issue_date` (date)
- `enterprise_id` (text)

### 3. `site_config`
- `key` (text, primary key)
- `value` (jsonb)

## Features
1. **Landing Page:** Modern hero section and business value propositions.
2. **Product Catalog:** Dynamic grid fetching data from `products` table.
3. **Certificate Validator:** Search functionality for `certificates` by Enterprise ID or Certificate No.
4. **Member Registration Gateway:** Redirects/Buttons to `hdi.com/new-registration`.

## Build Strategy
- Use `vite-plugin-singlefile` to bundle everything into a single `index.html`.
- Manual deployment to Blogger: Copy-paste `index.html` content into Blogger XML Theme editor.

## Development Steps
1. Initialize Vite + React + TS project.
2. Setup Tailwind CSS.
3. Install Supabase client.
4. Configure `vite-plugin-singlefile`.
5. Create base layout and components.
