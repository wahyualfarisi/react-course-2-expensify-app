import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setFilterText, sortByAmount, sortByDate, setStarDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            calendarFocused: null
        }

        this.onDateChange  = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);

    }
 

   onDateChange = ({startDate, endDate}) => {
    this.props.dispatch(setStarDate(startDate) );
    this.props.dispatch(setEndDate(endDate));
   }

   onFocusChange = (calendarFocus) => {
    this.setState( () => ({ calendarFocus }))
   } 

    render(){
        return(
            <div>
            <input type="text" value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(setFilterText(e.target.value) );
            }} />
            <select
            value ={this.props.filters.sortBy}
            onChange={(e) => {
                if(e.target.value === 'date'){
                    this.props.dispatch(sortByDate() )
                }else if(e.target.value === 'amount'){
                    this.props.dispatch(sortByAmount())
                }         
            }} >
                <option value="date" >date</option>
                <option value="amount" >amount</option>
            </select>
            
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDateChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            
            />
    
    
    
        </div>
        )
    }
    
}


const mapStateToProps = (state) => {
    return{
        filters: state.filters 
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);