import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Component, useState } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { DISHES } from '../components/shared/dishes';
import { PROMOTIONS } from '../components/shared/promotions';
import { LEADERS } from '../components/shared/leaders';
import { COMMENTS } from '../components/shared/comments';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }
  
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    const DishWithId = () => {
      const { dishId } = useParams()
      return (
        <DishDetail
          dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))} />

      );

    }

    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/aboutus' element={<About leaders={this.state.leaders} />} />
          <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' element={<DishWithId />} />
          <Route path='/contactus' element={<Contact />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>


        <Footer />
      </div>
    );
  }

}

export default Main;
