import * as React from 'react';
import { ScrollView } from 'react-native';
import AttractionCard from './AttractionCard';

export default function Attractions(props) {
  const [attractions, setAttractions] = React.useState([]);
  React.useEffect(() => {
    fetch("https://www.mecallapi.com/api/en/attractions")
      .then(res => res.json())
      .then(
        (result) => {
          setAttractions(result);
        },
        (error) => {
          console.log(error);
        }
      )
  })
  
  return (
    <ScrollView>
      {attractions.map(attraction => (
        <AttractionCard 
          navigation={props.navigation} 
          key={attraction.id} 
          attraction={attraction} 
        />
      ))}
    </ScrollView>
  );
}