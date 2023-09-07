import HomePage from "./components/pages/HomePage.vue";
import MovieDetailPage from "./components/pages/MovieDetailPage.vue";
import NewMovieDetailPage from "./components/pages/NewMoviePage.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/MovieDetail/:id",
    name: "MovieDetail",
    component: MovieDetailPage
  },
  {
    path: "/NewMovie",
    name: "NewMovie",
    component: NewMovieDetailPage
  }
];
