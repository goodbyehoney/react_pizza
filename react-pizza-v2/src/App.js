  import React from 'react';
  import './scss/app.scss';

  import Header from './components/Header';
  import Categories from './components/Categories';
  import Sort from './components/Sort';
  import PizzaBlock from './components/PizzaBlock';

  

  function App() {
    return (
      <div class="wrapper">
        <Header/>
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaBlock title="Мексиканська" price={500}/>
              <PizzaBlock title="Гавайська" price="350"/>
              <PizzaBlock title="Маргарита" price="500"/>
              <PizzaBlock title="Чотири сири" price="240"/>
              <PizzaBlock title="Чотири сири" price="240"/>
              <PizzaBlock title="Маргарита" price="500"/>
              <PizzaBlock title="Гавайська" price="350"/>
              <PizzaBlock title="Чотири сири" price="240"/>
              <PizzaBlock title="Гавайська" price="350"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default App;
