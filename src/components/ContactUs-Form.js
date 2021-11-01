import React from "react";

export default function ContactForm() {
	return (
		<div className="col-sm-7 col-md-7" id="form">
			<h3>Contact Us</h3>
			<form id="contact-form">
				<div className="form-input validation">
					<label className="form-label" htmlFor="fullname">
						Full Name <span className="text-danger">*</span>
					</label>
					<input
						className="form-data form-control mb-3"
						type="text"
						name="fullname"
						id="fullname"
						placeholder="Your Full Name Here..."
						required
					/>
				</div>
				<div className="form-input validation">
					<label className="form-label" htmlFor="email">
						Email Address <span className="text-danger">*</span>
					</label>
					<input
						className="form-data form-control mb-3"
						type="email"
						name="email"
						id="email"
						placeholder="example@domain.com"
						required
					/>
				</div>
				<div className="form-input validation">
					<label className="form-label" htmlFor="phone">
						Phone Number <span className="text-danger">*</span>
					</label>
					<input
						className="form-data form-control mb-3"
						type="tel"
						name="phone"
						id="phone"
						placeholder="08573890xxxxx"
						minLength={10}
						maxLength={15}
						required
					/>
				</div>
				<div className="form-input">
					<label className="form-label" htmlFor="nationality">
						Nationality
					</label>
					<select
						className="form-data form-select mb-3"
						name="nationality"
						id="nationality"
					>
						<option disabled defaultValue="Selected">
							Selected
						</option>
						<option value="Indonesia">Indonesia</option>
						<option value="Singapore">Singapore</option>
						<option value="Japan">Japan</option>
						<option value="Russia">Russia</option>
					</select>
				</div>
				<div className="form-input">
					<label className="form-label" htmlFor="message">
						Message
					</label>
					<textarea
						className="form-data form-control mb-3"
						name="message"
						id="message"
						cols={30}
						rows={5}
						placeholder="Your Message Here..."
						defaultValue={""}
					/>
				</div>
				<button
					type="submit"
					className="btn text-white px-4 mt-2"
					id="submit-btn"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
