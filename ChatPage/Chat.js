
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
// import { collection, addDoc, onSnapshot } from 'firebase/firestore';
// import { db } from '/home/grigary/hackathon/SignUpNumber/firebase.js'; // Adjust the path as needed

// const ChatScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Reference to the 'messages' collection
//     const messagesCollection = collection(db, 'messages');

//     // Real-time listener
//     const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
//       const messagesArray = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setMessages(messagesArray);
//     }, (error) => {
//       console.error("Error fetching messages:", error);
//     });

//     // Clean up the listener
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const handleSend = async () => {
//     if (message.trim()) {
//       try {
//         // Reference to the 'messages' collection
//         const messagesCollection = collection(db, 'messages');

//         // Add a new message
//         await addDoc(messagesCollection, {
//           text: message,
//           timestamp: new Date(),
//         });

//         setMessage('');
//       } catch (error) {
//         console.error("Error adding message:", error);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.messageContainer}>
//             <Text style={styles.messageText}>{item.text}</Text>
//           </View>
//         )}
//         inverted
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={message}
//           onChangeText={setMessage}
//           placeholder="Type a message..."
//         />
//         <Button title="Send" onPress={handleSend} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   messageContainer: {
//     padding: 10,
//     marginVertical: 5,
//     backgroundColor: '#f1f1f1',
//     borderRadius: 5,
//   },
//   messageText: {
//     fontSize: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     borderRadius: 5,
//   },
// });

// export default ChatScreen;
// Chat.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { db } from '/home/grigary/hackathon/SignUpNumber/firebase.js'; // Adjust path as needed
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { auth } from '/home/grigary/hackathon/SignUpNumber/firebase.js'; // Adjust path if necessary

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState({}); // Cache user data to avoid redundant network requests
  const currentUser = auth.currentUser;

  useEffect(() => {
    // Fetch messages from Firestore
    const messagesCollection = collection(db, 'messages');

    const unsubscribe = onSnapshot(messagesCollection, async (snapshot) => {
      const fetchedMessages = await Promise.all(snapshot.docs.map(async messageDoc => {
        const messageData = messageDoc.data();

        // Check if user data is already cached
        if (!users[messageData.userId]) {
          const userDoc = await getDoc(doc(db, 'users', messageData.userId));
          const userData = userDoc.data();

          setUsers(prevUsers => ({
            ...prevUsers,
            [messageData.userId]: userData
          }));
        }

        return {
          ...messageData,
          id: messageDoc.id,
          userName: users[messageData.userId]?.name || '',
          userProfilePicture: users[messageData.userId]?.profilePictureURL || ''
        };
      }));

      setMessages(fetchedMessages);
    }, (error) => {
      console.error("Error fetching messages:", error);
    });

    // Clean up listener
    return () => unsubscribe();
  }, [users]);

  const renderMessage = ({ item }) => {
    const isCurrentUser = item.userId === currentUser?.uid;
    return (
      <View
        style={[
          styles.messageContainer,
          isCurrentUser ? styles.currentUserMessage : styles.otherUserMessage,
        ]}
      >
        {!isCurrentUser && (
          <Image source={{ uri: item.userProfilePicture }} style={styles.profilePicture} />
        )}
        <View style={styles.messageContent}>
          {!isCurrentUser && <Text style={styles.userName}>{item.userName}</Text>}
          <Text>{item.messageText}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  currentUserMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    padding: 10,
    borderRadius: 5,
  },
  otherUserMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    maxWidth: '80%',
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});