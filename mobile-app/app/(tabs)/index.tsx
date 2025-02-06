import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, ScrollView,Switch } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !isEnabled);
  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      
      <TouchableOpacity onPress={toggleSwitch}>
        <Text style={styles.modeText}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
          {isDarkMode ? '🌙 DARK' : '💡 LIGHT'}
        </Text>
      </TouchableOpacity>



      <ParallaxScrollView
        headerBackgroundColor={{ light: '#B0E0E6', dark: '#12343b' }}
        headerImage={
          <Image
            source={require('@/assets/images/bg.png')}
            style={styles.profileBanner}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <Image source={require('@/assets/images/profile.png')} style={styles.profilePicture} />
          <ThemedText type="title">Sneh Jaiswal</ThemedText>
          <ThemedText type="subtitle">Full Stack Developer</ThemedText>
          <ThemedText>📞 +91 7049510697 | 📧 snehjaiswal20@gmail.com</ThemedText>
          <ThemedText>🌐 GitHub | 🔗 LinkedIn</ThemedText>
          <HelloWave />
        </ThemedView>

        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">📖 About Me</ThemedText>
          <ThemedText>
            Passionate developer with expertise in React, React Native, Node.js, and MongoDB. 
            Experienced in building scalable web and mobile applications.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">💼 Experience</ThemedText>
          <ThemedText type="defaultSemiBold">Full Stack Developer</ThemedText>
          <ThemedText>PNP Infotech, Indore | September 2022 - Present</ThemedText>
          <ThemedText>
            - Executed the rollout of over eight major projects with a strong focus on building scalable enterprise solutions.
            - Collaborated with cross-functional teams to design and implement real-time systems.
            - Integrated advanced features like dynamic pricing tools, real-time notifications, and automated reminders.
            - Led the development of key projects like Stock Box, Outbook, and Smart Algo.
            - Ensured seamless integration of 30+ brokers for trading platforms.
            - Optimized Back-End systems to handle high-volume data processing with zero downtime.
          </ThemedText>
        </ThemedView>

        {/* New Card Section */}
        <ThemedView style={styles.cardSectionContainer}>
          <ThemedText type="subtitle">📂 Featured Projects</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Project 1</Text>
              <Text style={styles.cardDescription}>Short description about Project 1</Text>
            </View>
            <View style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Project 2</Text>
              <Text style={styles.cardDescription}>Short description about Project 2</Text>
            </View>
            <View style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Project 3</Text>
              <Text style={styles.cardDescription}>Short description about Project 3</Text>
            </View>
          </ScrollView>
        </ThemedView>

        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">🎓 Education</ThemedText>
          <ThemedText type="defaultSemiBold">Bachelor of Computer Applications (BCA)</ThemedText>
          <ThemedText>Vikram University, Ujjain | 2020 – 2023</ThemedText>
          <ThemedText>
            - Specialized in Information Technology alongside the core BCA curriculum.
            - Focused on software development, database management, and algorithmic problem-solving.
          </ThemedText>

          <ThemedText type="defaultSemiBold">Higher Secondary Certificate (12th Grade)</ThemedText>
          <ThemedText>Government High Secondary School, Nasrullaganj | 2018 – 2019</ThemedText>

          <ThemedText type="defaultSemiBold">Secondary School Certificate (10th Grade)</ThemedText>
          <ThemedText>Government High School, Chitgaon Mouji | 2016 – 2017</ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">🛠 Skills</ThemedText>
          <ThemedText>
            - Programming Languages: JavaScript
            - Frontend: React.js, Redux, HTML, CSS, Bootstrap
            - Backend: Node.js, Express.js
            - Database: MongoDB, MySQL
            - Tools & Technologies: Docker, Git, Azure (SharePoint), AWS (s3 Bucket), WebSocket, Socket.io, Postman
            - Other Skills: API integration, Single Sign-On (SSO), Real-time application development, Team leadership
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">📞 Contact</ThemedText>
          <ThemedText>Email: snehjaiswal20@gmail.com</ThemedText>
          <ThemedText>LinkedIn: linkedin.com/in/snehjaiswal</ThemedText>
          <ThemedText>GitHub: github.com/snehjaiswal</ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  modeText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 20,
  },
  sectionContainer: {
    gap: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  profileBanner: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  cardSectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 15,
    marginRight: 20,
    width: 180,
    alignItems: 'center',
    marginBottom: 10,
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescription: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default App;
