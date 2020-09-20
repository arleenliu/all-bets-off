/* import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './heatmap.css';
import ReactTooltip from 'react-tooltip';
import * as moment from 'moment';
import * as d3 from 'd3';
 
 */
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  const arr = [];
  for (let idx = 0; idx < count; idx += 1) {
    arr.push(idx);
  }
  return arr;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomValues(count, date = new Date()) {
  return getRange(count).map((index) => {
    return {
      date: shiftDate(date, -index),
      count: getRandomInt(1, 3),
    };
  });
}

export class Heatmap extends React.Component {
  state = {
    values: generateRandomValues(200),
  };

  generateValues = () => {
    this.setState({
      values: generateRandomValues(200),
    });
  };

  getTooltipDataAttrs = (value) => {
    // Temporary hack around null value.date issue
    if (!value || !value.date) {
      return null;
    }
    // Configuration for react-tooltip
    return {
        'data-tip': `User has completed ${value.count} tasks on ${value.date.toISOString().slice(0, 10)}`,
    };
  };

/*   handleClick = (value) => {
    alert(`You clicked on ${value.date.toISOString().slice(0, 10)} with count: ${value.count}`);
  }; */

  render() {
    return (
      <div>
        <div className="row">
            <div className="col-3"></div>
          <div className="col-3 col-sm-6">
            <CalendarHeatmap
              values={this.state.values}
              classForValue={(value) => {
                if (!value) {
                  return 'color-empty';
                }
                return `color-gitlab-${value.count}`;
              }}
              tooltipDataAttrs={this.getTooltipDataAttrs}
              //onClick={this.handleClick}
            />
          </div>
        </div>{' '}
        <div className="text-sm-center mt-4">
          <button className="btn btn-link btn-sm text-secondary" onClick={this.generateValues}>
            Regenerate values
          </button>
        </div>
        <ReactTooltip />
      </div>
    );
  }
}

/*   const randomData = () => {
      let now = moment().endOf('day').toDate()
            let time_ago = moment().startOf('day').subtract(6, 'month').toDate()
            console.log(time_ago)
            let data = d3.timeDays(time_ago, now).map(function (dateElement, index) {
              return {
                    'date': function () {
                      let projectDate = new Date(dateElement.getTime())
                      projectDate.setHours(Math.floor(Math.random() * 24))
                      projectDate.setMinutes(Math.floor(Math.random() * 60))
                      return projectDate
                    }(),
                    'count': Math.floor(Math.random() * 4)
              }
            });
      return {startDate: time_ago, endDate: now, values: data };
  }
  
  function generate(element) {
      return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
          key: value,
        }),
      );
    }


  export default function Heatmap(){
    let data = randomData();

    return(
        <CalendarHeatmap values={data.values}
        classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${value.count}`;
          }
        } />
    );

  } */