/* eslint-disable react/prop-types */
const Detail = ({ weatherKey, weatherValue }) => {
  return (
    <div>
      <p>{weatherKey}</p>
      <span>{weatherValue}</span>
    </div>
  );
};

export default Detail;
