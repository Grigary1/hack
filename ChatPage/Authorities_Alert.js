
// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import * as Notifications from 'expo-notifications';
// import * as Location from 'expo-location';
// import { db } from '/home/grigary/hackathon/SignUpNumber/firebase.js'; // Adjust path as needed
// import { collection, onSnapshot } from 'firebase/firestore';
// import { Audio } from 'expo-av';

// // The notification handler
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// const Authorities_Alert = () => {
//   const [msg, setMsg] = useState([]);
//   const [userLocation, setUserLocation] = useState(null);
//   const [placeName, setPlaceName] = useState('Fetching location...');
//   const soundRef = useRef(null);
//   const msgCollection = collection(db, "Incidents");

//   useEffect(() => {
//     // Load the sound
//     const loadSound = async () => {
//       try {
//         const { sound } = await Audio.Sound.createAsync(
//           require('/home/grigary/hackathon/SignUpNumber/assets/alarm.mp3') // Path to your sound file
//         );
//         soundRef.current = sound;
//       } catch (error) {
//         console.error("Error loading sound:", error);
//       }
//     };

//     // Fetch the user's location
//     const fetchUserLocation = async () => {
//       try {
//         const { status } = await Location.requestForegroundPermissionsAsync();
//         if (status === 'granted') {
//           const location = await Location.getCurrentPositionAsync({});
//           setUserLocation(location.coords);

//           // Convert user's location to place name
//           const reverseGeo = await Location.reverseGeocodeAsync(location.coords);
//           if (reverseGeo.length > 0) {
//             setPlaceName(reverseGeo[0].city || reverseGeo[0].name || 'Unknown Place');
//           }
//         } else {
//           console.error("Location permission not granted");
//         }
//       } catch (error) {
//         console.error("Error fetching user location:", error);
//         setPlaceName('Failed to fetch location');
//       }
//     };

//     loadSound();
//     fetchUserLocation();

//     // Set up the real-time listener
//     const unsubscribe = onSnapshot(msgCollection, (snapshot) => {
//       const filteredData = snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setMsg(filteredData);

//       // Play the sound if the location matches
//       if (userLocation) {
//         filteredData.forEach(async (item) => {
//           if (item.location) {
//             const reverseGeo = await Location.reverseGeocodeAsync({
//               latitude: item.location.latitude,
//               longitude: item.location.longitude,
//             });
//             const place = reverseGeo.length > 0 ? reverseGeo[0].city || reverseGeo[0].name || 'Unknown Place' : 'Unknown Place';
            
//             if (place === placeName) {
//               if (soundRef.current) {
//                 soundRef.current.playAsync();
//               }
//             }
//           }
//         });
//       }
//     }, (error) => {
//       console.error("Error fetching messages:", error);
//     });

//     // Clean up the listener and sound on component unmount
//     return () => {
//       unsubscribe();
//       if (soundRef.current) {
//         soundRef.current.unloadAsync();
//       }
//     };
//   }, [userLocation, placeName]);

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Incident Reports</Text>
//       <Text style={styles.userLocation}>Your Location: {placeName}</Text>
//       {msg.map((item) => (
//         <View key={item.id} style={styles.itemContainer}>
//           <Text>{item.location ? `Lat: ${item.location.latitude}, Lon: ${item.location.longitude}` : 'No location'}</Text>
//           <Text>{item.issue}</Text>
//           <Text>{item.date}</Text>
//           {/* Display other properties from `item` as needed */}
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   userLocation: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   itemContainer: {
//     marginBottom: 10,
//     padding: 10,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
// });

// export default Authorities_Alert;
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Location from 'expo-location';
import { db } from '/home/grigary/hackathon/SignUpNumber/firebase.js'; // Adjust path as needed
import { collection, onSnapshot } from 'firebase/firestore';
import { Audio } from 'expo-av';

// The notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Authorities_Alert = () => {
  const [msg, setMsg] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [placeName, setPlaceName] = useState('Fetching location...');
  const soundRef = useRef(null);
  const msgCollection = collection(db, "Incidents");

  useEffect(() => {
    // Load the sound
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('/home/grigary/hackathon/SignUpNumber/assets/alarm.mp3') // Path to your sound file
        );
        soundRef.current = sound;
      } catch (error) {
        console.error("Error loading sound:", error);
      }
    };

    // Fetch the user's location
    const fetchUserLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const location = await Location.getCurrentPositionAsync({});
          setUserLocation(location.coords);

          // Convert user's location to place name
          const reverseGeo = await Location.reverseGeocodeAsync(location.coords);
          if (reverseGeo.length > 0) {
            setPlaceName(reverseGeo[0].city || reverseGeo[0].name || 'Unknown Place');
          }
        } else {
          console.error("Location permission not granted");
        }
      } catch (error) {
        console.error("Error fetching user location:", error);
        setPlaceName('Failed to fetch location');
      }
    };

    loadSound();
    fetchUserLocation();

    // Set up the real-time listener
    const unsubscribe = onSnapshot(msgCollection, (snapshot) => {
      const filteredData = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMsg(filteredData);

      // Play the sound if the location matches
      if (userLocation) {
        filteredData.forEach(async (item) => {
          if (item.location) {
            const reverseGeo = await Location.reverseGeocodeAsync({
              latitude: item.location.latitude,
              longitude: item.location.longitude,
            });
            const place = reverseGeo.length > 0 ? reverseGeo[0].city || reverseGeo[0].name || 'Unknown Place' : 'Unknown Place';
            
            if (place === placeName) {
              console.log(`Match found: ${placeName}`);
              if (soundRef.current) {
                soundRef.current.playAsync();
              }
            } else {
              console.log(`No match: ${placeName} vs ${place}`);
            }
          }
        });
      }
    }, (error) => {
      console.error("Error fetching messages:", error);
    });

    // Clean up the listener and sound on component unmount
    return () => {
      unsubscribe();
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, [userLocation, placeName]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Incident Reports</Text>
      <Text style={styles.userLocation}>Your Location: {placeName}</Text>
      {msg.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text>{item.location ? `Lat: ${item.location.latitude}, Lon: ${item.location.longitude}` : 'No location'}</Text>
          <Text>{item.issue}</Text>
          <Text>{item.date}</Text>
          {/* Display other properties from `item` as needed */}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  userLocation: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Authorities_Alert;
