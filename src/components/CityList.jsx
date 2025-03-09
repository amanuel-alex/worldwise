import styles from "./CityList.module.css";

function CityList({ cities, loading }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
      ;
    </>
  );
}

export default CityList;
