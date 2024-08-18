// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { db } from '/home/grigary/hackathon/SignUpNumber/firebase.js'; // Adjust path as needed
// import { collection, onSnapshot } from 'firebase/firestore';
// import { Audio } from 'expo-av';

// const Authorities = () => {
//   const [msg, setMsg] = useState([]);
//   const [sound, setSound] = useState(null);
//   const msgCollection = collection(db, "Incidents");
//   const soundRef = useRef(null); // Create a ref for the sound

//   useEffect(() => {
//     // Load the soundg
//     const loadSound = async () => {
//       const { sound } = await Audio.Sound.createAsync(
//         require('/home/grigary/hackathon/SignUpNumber/assets/alarm.mp3') // Path to your sound file
//       );
//       soundRef.current = sound; // Save the sound instance in the ref
//     };
//     loadSound();

//     // Set up the real-time listener
//     const unsubscribe = onSnapshot(msgCollection, (snapshot) => {
//       const filteredData = snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setMsg(filteredData);

//       // Play the sound when new data is received
//       if (soundRef.current) {
//         soundRef.current.playAsync();
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
//   }, []);

//   return (
//     <View style={styles.container}>
//       {msg.map((item) => (
//         <View key={item.id} style={styles.itemContainer}>
//           <Text>{item.location}</Text>
//           <Text>{item.issue}</Text>
//           <Text>{item.date}</Text>
//           {/* Display other properties from `item` as needed */}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 100,
//     backgroundColor: '#fff',
//   },
//   itemContainer: {
//     marginBottom: 10,
//     padding: 10,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
// });

// export default Authorities;

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '/home/grigary/hackathon/SignUpNumber/firebase.js'; // Adjust path as needed
import { collection, onSnapshot } from 'firebase/firestore';
import { Audio } from 'expo-av';

const Authorities = () => {
  const [msg, setMsg] = useState([]);
  const [sound, setSound] = useState(null);
  const msgCollection = collection(db, "Incidents");
  const soundRef = useRef(null); // Create a ref for the sound

  useEffect(() => {
    // Load the sound
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('/home/grigary/hackathon/SignUpNumber/assets/alarm.mp3') // Path to your sound file
      );
      soundRef.current = sound; // Save the sound instance in the ref
    };
    loadSound();

    // Set up the real-time listener
    const unsubscribe = onSnapshot(msgCollection, (snapshot) => {
      const filteredData = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMsg(filteredData); // Update the state to trigger a re-render

      // Play the sound when new data is received
      if (soundRef.current) {
        soundRef.current.playAsync();
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
  }, []); // Empty dependency array to ensure this effect runs once on mount

  return (
    <View style={styles.container}>
      {msg.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text>{item.location}</Text>
          <Text>{item.issue}</Text>
          <Text>{item.date}</Text>
          {/* Display other properties from `item` as needed */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Authorities;
