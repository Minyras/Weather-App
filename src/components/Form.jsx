/* eslint-disable react/prop-types */
import searchIcon from "../img/search.png";

const Form = ({ handleSubmit, cityRef }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Another location" ref={cityRef} />
      <button>
        <img src={searchIcon} alt="Search" />
      </button>
    </form>
  );
};

export default Form;
