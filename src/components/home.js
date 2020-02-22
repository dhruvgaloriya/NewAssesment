import React, { Component } from "react";
import data from "../data.json";
import "./home.css";
import Popup from "./popup";
class home extends Component {
	state = {
		showPopup: false
	};
	togglePopup = () => {
		this.setState({
			showPopup: !this.state.showPopup
		});
	};
	render() {
		return (
			<React.Fragment>
				<div className="row">
					{data.map((item, index) => (
						<div className="col-md-4 mt-4" key={index}>
							<div className="card">
								<div className="container">
									<img
										src={item["image_url"]}
										className="image-card"
										alt={item["name"]}
									/>
									<div className="card-body">
										<h5 className="card-title">{item["name"]}</h5>
									</div>
									<button
										className="middle btn btn-primary"
										onClick={this.togglePopup.bind(this)}
									>
										Edit
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{this.state.showPopup ? (
					<Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
				) : null}
			</React.Fragment>
		);
	}
}

export default home;
