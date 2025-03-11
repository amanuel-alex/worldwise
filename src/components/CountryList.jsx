import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cities, loading }) {
  if (loading) return <Spinner />;

  if (!cities.length)
    return (
      <>
        <Message message="Add your country by clicking on the map" />
      </>
    );

  // Reduce to get unique countries
  const countries = cities.reduce((arr, city) => {
    if (!arr.some((el) => el.country === city.country)) {
      arr.push({ country: city.country, emoji: city.emoji });
    }
    return arr;
  }, []);

  return (
    <>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <CountryItem key={country.country} country={country} />
        ))}
      </ul>
    </>
  );
}

export default CountryList;
