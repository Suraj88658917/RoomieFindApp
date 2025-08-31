// screens/ProfileScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  TextInput, 
  Alert 
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    name: "Suraj Saini",
    email: "suraj@example.com",
    phone: "+91 1234567890",
  });

  const [editMode, setEditMode] = useState(false);

  // Settings list with equal gaps
  const settings = [
    { title: "Account Settings", icon: "person-outline" },
    { title: "Notifications", icon: "notifications-outline" },
    { title: "Privacy", icon: "lock-closed-outline" },
    { title: "Help & Support", icon: "help-circle-outline" },
    { title: "Logout", icon: "exit-outline" },
  ];

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Logout", 
          style: "destructive", 
          onPress: () => navigation.replace('Login') // Navigate to Login screen
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image 
            source={require("../assets/images/image28.jpg")}
            style={styles.profileImage} 
          />
          <TouchableOpacity 
            style={styles.editIcon}
            onPress={() => setEditMode(!editMode)}
          >
            <Ionicons name={editMode ? "checkmark" : "pencil"} size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {editMode ? (
          <>
            <TextInput
              style={styles.editInput}
              value={user.name}
              onChangeText={text => setUser({ ...user, name: text })}
            />
            <TextInput
              style={styles.editInput}
              value={user.email}
              onChangeText={text => setUser({ ...user, email: text })}
            />
          </>
        ) : (
          <>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </>
        )}
      </View>

      <View style={styles.infoCard}>
        <Ionicons name="call-outline" size={22} color="#3867d6" />
        {editMode ? (
          <TextInput
            style={styles.infoInput}
            value={user.phone}
            onChangeText={text => setUser({ ...user, phone: text })}
          />
        ) : (
          <Text style={styles.infoText}>{user.phone}</Text>
        )}
      </View>

      <View style={styles.infoCard}>
        <MaterialIcons name="email" size={22} color="#3867d6" />
        <Text style={styles.infoText}>{user.email}</Text>
      </View>

      {/* Settings Section with Equal Gap */}
      <View style={styles.settingsContainer}>
        {settings.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.settingItem}
            onPress={item.title === "Logout" ? handleLogout : null}
          >
            <Ionicons name={item.icon} size={24} color="#3867d6" />
            <Text style={styles.settingText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  header: {
    alignItems: 'center',
    paddingVertical: 80,
    backgroundColor: "pink",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent:"center"
  },
  profileContainer: { position:"static" },
  profileImage: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: '#fff' },
  editIcon: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#3867d6', padding: 6, borderRadius: 20, borderWidth: 2, borderColor: '#fff' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginTop: 10 },
  email: { fontSize: 16, color: '#ffffffff', marginTop: 2 },
  editInput: { width: 200, height: 35, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 10, marginVertical: 5, textAlign: 'center' },
  infoCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 20, marginTop: 15, padding: 15, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.08, shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, elevation: 3 },
  infoText: { fontSize: 16, marginLeft: 15 },
  infoInput: { flex: 1, marginLeft: 15, fontSize: 16, padding: 0 },
  settingsContainer: { marginTop: 15, gap: 10 }, // uniform gap between items
  settingItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    marginHorizontal: 20, 
    padding: 15, 
    borderRadius: 12, 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowOffset: { width: 0, height: 1 }, 
    shadowRadius: 3, 
    elevation: 2 
  },
  settingText: { flex: 1, fontSize: 16, marginLeft: 15, color: '#333' }
});

export default ProfileScreen;
