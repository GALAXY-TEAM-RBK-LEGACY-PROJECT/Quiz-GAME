import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  buttonName = "Start the Quiz";
  begin = false;
  complete = false;
  questions: any;
  currentQuestion: any;
  currentIndex: number;
  score: any;
  noAnswer: any;
 
  constructor(){
    this.questions = [
      {
        id: 1,
        question: 'Question 1: Which is the largest country in the world by population?',
        option: [
          {optionid: 1, name: 'India'},
          {optionid: 2, name: 'USA'},
          {optionid: 3, name: 'China'},
          {optionid: 4, name: 'Russia'}
        ],
        answer: 3,
        selected: 0
      }
