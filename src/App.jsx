import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './pages/admin/AdminDashboard';
import Analytics from './pages/admin/Analytics';
import ManageCourses from './pages/admin/ManageCourses';
import ManageExams from './pages/admin/ManageExams';
import ManageUsers from './pages/admin/ManageUsers';
import ManageQuestions from './pages/admin/ManageQuestions';
import ManageInstructors from './pages/admin/ManageInstructors';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentLayout from './pages/student/StudentLayout';
import EnrolledCourses from './pages/student/EnrolledCourses';

import UpcomingExams from './pages/student/UpcomingExams';

import PreviousResults from './pages/student/PreviousResults';
import Profile from './pages/student/Profile';
import StudentAnalytics from './pages/student/studentAnalytics';
import InstructorLayout from './pages/instructor/InstructorLayout';
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import MySubject from './pages/instructor/MySubject';
import InstructorAnalytics from './pages/instructor/Analytics';
import CreateExam from './pages/instructor/CreateExam';
import QuestionBank from './pages/instructor/QuestionBank';
import ViewStudents from './pages/instructor/ViewStudents';
import ViewExams from './pages/instructor/ViewExams';
import EditExam from './pages/instructor/EditExam';
import AssignExam from './pages/instructor/AssignExam';
import MonitorExams from './pages/instructor/MonitorExams';
import AddQuestion from './pages/instructor/AddQuestion';
import StudentPerformance from './pages/instructor/StudentPerformance';
import ViewStudentProfile from './pages/instructor/ViewStudentProfile';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/manage-courses" element={<ManageCourses />} />
        <Route path="/admin/manage-exams" element={<ManageExams />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-questions" element={<ManageQuestions />} />
        <Route path="/admin/manage-instructors" element={<ManageInstructors />} />
        <Route path="/student" element={<StudentLayout><StudentDashboard /></StudentLayout>} />
        <Route path="/student/dashboard" element={<StudentLayout><StudentDashboard /></StudentLayout>} />
        <Route path="/student/enrolled-courses" element={<StudentLayout><EnrolledCourses /></StudentLayout>} />
        
        <Route path="/student/upcoming-exams" element={<StudentLayout><UpcomingExams /></StudentLayout>} />
        
        <Route path="/student/previous-results" element={<StudentLayout><PreviousResults /></StudentLayout>} />
        <Route path="/student/profile" element={<StudentLayout><Profile /></StudentLayout>} />
        <Route path="/student/analytics" element={<StudentLayout><StudentAnalytics /></StudentLayout>} />
        <Route path="/instructor/dashboard" element={<InstructorLayout><InstructorDashboard /></InstructorLayout>} />
        <Route path="/instructor/my-subject" element={<InstructorLayout><MySubject /></InstructorLayout>} />
        <Route path="/instructor/analytics" element={<InstructorLayout><InstructorAnalytics /></InstructorLayout>} />
        <Route path="/instructor/create-exam" element={<InstructorLayout><CreateExam /></InstructorLayout>} />
        <Route path="/instructor/question-bank" element={<InstructorLayout><QuestionBank /></InstructorLayout>} />
        <Route path="/instructor/students" element={<InstructorLayout><ViewStudents /></InstructorLayout>} />
        <Route path="/instructor/view-exams" element={<InstructorLayout><ViewExams /></InstructorLayout>} />
        <Route path="/instructor/edit-exam/:examId" element={<InstructorLayout><EditExam /></InstructorLayout>} />
        <Route path="/instructor/assign-exam" element={<InstructorLayout><AssignExam /></InstructorLayout>} />
        <Route path="/instructor/monitor-exams" element={<InstructorLayout><MonitorExams /></InstructorLayout>} />
        <Route path="/instructor/add-question" element={<InstructorLayout><AddQuestion /></InstructorLayout>} />
        <Route path="/instructor/student-performance/:studentId" element={<InstructorLayout><StudentPerformance /></InstructorLayout>} />
        <Route path="/instructor/student-profile/:studentId" element={<InstructorLayout><ViewStudentProfile /></InstructorLayout>} />
      </Routes>
    </Router>
  );
}

export default App;