// import { Routes, Route } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group'
import Layout from "./components/Layout/Layout";
// import HomePage from './pages/HomePage/HomePage';
// import AboutPage from './pages/AboutPage/AboutPage';
// import EducationPage from './pages/EducationPage/EducationPage';
// import SkillsPage from './pages/SkillsPage/SkillsPage';
// import ProjectPage from './pages/ProjectPage/ProjectPage';
// import ContactsPage from './pages/ContactsPage/ContactsPage';
import AnimatedRoutes from "./components/Animated/AnimatedRoutes";


function App() {
  return (
    <Layout>
      <AnimatedRoutes />
    </Layout>
  );
}

// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/about' element={<AboutPage />} />
//         <Route path='/education' element={<EducationPage />} />
//         <Route path='/skills' element={<SkillsPage />} />
//         <Route path='/project' element={<ProjectPage />} />
//         <Route path='/contacts' element={<ContactsPage />} />
//       </Routes>
//     </Layout>
//   );
// }

export default App;
