import HomePage from './components/layout'
import LoginPage from './components/Login'
import LivePage from './components/Live'
import TestPage from './components/TestPage'
import QuestionsPage from './components/Questions';
import MaterialsPage from './components/Materials'
import sign from './components/sign';
export const routes = {
  '/home': {
    component: HomePage,
  },
  '/login': {
    component: LoginPage,
  },
  '/live': {
    component: LivePage,
  },
  '/testpage': {
    component: TestPage,
  },
  '/questions':{
    component:QuestionsPage,
  },
  '/materials':{
    component:MaterialsPage,
  },
  '/sign':{
    component:sign
  }
}