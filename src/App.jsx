import { useState } from "react";
import React from "react";
import logo from "./bugsBunny.png";
import "./App.css";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import DoughnutChart from "./DoughnutChart";
import datajs from "./data.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



 

const App = () => {
  const [page, setPage] = useState(0);
  const [level, setLevel] = useState(1);

  const newData = datajs[level].gabachang;
  const data = {
    labels: ['First Attempt', 'Second Attempt', 'Third Attempt', 'Fourth Attempt',],
    datasets: [
      {
        label: '# of Votes',
        data: newData,
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="app__main">
      <div className="app__nav">
        <div className="app__nav__top">
          <div className="app__logo__container">
            <img src={logo} alt="" className="logo__img" />
            <p className="app__heading">BucksBunny</p>
          </div>
          <div className="app__nav__select">
            <p
              className={`app__nav__p ${page === 0 ? "underline" : null}`}
              onClick={() => setPage(0)}
            >
              Analytics
            </p>
            <p
              className={`app__nav__p ${page === 1 ? "underline" : null}`}
              onClick={() => setPage(1)}
            >
              Add Item
            </p>
            <p
              className={`app__nav__p ${page === 2 ? "underline" : null}`}
              onClick={() => setPage(2)}
            >
              Edit Course
            </p>
          </div>
        </div>
        <div className="app__nav__bottom">
          <hr></hr>
          <p className="logout">Logout</p>
        </div>
      </div>

      <div className="app__contents">
        {page === 0 && <div className="app__analytics">
          <div className="analytics__headings">Analytics</div>
          <div className="analytics__sections">
            {datajs.map((datum, index) => (
              <div
                className={`${
                  level === index
                    ? "analytics_section__div__active"
                    : "analytics_section__div"
                }`}
                onClick={() => setLevel(index)}
              >
                Item{index + 1}
              </div>
            ))}
            {/* <div className="analytics_section__div__active">Item1</div>
            <div className="analytics_section__div">Item2</div>
            <div className="analytics_section__div">Item3</div>
            <div className="analytics_section__div">Item4</div>
            <div className="analytics_section__div">Item5</div>
            <div className="analytics_section__div">Item6</div>
            <div className="analytics_section__div">Item7</div>
            <div className="analytics_section__div">Item8</div>
            <div className="analytics_section__div">Item9</div>
            <div className="analytics_section__div">Item10</div>
            <div className="analytics_section__div">Item11</div>
            <div className="analytics_section__div">Item12</div>
            <div className="analytics_section__div">Item13</div>
            <div className="analytics_section__div">Item14</div> */}
          </div>
          <div className="question">Question: {datajs[level].question}</div>
          <div className="analytics__details">
            <div className="analytics__details__items__active">correct</div>
            <div className="analytics__details__items">watched</div>
            <div className="analytics__details__items">left</div>
            <div className="analytics__details__items">failed</div>
          </div>
          <div className="analytics__main">
            <div className="analytics__text">
              <h1 style={{ marginTop: "5rem", marginBottom: "2rem" }}>
                Number of Attempts till correct
              </h1>
              This chart gives us details about what distribution of users were
              able to attempt the correct answer in the first attempt. This
              provides the course creators with an insight on what aspeccts of
              the course they have to improve.
            </div>
            <div style={{ height: "400px", width: "400px" }}>
              <Doughnut data={data} />
            </div>
          </div>
        </div>}
        {page === 1 && (
          <div className="app__addItems">
            <div className="app__addItems__heading">AddItems</div>
            <div className="addItems__form">
              <Input placeholder="Item Name English" />
              <Input placeholder="Item Name Hindi" />
              <Input placeholder="Item Name Punjabi " />
              <Input placeholder="Item Video Link English" />
              <Input placeholder="Item Video Link Hindi" />
              <Input placeholder="Item Video Link Punjabi" />
              <Input placeholder="Item Content English" />
              <Input placeholder="Item Content Hindi" />
              <Input placeholder="Item Content Punjabi" />
              <Input placeholder="Item Question English" />
              <Input placeholder="Item Question Hindi" />
              <Input placeholder="Item Question Punjabi" />
              <Input placeholder="Item Option1 English" />
              <Input placeholder="Item Option1 Hindi" />
              <Input placeholder="Item Option1 Punjabi" />
              <Input placeholder="Item Option2 English" />
              <Input placeholder="Item Option2 Hindi" />
              <Input placeholder="Item Option2 Punjabi" />
              <Input placeholder="Item Option3 English" />
              <Input placeholder="Item Option3 Hindi" />
              <Input placeholder="Item Option3 Punjabi" />
              <Input placeholder="Item Option4 English" />
              <Input placeholder="Item Option4 Hindi" />
              <Input placeholder="Item Option4 Punjabi" />
              <Input placeholder="Item Correct Option English" />
              <Input placeholder="Item Correct Option Hindi" />
              <Input placeholder="Item Correct Option Punjabi" />
              <div className=""></div>
              <Button colorScheme="blue">Submit</Button>
              <div className=""></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
