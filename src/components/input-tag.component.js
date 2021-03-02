const InputTag = (props) => {
  return (
    <section className="card_section">
      <label htmlFor="input_field">Search Tag:</label>
      <input
        id="input_field"
        type="text"
        placeholder="search tag here"
        onChange={props.handleChange}
      />
    </section>
  );
};

export default InputTag;
