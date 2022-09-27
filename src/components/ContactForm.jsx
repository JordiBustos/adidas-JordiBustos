import styled from "styled-components";
import { useState, useContext } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";

const ContactForm = () => {
  const {cartLength} = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const [idForm, setIdForm] = useState(null);
  
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const contactFormCollection = collection(db, "contactForm");
    addDoc(contactFormCollection, form).then((snapshot) => {
      setIdForm(snapshot.id);
    })    
  }

  return (
    <>
    {
      cartLength > 0 ? (
        <Wrapper>
        <Title>Contact Info</Title>
        <Form onSubmit={submitHandler}>
          <label for="name">Name</label>
          <Input onChange={changeHandler} name="name" id="name" type="text" placeholder="Name" value={form.name} />
          
          <label for="email">Email</label>
          <Input onChange={changeHandler} id="email" name="email" type="email" placeholder="Email" value={form.email}/>
          
          <label for="phone">Phone</label>
          <Input onChange={changeHandler} name="phone" id="phone" type="text" placeholder="Phone" value={form.phone} />
          <Submit type="submit" value="Send" />
        </Form>
        <p>Your info will be saved and you will be contacted soon :D</p>
      </Wrapper>
      ) : (
        <>

        </>
      )
    }
    </>
  );
}

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

const Title = styled.h1`
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
  height: 2rem;
  margin: 0.5rem;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  background-color: #cecece;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export default ContactForm;