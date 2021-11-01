import React from "react";
import SideImage from "../components/Side-Image";
import ContactForm from "../components/ContactUs-Form";

export default function ContactUsContainer() {
	return (
		<div class="row row-cols-sm-1 row-cols-sm-2 h-100">
			<SideImage />
			<ContactForm />
		</div>
	);
}
