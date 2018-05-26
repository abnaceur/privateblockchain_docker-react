
import React, {Component} from "react";
import {Redirect, Link, Route, Switch} from "react-router-dom";
import Header from './Header';
import Table from './Table';
import axios from 'axios';
import BookingPage from './BookingPage';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms : [],
        }
    }


    componentWillMount() {
        axios.get(`http://online.stationf.co/tests/rooms.json`)
        .then(res => {
            this.setState({
                rooms: res.data.rooms,
            });
    });
    }
    

    render() {
        
        return (
            <div>
            <aside className="main-sidebar">

                <section className="sidebar">
                    <form action="#" method="get" class="sidebar-form">
                        <div class="input-group">
                            <input type="text" name="q" class="form-control" placeholder="Search..."/>
                <span class="input-group-btn">
              <button type="submit" name="search a room" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
                        </div>
                    </form>

                    <div className="col-md-10">
                    <form>
                    <ul class="sidebar-menu" data-widget="tree">
                        <li className="header">Filtered by</li>
                    </ul>
                    <div className="form-group row">
                            <label className="text-1">Capacity</label>
                        <select className="form-control" id="dialectOrigin" key="dialectOrigin" name="dialectOrigin"
                                                onChange={this.handleChange} required>
                                                <option>Choose a Capacity...</option>
                                            <option>Between 5 and 10</option>
                                            <option>Between 10 and 20</option>
                                            <option>Between 20 and 30</option>
                                        </select>
                 

                        </div>
                        <div className="form-group row">
                            <label className="text-1">Equipments</label>
                        <select className="form-control" id="dialectOrigin" key="dialectOrigin" name="dialectOrigin"
                                                onChange={this.handleChange} required>
                                            <option>Choose an Equipment...</option>
                                            <option>TV</option>
                                            <option>Recto-projector</option>
                                            <option>Nothing</option>
                                        </select>
                        </div>
                        <div className="form-group row">
                            <button type="submit" className="form-control btn btn-primary">Start filter</button>
                        </div>
 

                    </form>
                    </div>
                </section>
            </aside>
            {this.props.page == "table" ?
            <Table 
                rooms={this.state.rooms}
            /> :
            null
            }

            {this.props.page == "booking" ?
            <BookingPage /> 
            :
            null
            }
            </div>
        );
    }
}

export default Sidebar;