import CityItem from "./CityItem.jsx";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, loading }) {
  if (loading) return <Spinner />;
  if (!cities.length)
    return (
      <>
        <Message message="add your  country by clicking on the map " />
      </>
    );
  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem key={city.id} city={city} />
        ))}
      </ul>
      ;
    </>
  );
}

export default CityList;
