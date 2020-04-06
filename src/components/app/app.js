import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css'

export default class App extends Component {


    maxId = 100;

    state = {
      todoData: [
        this.createTodoItem('Make React App'),
        this.createTodoItem('Drink Coffe'),
        this.createTodoItem('Have a lunch'),
      ],
    };

    createTodoItem(label) {
      return {
        label,
        importan: false,
        done: false,
        id: this.maxId++
      }
    };

    deleteItem = (id) => {
      this.setState(({ todoData }) => {

        const idx = todoData.findIndex((el) => el.id === id )
        
        const newArray = [
          ...todoData.slice(0, idx), 
          ...todoData.slice(idx + 1)
        ];

        return {
          todoData: newArray
        };
      });
    };

    addItem = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({todoData}) => {

        const newArr = [
          ...todoData, 
          newItem
        ];

        return{
          todoData: newArr
        }
      });
    };

    onToggleDone = (id) => {
      this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id);

        const oldItem = todoData[idx];
        const newItem = {... oldItem, 
          done: !oldItem.done};

        const newArray = [
          ...todoData.slice(0, idx),
          newItem,
          ...todoData.slice(idx + 1)
        ];

        return {
          todoData: newArr
        }
      });
    };



    
    // search(items, term) {
    //   if(TextMetrics.length === 0) {
    //     return items;
    //   }


    //   return items.filter((item) => {
    //     return item.label.indexOf(term) > -1;
    //   });
    // }

    render(){
      // const visibleItems = this.search(todoData, term);

      return(
        <div className="todo-app">
          <AppHeader toDo={1} done={2} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
    
         <TodoList todos={visibleItems} 
         onDeleted={ this.deleteItem }/>
         <ItemAddForm onItemAdded={this.addItem} />
       </div>
    );

  }
}