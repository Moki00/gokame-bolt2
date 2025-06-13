import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import { Search, TriangleAlert as AlertTriangle, Calendar, Monitor, BookOpen, Phone, Shield, Zap } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: '/assets/images/emblem.jpg' }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Welcome to Gokame</Text>
          <Text style={styles.subtitleText}>
            Your trusted tech support partner
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#5BAA94" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help or services..."
            placeholderTextColor="#5BAA94"
          />
        </View>

        {/* Emergency Button */}
        <TouchableOpacity style={styles.emergencyButton}>
          <AlertTriangle size={24} color="#ffffff" />
          <Text style={styles.emergencyText}>Emergency Tech Support</Text>
          <Text style={styles.emergencySubtext}>Available 24/7</Text>
        </TouchableOpacity>

        {/* Quick Actions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity style={styles.quickActionCard}>
              <Calendar size={32} color="#034693" />
              <Text style={styles.quickActionTitle}>Schedule Service</Text>
              <Text style={styles.quickActionSubtitle}>Book an appointment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionCard}>
              <Monitor size={32} color="#034693" />
              <Text style={styles.quickActionTitle}>Remote Assistance</Text>
              <Text style={styles.quickActionSubtitle}>Get help instantly</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionCard}>
              <BookOpen size={32} color="#034693" />
              <Text style={styles.quickActionTitle}>Knowledge Base</Text>
              <Text style={styles.quickActionSubtitle}>Self-help guides</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionCard}>
              <Phone size={32} color="#034693" />
              <Text style={styles.quickActionTitle}>Call Support</Text>
              <Text style={styles.quickActionSubtitle}>Speak to an expert</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Overview */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Shield size={24} color="#289291" />
            <View style={styles.serviceContent}>
              <Text style={styles.serviceTitle}>Computer Repair & Maintenance</Text>
              <Text style={styles.serviceDescription}>
                Hardware diagnostics, software troubleshooting, and system optimization
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceCard}>
            <Zap size={24} color="#289291" />
            <View style={styles.serviceContent}>
              <Text style={styles.serviceTitle}>Network & Internet Setup</Text>
              <Text style={styles.serviceDescription}>
                WiFi configuration, router setup, and connectivity solutions
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceCard}>
            <Monitor size={24} color="#289291" />
            <View style={styles.serviceContent}>
              <Text style={styles.serviceTitle}>Device Setup & Training</Text>
              <Text style={styles.serviceDescription}>
                New device configuration and user training sessions
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Trust Indicators */}
        <View style={styles.trustContainer}>
          <Text style={styles.trustTitle}>Why Choose Gokame?</Text>
          <View style={styles.trustPoints}>
            <Text style={styles.trustPoint}>✓ Certified technicians</Text>
            <Text style={styles.trustPoint}>✓ 24/7 emergency support</Text>
            <Text style={styles.trustPoint}>✓ Satisfaction guaranteed</Text>
            <Text style={styles.trustPoint}>✓ Transparent pricing</Text>
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
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#034693',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: '#5BAA94',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: -15,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#052D3C',
  },
  emergencyButton: {
    backgroundColor: '#e74c3c',
    marginHorizontal: 20,
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
  emergencyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 12,
    flex: 1,
  },
  emergencySubtext: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.9,
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
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionCard: {
    backgroundColor: '#ffffff',
    width: '48%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#052D3C',
    marginTop: 12,
    textAlign: 'center',
  },
  quickActionSubtitle: {
    fontSize: 12,
    color: '#5BAA94',
    marginTop: 4,
    textAlign: 'center',
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceContent: {
    flex: 1,
    marginLeft: 16,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 6,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#5BAA94',
    lineHeight: 20,
  },
  trustContainer: {
    backgroundColor: '#289291',
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 24,
    borderRadius: 16,
  },
  trustTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  trustPoints: {
    alignItems: 'flex-start',
  },
  trustPoint: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 8,
    lineHeight: 20,
  },
});