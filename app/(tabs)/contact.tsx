import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import { Phone, Mail, MessageCircle, MapPin, Clock, TriangleAlert as AlertTriangle } from 'lucide-react-native';

export default function ContactScreen() {
  const handlePhoneCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Speak directly with our support team',
      action: '(555) 123-TECH',
      onPress: () => handlePhoneCall('5551234832'),
    },
    {
      icon: Mail,
      title: 'Email Support',
      subtitle: 'Send us your questions anytime',
      action: 'support@gokame.tech',
      onPress: () => handleEmail('support@gokame.tech'),
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      subtitle: 'Chat with us in real-time',
      action: 'Start Chat',
      onPress: () => {},
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contact Us</Text>
        <Text style={styles.headerSubtitle}>We're here to help you</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Emergency Contact */}
        <TouchableOpacity 
          style={styles.emergencyButton}
          onPress={() => handlePhoneCall('5551234832')}
        >
          <AlertTriangle size={24} color="#ffffff" />
          <View style={styles.emergencyContent}>
            <Text style={styles.emergencyTitle}>Emergency Support</Text>
            <Text style={styles.emergencySubtitle}>24/7 Critical Issues: (555) 123-TECH</Text>
          </View>
        </TouchableOpacity>

        {/* Contact Methods */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          {contactMethods.map((method, index) => (
            <TouchableOpacity key={index} style={styles.contactCard} onPress={method.onPress}>
              <method.icon size={24} color="#034693" />
              <View style={styles.contactContent}>
                <Text style={styles.contactTitle}>{method.title}</Text>
                <Text style={styles.contactSubtitle}>{method.subtitle}</Text>
                <Text style={styles.contactAction}>{method.action}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Business Hours */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Business Hours</Text>
          <View style={styles.hoursCard}>
            <Clock size={24} color="#289291" style={styles.hoursIcon} />
            <View style={styles.hoursContent}>
              {businessHours.map((schedule, index) => (
                <View key={index} style={styles.hoursRow}>
                  <Text style={styles.hoursDay}>{schedule.day}</Text>
                  <Text style={styles.hoursTime}>{schedule.hours}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Location */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Our Location</Text>
          <View style={styles.locationCard}>
            <MapPin size={24} color="#289291" />
            <View style={styles.locationContent}>
              <Text style={styles.locationTitle}>Gokame Tech Support</Text>
              <Text style={styles.locationAddress}>
                123 Tech Support Lane{'\n'}
                Digital City, DC 12345{'\n'}
                United States
              </Text>
              <TouchableOpacity style={styles.directionsButton}>
                <Text style={styles.directionsText}>Get Directions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Response Times */}
        <View style={styles.responseContainer}>
          <Text style={styles.responseTitle}>Our Response Times</Text>
          <View style={styles.responseGrid}>
            <View style={styles.responseItem}>
              <Text style={styles.responseTime}>< 5 min</Text>
              <Text style={styles.responseLabel}>Live Chat</Text>
            </View>
            <View style={styles.responseItem}>
              <Text style={styles.responseTime}>< 2 hours</Text>
              <Text style={styles.responseLabel}>Email</Text>
            </View>
            <View style={styles.responseItem}>
              <Text style={styles.responseTime}>Immediate</Text>
              <Text style={styles.responseLabel}>Phone</Text>
            </View>
          </View>
        </View>

        {/* FAQ Link */}
        <TouchableOpacity style={styles.faqButton}>
          <Text style={styles.faqButtonText}>Frequently Asked Questions</Text>
        </TouchableOpacity>

        {/* Social Media */}
        <View style={styles.socialContainer}>
          <Text style={styles.socialTitle}>Follow Us</Text>
          <Text style={styles.socialDescription}>
            Stay updated with tech tips and company news
          </Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fffe',
  },
  header: {
    backgroundColor: '#034693',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#5BAA94',
  },
  scrollView: {
    flex: 1,
  },
  emergencyButton: {
    backgroundColor: '#e74c3c',
    marginHorizontal: 20,
    marginTop: -15,
    marginBottom: 30,
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  emergencyContent: {
    flex: 1,
    marginLeft: 12,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  emergencySubtitle: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.9,
    marginTop: 2,
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 16,
  },
  contactCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactContent: {
    flex: 1,
    marginLeft: 16,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 4,
  },
  contactSubtitle: {
    fontSize: 14,
    color: '#5BAA94',
    marginBottom: 4,
  },
  contactAction: {
    fontSize: 14,
    fontWeight: '600',
    color: '#289291',
  },
  hoursCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hoursIcon: {
    marginTop: 4,
  },
  hoursContent: {
    flex: 1,
    marginLeft: 16,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  hoursDay: {
    fontSize: 14,
    color: '#052D3C',
    fontWeight: '600',
  },
  hoursTime: {
    fontSize: 14,
    color: '#5BAA94',
  },
  locationCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationContent: {
    flex: 1,
    marginLeft: 16,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 8,
  },
  locationAddress: {
    fontSize: 14,
    color: '#5BAA94',
    lineHeight: 20,
    marginBottom: 12,
  },
  directionsButton: {
    alignSelf: 'flex-start',
  },
  directionsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#289291',
  },
  responseContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  responseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 16,
    textAlign: 'center',
  },
  responseGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  responseItem: {
    alignItems: 'center',
  },
  responseTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#289291',
    marginBottom: 4,
  },
  responseLabel: {
    fontSize: 12,
    color: '#5BAA94',
  },
  faqButton: {
    backgroundColor: '#289291',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  faqButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  socialContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 8,
  },
  socialDescription: {
    fontSize: 14,
    color: '#5BAA94',
    textAlign: 'center',
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#034693',
  },
});