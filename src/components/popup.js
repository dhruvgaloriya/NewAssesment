import React, { Component } from "react";
import "./popup.css";
export default class Popup extends Component {
	state = {
		popupHeader: "Looks like you don't have an account"
	};
	refreshPage() {
		window.location.reload();
	}
	render() {
		return (
			<div className="popup">
				<div className="popup_inner">
					<button
						className="btn btn-primary close-button"
						onClick={this.props.closePopup}
					>
						close me
					</button>

					<div className="card">
						<div className="container">
							<img
								src={this.props.url}
								className="image-card"
								alt={this.props.name}
							/>
							<div className="card-body">
								<h5 className="card-title">{this.props.name}</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
