# **Maze Generator and Solver**

This project is a **web-based application** designed to generate, solve, and interact with mazes. It provides various algorithms for maze generation, visualization of solutions, and options to download the maze. The application is user-friendly and visually appealing, making it suitable for enthusiasts and educators.

---

## **Features**

### 1. **Maze Generation**
   - **Randomized DFS (Depth-First Search)**:
     - Generates intricate and randomized mazes with a recursive backtracking algorithm.
   - **Kruskal's Algorithm**:
     - Produces unique mazes using a minimum spanning tree approach.

### 2. **Maze Solver**
   - Visualizes the solution path for any generated maze.
   - Allows users to explore how algorithms find paths through complex mazes.

### 3. **Grid Reset**
   - Resets the maze grid to its initial state.
   - Removes all walls, paths, and markings, providing a clean slate for new mazes.

### 4. **Maze Export**
   - Download the maze in a shareable format.
   - Exports can include solutions or just the maze layout.

### 5. **UI**
   - Dark theme for a modern and visually comfortable experience.

---

## **Tech Stack**

- **Frontend**:
  - **React**: For building a dynamic and interactive user interface.
  - **Recoil**: For state management of grid dimensions and maze states.
  - **Tailwind CSS**: For responsive and clean styling.

- **Development Tools**:
  - **JavaScript**: Application logic and component design.
  - **Vite**: For fast builds and optimized development workflow.

---

## **Usage**

### **1. Clone the Repository**
   ```bash
   git clone https://github.com/Bit2b/Maze-Builder
   cd Maze-Builder
   ```

### **2. Install Dependencies**
   ```bash
   npm install
   ```

### **3. Run the Application**
   ```bash
   npm run dev
   ```

### **4. Open the Application**
   - Navigate to `http://localhost:3000` in your browser.

---

## **Application Structure**

### **Navbar**
- The control panel for all interactions:
  - Buttons for maze generation, solving, resetting, and downloading.
  - A fixed sidebar for easy navigation.

### **Grid**
- A dynamic, interactive grid for displaying the maze.
- Highlights walls, paths, and start/end points.

### **Algorithms**
- **Maze Generation**:
  - Depth-First Search
  - Kruskal's Algorithm
- **Maze Solving**:
  - Solution visualized step-by-step on the grid.

---

## **Customization**

### **Styling**
- Modify Tailwind classes in the components for a custom theme.
- Update the `tailwind.config.js` file to redefine global styling variables.

### **Algorithms**
- Add new maze generation or solving algorithms by creating reusable components.
- Integrate new algorithms into the application via the state management system.

### **Grid Size**
- Adjust the grid dimensions dynamically using the controls or configuration in the app.

---


## **Future Enhancements**
- Add more maze generation algorithms like Prim's or Binary Tree.
- Provide additional solver options like A* or Dijkstra's Algorithm.
- Add the ability to import mazes from external files.
- Include a tutorial mode for new users.

---


## **Acknowledgments**
- **Algorithms**: Inspired by classic maze-generation and pathfinding techniques.
- **React and Tailwind CSS**: For providing a robust and responsive development experience.