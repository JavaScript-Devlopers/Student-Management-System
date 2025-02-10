import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
// import Tictoe from "@/components/Tictoe";
import Games from "@/components/Games";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [cardStyle, setCardStyle] = useState({
    alignItems: "center",
    padding: 20,
    backgroundColor: isEnabled ? "black" : "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  });

  useEffect(() => {
    setCardStyle({
      alignItems: "center",
      padding: 20,
      backgroundColor: isEnabled ? "black" : "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    });
  }, [isEnabled]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const textStyle = isEnabled ? { color: "white" } : { color: "black" };

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL", err)
    );
  };

  return (
    <View style={{ backgroundColor: isEnabled ? "black" : "white", flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{
          bgColor: isEnabled ? "Black" : "White",
        }}
        headerImage={
          <Image
            source={require("@/assets/images/bg.jpg")}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
          />
        }
        style={{ backgroundColor: isEnabled ? "black" : "white" }}
      >
        <Text
          onPress={toggleSwitch}
          style={{
            alignItems: "end",
            color: isEnabled ? "white" : "black",
            justifyContent: "flex-end",
            fontSize: 16,
            marginBottom: 10,
            textAlign: "right",
          }}
        >
          <Text style={{ color: isEnabled ? "White" : "black" }}>
            {isEnabled ? "🌙 DARK" : "💡 LIGHT"}
          </Text>
        </Text>

        <ThemedView style={cardStyle}>
          <Image
            source={require("@/assets/images/profile.png")}
            style={{ width: 120, height: 120, borderRadius: 60 }}
          />
          <ThemedText style={textStyle} type="title">
            Sneh Jaiswal
          </ThemedText>
          <ThemedText style={textStyle} type="subtitle">
            Full Stack Developer
          </ThemedText>
          <ThemedText style={textStyle}>
            {" "}
            <Text>📞 +91 7049510697 | 📧 snehjaiswal20@gmail.com</Text>
          </ThemedText>
          <Text style={{ fontSize: 16, color: "#000" }}>
            <TouchableOpacity
              onPress={() => handleLinkPress("https://github.com/snehpnp")}
            >
              <Text
                style={{ color: "#007BFF", textDecorationLine: "underline" }}
              >
                🌐 GitHub
              </Text>
            </TouchableOpacity>
            {"   "}
            <TouchableOpacity
              onPress={() =>
                handleLinkPress(
                  "https://www.linkedin.com/in/sneh-jaiswal-431165229/"
                )
              }
            >
              <Text
                style={{ color: "#007BFF", textDecorationLine: "underline" }}
              >
                🔗 LinkedIn
              </Text>
            </TouchableOpacity>
          </Text>
        </ThemedView>

        {/* About Me Section */}
        <ThemedView style={cardStyle}>
          <ThemedText style={textStyle} type="subtitle">
            📖 About Me
          </ThemedText>
          <ThemedText style={textStyle}>
            Passionate developer with expertise in React, React Native, Node.js,
            and MongoDB. Experienced in building scalable web and mobile
            applications.
          </ThemedText>
        </ThemedView>

        {/* Experience Section */}
        <ThemedView style={cardStyle}>
          <ThemedText style={textStyle} type="subtitle">
            💼 Experience
          </ThemedText>

          <ThemedText
            style={[
              textStyle,
              { textAlign: "center", fontFamily: "Roboto-Bold", fontSize: 20 },
            ]}
          >
            PNP Infotech, Indore | September 2022 - Present
          </ThemedText>
          <ThemedText style={textStyle}>
            - Executed the rollout of over eight major projects with a strong
            focus on building scalable enterprise solutions. - Collaborated with
            cross-functional teams to design and implement real-time systems. -
            Integrated advanced features like dynamic pricing tools, real-time
            notifications, and automated reminders. - Led the development of key
            projects like Stock Box, Outbook, and Smart Algo. - Ensured seamless
            integration of 30+ brokers for trading platforms. - Optimized
            Back-End systems to handle high-volume data processing with zero
            downtime.
          </ThemedText>
        </ThemedView>

        {/* Featured Projects Section */}
        <Projects isEnabled={isEnabled} cardStyle={cardStyle} />

        {/* Education Section */}
        <Education isEnabled={isEnabled} cardStyle={cardStyle} />

        {/* Skills Section */}
        <Skills isEnabled={isEnabled} cardStyle={cardStyle} />

        <Contact isEnabled={isEnabled} cardStyle={cardStyle} />

        {/* <Tictoe isEnabled={isEnabled} cardStyle={cardStyle} /> */}
<Games isEnabled={isEnabled} cardStyle={cardStyle} />

        {/* Footer Section */}
        <ThemedView style={cardStyle}>
          <Text style={[textStyle, { textAlign: "center", margin: 20 }]}>
            © 2025 Sneh Jaiswal. All Rights Reserved.
          </Text>
        </ThemedView>
      </ParallaxScrollView>
    </View>
  );
};

export default App;
