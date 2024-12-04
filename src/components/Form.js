import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  })

  const id = React.useId();

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prev => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        id={id + '--firstName'}
        placeholder='First Name'
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        id=""
        placeholder='Last Name'
        value={formData.lastName}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        id=""
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="textarea"
        name="comments"
        id=""
        placeholder='Comments'
        value={formData.comments}
        onChange={handleChange}
      />

      <input
        type="checkbox"
        name="isFriendly"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly</label>
      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          name="employment"
          id="unemployed"
          checked={formData.employment === "unemployed"}
          value={'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="part-time"
          checked={formData.employment === "part-time"}
          value={'part-time'}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="full-time"
          checked={formData.employment === "full-time"}
          value={'full-time'}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <label htmlFor="favColor">What is your favorite color?</label>
      <select
        name="favColor"
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
      >
        <option value="">--Choose Color--</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <button>Send data</button>
    </form>
  )
}