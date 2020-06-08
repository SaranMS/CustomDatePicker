import React,{Component} from 'react';

class DatePicker extends Component{
    constructor() {
        super()
        this.state = {
          
        }
        this.getDates = this.getDates.bind(this)
        this.dateFunc = this.dateFunc.bind(this)
    }
    
        handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
        dateFunc(){
        var curr = new Date;
        console.log(curr)
        var loop = new Date(curr - 2*864e5)
        console.log("loop"+new Date(loop))
        var end = new Date(curr.setDate(curr.getDate()+4))
        console.log("end"+end)
        var daysOfWeek = [];
          var dates = this.getDates(loop, end);                                                                                                           
          dates.forEach(function(date) {
            console.log(date.toString().substring(0,10));
            daysOfWeek.push(date.toString().substring(0,10));
            console.log("SSSS"+daysOfWeek);
          });
          return daysOfWeek;

    }

    getDates(startDate, endDate) {
        var dates = [],
            currentDate = startDate,
            addDays = function(days) {
              var date = new Date(this.valueOf());
              date.setDate(date.getDate() + days);
              return date;
            };
        while (currentDate <= endDate) {
          dates.push(currentDate);
          currentDate = addDays.call(currentDate, 1);
        }
        return dates;
      }

render(){
    return(
        <>
        
            {/* <div id="sectionDetailsDate" className="container">
                        <table>
                            <tr>

                                <td>
                                    <input type="radio" id="control_02" name="select" value={this.state.date}/>
                                    <label for="control_02">
                                        <h4>{this.dateFunc()[0]}</h4>
                                    </label>
                                </td>

                                <td>
                                    <input type="radio" id="control_03" name="select"  value={this.state.date}/>
                                    <label for="control_03">
                                        <h4>{this.dateFunc()[1]}</h4>
                                    </label>
                                </td>

                                <td>
                                    <input type="radio" id="control_04" name="select"  value={this.state.date}/>
                                    <label for="control_04">
                                        <h4>{this.dateFunc()[2]}</h4>
                                    </label>
                                </td>

                                <td>
                                    <input type="radio" id="control_05" name="select"  value={this.state.date}/>
                                    <label for="control_05">
                                        <h4>{this.dateFunc()[3]}</h4>
                                    </label>
                                </td>

                                <td>
                                    <input type="radio" id="control_06" name="select"  value={this.state.date}/>
                                    <label for="control_06">
                                        <h4>{this.dateFunc()[4]}</h4>
                                    </label>
                                </td>

                                <td>
                                    <input type="radio" id="control_07" name="select" value={this.state.date}/>
                                    <label for="control_07">
                                        <h4>{this.dateFunc()[5]}</h4>
                                    </label>
                                </td>

                                <td>
                                    <input type="radio" id="control_08" name="select"  value={this.state.date}/>
                                    <label for="control_08">
                                        <h4>{this.dateFunc()[6]}</h4>
                                    </label>
                                </td>


                            </tr>
                        </table>

                    </div> */}
            
            <div id="sectionDetailsDate" className="container">
                            <table>
                                <tbody>
                                    <tr>
                                        {
                                            this.dateFunc().map(
                                                (day, i) =>
                                                    <td key={day + i}>
                                                        <input type="radio" id={day + i}
                                                            name="date"
                                                            onChange={this.handleChange}
                                                            value={day} />
                                                        <label htmlFor={day + i}>
                                                            <h4>{day}</h4>
                                                        </label>
                                                    </td>
                                            )
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        
        </>
    )
}

}
export default DatePicker
