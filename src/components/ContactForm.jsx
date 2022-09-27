import styled from "styled-components";
import { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const ContactForm = ({ items, total }) => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [idForm, setIdForm] = useState(null);

	const changeHandler = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const object = {
			buyer: form,
			date: new Date(),
			items: items,
			total: total,
		};

		const db = getFirestore();
		const orders = collection(db, "orders");
		addDoc(orders, object).then((snapshot) => {
			setIdForm(snapshot.id);
		});
	};

	return (
		<>
			{idForm === null ? (
				<Wrapper>
					<Title>Fill your contact information</Title>
					<Form onSubmit={submitHandler}>
						<label htmlFor="name">Name</label>
						<Input
							onChange={changeHandler}
							name="name"
							id="name"
							type="text"
							placeholder="Name"
							value={form.name}
						/>

						<label htmlFor="email">Email</label>
						<Input
							onChange={changeHandler}
							id="email"
							name="email"
							type="email"
							placeholder="Email"
							value={form.email}
						/>

						<label htmlFor="phone">Phone</label>
						<Input
							onChange={changeHandler}
							name="phone"
							id="phone"
							type="text"
							placeholder="Phone"
							value={form.phone}
						/>
						<Submit type="submit" value="Buy!" />
					</Form>
					<p>
						Your info will be saved and you will be contacted soon
						:D
					</p>
				</Wrapper>
			) : (
				<Paragraph>
					Track your buy with this id: <span>{idForm}</span>
				</Paragraph>
			)}
		</>
	);
};

const Paragraph = styled.p`
	font-size: 1.5rem;
	text-align: center;
	margin: 1rem;

	span {
		color: #e32b2b;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 100%;
	width: 100%;
	background-color: #fff;
	border-radius: 10px;
	padding: 20px;
`;

const Title = styled.h2`
	font-size: 2rem;
	text-align: center;
	margin: 1rem;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;
	height: 100%;
	width: 60%;

	label {
		margin: 0.2rem 0.5rem;
	}
`;

const Input = styled.input`
	width: 100%;
	height: 2rem;
	margin: 0.5rem;
	border-radius: 5px;
	border: 1px solid black;
	padding: 0.5rem;
`;

const Submit = styled.input`
	width: 100%;
	height: 3rem;
	margin: 0.5rem;
	border-radius: 5px;
	border: none;
	padding: 0.5rem;
	background-color: #e32b2b;
	cursor: pointer;
	color: white;
	font-size: 1.2rem;
	&:hover {
		background-color: #e0e0e0;
		color: black;
	}
`;

export default ContactForm;
