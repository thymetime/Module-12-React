import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9eb7ac23-e053-4c91-89a5-873ab40a88c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(console.log(data.success ? "Success!" : "Error"));
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 class="form-item form-item_title">Let's work!</h2>

      <label for="name" class="form-item form-item_label">Name:</label>
      <input type="text" name="name" class="form-item form-item_input" required/>

      <label for="email" class="form-item form-item_label">Email:</label>
      <input type="email" name="email" class="form-item form-item_input" required/>

      <label for="message" class="form-item form-item_label">Message:</label>
      <textarea label="Message" name="message" class="form-item form-item_input" required></textarea>
      
      <button>Submit</button>
      <p 
        className={{result} === "Success!"  ? 'submit-success' : 'submit-error'} type="submit">
        {result}
      </p>
    </form>
  );
}
