import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'

import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import Author from '../views/Author.vue'

import MyAccount from '../views/dashboard/MyAccount.vue'
import CreateCourse from '../views/dashboard/CreateCourse.vue'

import aboutus from '../views/attendance/aboutus.vue'
import admin_add_student from '../views/attendance/admin_add_student.vue'
import admin_approve_student from '../views/attendance/admin_approve_student.vue'
import admin_attendance from '../views/attendance/admin_attendance.vue'
import admin_dashboard_cards from '../views/attendance/admin_dashboard_cards.vue'
import admin_dashboard from '../views/attendance/admin_dashboard.vue'
import admin_fee from '../views/attendance/admin_fee.vue'
import admin_notice from '../views/attendance/admin_notice.vue'
import admin_student from '../views/attendance/admin_student.vue'
import admin_take_attendance from '../views/attendance/admin_take_attendance.vue'
import admin_update_student from '../views/attendance/admin_update_student.vue'
import admin_view_attendance_ask_date from '../views/attendance/admin_view_attendance_ask_date.vue'
import admin_view_attendance_page from '../views/attendance/admin_view_attendance_page.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/courses/:slug',
    name: 'Course',
    component: Course
  },
  {
    path: '/authors/:id',
    name: 'Author',
    component: Author
  },
  {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/dashboard/create-course',
    name: 'CreateCourse',
    component: CreateCourse
  },

  /* --------------admin----------------- */
  {
    path: '/attendance/about-us',
    name: 'aboutus',
    component: aboutus
  },
  {
    path: '/attendance/admin-add-student',
    name: 'admin_add_student',
    component: admin_add_student
  },
  {
    path: '/attendance/admin-approve-student',
    name: 'admin_approve_student',
    component: admin_approve_student
  },
  {
    path: '/attendance/admin-attendance',
    name: 'admin_attendance',
    component: admin_attendance
  },
  {
    path: '/attendance/admin-dashboard-cards',
    name: 'admin_dashboard_cards',
    component: admin_dashboard_cards
  },
  {
    path: '/attendance/admin-dashboard',
    name: 'admin_dashboard',
    component: admin_dashboard
  },
  {
    path: '/attendance/admin-fee',
    name: 'admin_fee',
    component: admin_fee
  },
  {
    path: '/attendance/admin-notice',
    name: 'admin_notice',
    component: admin_notice
  },
  {
    path: '/attendance/admin-student',
    name: 'admin_student',
    component: admin_student
  },
  {
    path: '/attendance/admin-take-attendance',
    name: 'admin_take_attendance',
    component: admin_take_attendance
  },
  {
    path: '/attendance/admin-update-student',
    name: 'admin_update_student',
    component: admin_update_student
  },
  {
    path: '/attendance/admin-view-attendance-ask-date',
    name: 'admin_view_attendance_ask_date',
    component: admin_view_attendance_ask_date
  },
  {
    path: '/attendance/admin-view-attendance-page',
    name: 'admin_view_attendance_page',
    component: admin_view_attendance_page
  },

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
