import React from 'react';
import {Route, Switch, Redirect} from "react-router";
import {BrowserRouter} from "react-router-dom";

import TimeTable, { TimeTableHeader } from "components/TimeTable";

import './App.css';


const App = () => (
	<BrowserRouter >
		<div className="layout-wrapper layout-offset">
			<div className="page-wrapper layout">
				<div className="page-wrapper__content">
					<Switch>
						<Route path={'/timetable/arrival'} render={() => <TimeTable direction="arrival" /> } exact />
						<Route path={'/timetable/departure'} render={() => <TimeTable direction="departure" /> } exact />
						<Redirect from={'/timetable/'} to={'/timetable/departure/'} exact />

						<Route
							path="*"
							render={(props) => (
							<div className="page-layout">
								<TimeTableHeader props={props}/>
								<div>Page not found</div>
							</div>
						)}
							exact
						/>

					</Switch>
				</div>
			</div>
		</div>
	</BrowserRouter>
);

export default App;
