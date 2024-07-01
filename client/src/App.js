// App.js

import React from 'react';

import Layout from './Layout'; 
import RecipeList from './RecipeList'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import RecipeForm from './RecipeForm';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import DeleteRecipe from './DeleteRecipe';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Layout className='d-flex'>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/new" element={<RecipeForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/delete" element={<DeleteRecipe />} />
            </Routes>
          </Layout>
        </main>
      </div>
    </Router>
  );
}

export default App;

// // // App.js

// // import React from 'react';

// // import AppNavbar from './Navbar'; // Import Navbar component

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <h1>Recipe Sharing App</h1>
// //       </header>
// //       <main>
// //         <AppNavbar /> {/* Render Navbar component */}
// //         <div className="container mt-4">
// //           {/* Your other components or content */}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RecipeList from './RecipeList';
// import RecipeForm from './RecipeForm';
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';
// import AppNavbar from './Navbar'
// import PrivateRoute from './PrivateRoute'; // Assuming PrivateRoute is correctly implemented

// function App() {
//   return (
//     <Router>
//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<RecipeList />} />
//           <Route path="/add" element={<RecipeForm />} />
//           <Route path="/delete/:id" element={<RecipeList />} />
//           {/* <PrivateRoute path="/add" element={<RecipeForm />} />
//           <PrivateRoute path="/delete/:id" element={<RecipeList />} /> */}
//           <Route path="/login" element={<LoginForm />} />
//           <Route path='/register' element={<RegisterForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
