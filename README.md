# Recipe Share – Angular Exam Project
Recipe Share is a feature-rich Single Page Application (SPA) built with Angular that allows food enthusiasts to discover, share, and manage their favorite recipes. This project is developed as part of the Angular course exam, focusing on robust front-end logic, seamless navigation, and a user-centric design.

# Functional Guide
This section describes the application's core functionality, user interactions, and technical structure as required by the exam guidelines.

# Application Purpose
The goal of the application is to provide a collaborative platform where users can browse a global catalog of recipes, share their own culinary creations, and manage their personal recipe collection.

# User Roles
1. Guest (Not Authenticated User):

2. Can view the recipe catalog.

3. Can view detailed information about any recipe.

4. Can register a new account or login to an existing one.

5. Authenticated User:

6. Can create new recipe records.

7. Can edit or delete recipes they have personally created.

8. Can interact with other users' recipes (e.g., "Like" or "Save").

# Public Features
1. Home Page: Highlights featured recipes and provides an entry point to the app.

2. Catalog Page: Displays a list of all shared recipes with search and filter capabilities.

3. Details Page: Shows complete information for a specific recipe, including ingredients and instructions.

4. Authentication: Secure login and registration forms with real-time validation.

# Authenticated User Features
1. Create Recipe: A dedicated form to add new recipes with image URLs and category tags.

2. Recipe Management: Owners can update their recipes or remove them from the platform.

3. User Dashboard: View recipes created or liked by the user.

# Main Application Flow
1. User opens the Home page and navigates to the Catalog.

2. User selects a recipe to view its Details.

3. User registers or logs in to access creation features.

4. Authenticated user creates a new recipe via the "Add Recipe" form.

5. The new recipe immediately appears in the Catalog for all users to see.

# Data Structure
1. The application primarily utilizes a Recipe Object structured as follows:

2. id: Unique identifier.

3. title: Name of the dish.

4. ingredients: List of required items.

5. instructions: Step-by-step preparation guide.

6. imageUrl: Link to a visual representation of the dish.

7. category: Cuisine type (e.g., Italian, Vegan, Dessert).

8. ownerId: Reference to the creator's ID.

# Project Architecture
1. The project follows a modular Angular structure to ensure scalability and maintainability:

2. src/app/core/: Global services, route guards, and interceptors.

3. src/app/features/: Feature modules like auth/ and recipes/.

4. src/app/shared/: Reusable components (e.g., loaders, buttons), pipes, and directives.

# Technologies Used
1. Angular: Framework for building the SPA.

2. TypeScript: Primary programming language.

3. RxJS: For reactive data handling.

4. Backend: [Insert your backend here, e.g., Firebase or Node.js] for REST API services.

5. CSS/SCSS: For responsive styling and layout.

# How to Run the Project
1. Clone the repository:
`git clone https://github.com/Finn-Jess/recipe-share.git`

2. Install dependencies:
`npm install`

3. Start the application:
`npm start`

4. Open in browser:
Navigate to **http://localhost:4200**, or the link the terminal gave you.