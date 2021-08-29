import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Row, Col, Form, label,  } from "react-bootstrap"

const ContactForm = () => {
	const [state, handleSubmit] = useForm("meqvvqyg");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
		<Row className="mb-3">
			<Col md={6}>
				<Form.Label htmlFor="name">
					Name
				</Form.Label>
				<Form.Control
					id="name"
					type="text"
					name="name"
				/>
				<ValidationError
					field="name"
					errors={state.errors}
				/>
			</Col>
			<Col md={6}>
				<Form.Label htmlFor="email">
					Email Address
				</Form.Label>
				<Form.Control
					id="email"
					type="email"
					name="email"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
			</Col>
	  	</Row>
		<Row className="mb-3">
		  <Col md={6}>
				<Form.Label htmlFor="phone">
					Phone
				</Form.Label>
				<Form.Control
					id="phone"
					type="phone"
					name="phone"
				/>
				<ValidationError
					field="phone"
					errors={state.errors}
				/>
			</Col>
			<Col md={6}>
				<Form.Label htmlFor="company">
					Company
				</Form.Label>
				<Form.Control
					id="company"
					type="text"
					name="company"
				/>
				<ValidationError
					field="company"
					errors={state.errors}
				/>
			</Col>
	  	</Row>
		<Row className="mb-3">
			<Col>
				<Form.Label htmlFor="message">
					Message
				</Form.Label>
				<Form.Control
					as="textarea"
					id="message"
					name="message"
					placeholder="Leave a comment here"
					style={{ height: '100px' }}
				/>
				 <ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</Col>
		</Row>
		<Row>
			<Col>
			<button type="submit" disabled={state.submitting} className="btn btn-primary btn-lg">
				Submit
			</button>
			</Col>
		</Row>
    </form>
  );
}

export default ContactForm
