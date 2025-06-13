import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { User, Settings, Bell, CreditCard, FileText, CircleHelp as HelpCircle, LogIn, UserPlus, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const isLoggedIn = false; // This would come from your auth state

  const menuItems = [
    {
      icon: Settings,
      title: 'Account Settings',
      subtitle: 'Manage your account preferences',
      requiresAuth: true,
    },
    {
      icon: Bell,
      title: 'Notifications',
      subtitle: 'Configure your notification preferences',
      requiresAuth: false,
    },
    {
      icon: CreditCard,
      title: 'Payment Methods',
      subtitle: 'Manage billing and payment options',
      requiresAuth: true,
    },
    {
      icon: FileText,
      title: 'Service History',
      subtitle: 'View your past appointments and services',
      requiresAuth: true,
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      subtitle: 'Get help and contact support',
      requiresAuth: false,
    },
  ];

  const GuestView = () => (
    <View style={styles.guestContainer}>
      <View style={styles.guestHeader}>
        <User size={64} color="#5BAA94" />
        <Text style={styles.guestTitle}>Welcome to Gokame</Text>
        <Text style={styles.guestSubtitle}>
          Sign in to access your account and manage your tech support services
        </Text>
      </View>

      <View style={styles.authButtons}>
        <TouchableOpacity style={styles.signInButton}>
          <LogIn size={20} color="#ffffff" />
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton}>
          <UserPlus size={20} color="#034693" />
          <Text style={styles.signUpButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.guestBenefits}>
        <Text style={styles.benefitsTitle}>Benefits of Creating an Account:</Text>
        <Text style={styles.benefitItem}>✓ Track your service appointments</Text>
        <Text style={styles.benefitItem}>✓ Access service history</Text>
        <Text style={styles.benefitItem}>✓ Save payment methods</Text>
        <Text style={styles.benefitItem}>✓ Get personalized support</Text>
        <Text style={styles.benefitItem}>✓ Receive service reminders</Text>
      </View>
    </View>
  );

  const LoggedInView = () => (
    <View style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <User size={32} color="#ffffff" />
        </View>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@email.com</Text>
        <Text style={styles.memberSince}>Member since January 2024</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Services</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>4.9</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>$340</Text>
          <Text style={styles.statLabel}>Saved</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Text style={styles.headerSubtitle}>
          {isLoggedIn ? 'Manage your account' : 'Sign in to get started'}
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {isLoggedIn ? <LoggedInView /> : <GuestView />}

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => {
            const isDisabled = !isLoggedIn && item.requiresAuth;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.menuItem, isDisabled && styles.menuItemDisabled]}
                disabled={isDisabled}
              >
                <item.icon 
                  size={24} 
                  color={isDisabled ? '#cccccc' : '#034693'} 
                />
                <View style={styles.menuContent}>
                  <Text style={[
                    styles.menuTitle,
                    isDisabled && styles.menuTitleDisabled
                  ]}>
                    {item.title}
                  </Text>
                  <Text style={[
                    styles.menuSubtitle,
                    isDisabled && styles.menuSubtitleDisabled
                  ]}>
                    {item.subtitle}
                  </Text>
                  {isDisabled && (
                    <Text style={styles.requiresAuthText}>Sign in required</Text>
                  )}
                </View>
                <ChevronRight 
                  size={20} 
                  color={isDisabled ? '#cccccc' : '#5BAA94'} 
                />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* App Info */}
        <View style={styles.appInfoContainer}>
          <Text style={styles.appInfoTitle}>Gokame Tech Support</Text>
          <Text style={styles.appInfoVersion}>Version 1.0.0</Text>
          <Text style={styles.appInfoDescription}>
            Your trusted partner for reliable tech solutions
          </Text>
          
          <View style={styles.appInfoLinks}>
            <TouchableOpacity style={styles.infoLink}>
              <Text style={styles.infoLinkText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoLink}>
              <Text style={styles.infoLinkText}>Terms of Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoLink}>
              <Text style={styles.infoLinkText}>About Us</Text>
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
  guestContainer: {
    marginHorizontal: 20,
    marginTop: -15,
  },
  guestHeader: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  guestTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#052D3C',
    marginTop: 16,
    marginBottom: 8,
  },
  guestSubtitle: {
    fontSize: 16,
    color: '#5BAA94',
    textAlign: 'center',
    lineHeight: 22,
  },
  authButtons: {
    marginBottom: 30,
  },
  signInButton: {
    backgroundColor: '#034693',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 8,
  },
  signUpButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#034693',
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#034693',
    marginLeft: 8,
  },
  guestBenefits: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 12,
  },
  benefitItem: {
    fontSize: 14,
    color: '#5BAA94',
    marginBottom: 8,
    lineHeight: 20,
  },
  profileContainer: {
    marginHorizontal: 20,
    marginTop: -15,
    marginBottom: 30,
  },
  profileHeader: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    backgroundColor: '#289291',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: '#5BAA94',
    marginBottom: 8,
  },
  memberSince: {
    fontSize: 14,
    color: '#289291',
  },
  statsContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#034693',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#5BAA94',
  },
  menuContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  menuItem: {
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
  menuItemDisabled: {
    opacity: 0.6,
  },
  menuContent: {
    flex: 1,
    marginLeft: 16,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 4,
  },
  menuTitleDisabled: {
    color: '#cccccc',
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#5BAA94',
  },
  menuSubtitleDisabled: {
    color: '#cccccc',
  },
  requiresAuthText: {
    fontSize: 12,
    color: '#e74c3c',
    marginTop: 4,
    fontStyle: 'italic',
  },
  appInfoContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  appInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 4,
  },
  appInfoVersion: {
    fontSize: 14,
    color: '#5BAA94',
    marginBottom: 8,
  },
  appInfoDescription: {
    fontSize: 14,
    color: '#5BAA94',
    textAlign: 'center',
    marginBottom: 20,
  },
  appInfoLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  infoLink: {
    marginHorizontal: 8,
    marginVertical: 4,
  },
  infoLinkText: {
    fontSize: 14,
    color: '#289291',
    textDecorationLine: 'underline',
  },
});