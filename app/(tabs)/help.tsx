import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Search, CircleHelp as HelpCircle, Monitor, Wifi, Smartphone, Printer, Shield, ChevronRight } from 'lucide-react-native';

export default function HelpScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      icon: Monitor,
      title: 'Computer Issues',
      description: 'Slow performance, crashes, startup problems',
      articles: 12,
    },
    {
      icon: Wifi,
      title: 'Internet & Network',
      description: 'WiFi problems, connection issues, router setup',
      articles: 8,
    },
    {
      icon: Smartphone,
      title: 'Mobile Devices',
      description: 'Phone setup, app issues, data transfer',
      articles: 15,
    },
    {
      icon: Printer,
      title: 'Printers & Scanners',
      description: 'Setup, driver issues, print quality problems',
      articles: 6,
    },
    {
      icon: Shield,
      title: 'Security & Backup',
      description: 'Antivirus, data backup, password management',
      articles: 10,
    },
  ];

  const popularArticles = [
    'How to speed up a slow computer',
    'Setting up WiFi on your device',
    'Creating secure passwords',
    'Backing up your important files',
    'Removing malware and viruses',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Get Help</Text>
        <Text style={styles.headerSubtitle}>Find solutions to common tech problems</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#5BAA94" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search help articles..."
            placeholderTextColor="#5BAA94"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Quick Help Button */}
        <TouchableOpacity style={styles.quickHelpButton}>
          <HelpCircle size={24} color="#ffffff" />
          <View style={styles.quickHelpContent}>
            <Text style={styles.quickHelpTitle}>Need Immediate Help?</Text>
            <Text style={styles.quickHelpSubtitle}>Chat with our support team</Text>
          </View>
          <ChevronRight size={20} color="#ffffff" />
        </TouchableOpacity>

        {/* Help Categories */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Browse by Category</Text>
          {helpCategories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <category.icon size={24} color="#034693" />
              <View style={styles.categoryContent}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryDescription}>{category.description}</Text>
                <Text style={styles.categoryArticles}>{category.articles} articles</Text>
              </View>
              <ChevronRight size={20} color="#5BAA94" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Popular Articles */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popular Articles</Text>
          {popularArticles.map((article, index) => (
            <TouchableOpacity key={index} style={styles.articleCard}>
              <Text style={styles.articleTitle}>{article}</Text>
              <ChevronRight size={16} color="#5BAA94" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Support */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Still Need Help?</Text>
          <Text style={styles.contactDescription}>
            Our friendly support team is here to help you with any tech issues.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
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
  quickHelpButton: {
    backgroundColor: '#289291',
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
  quickHelpContent: {
    flex: 1,
    marginLeft: 12,
  },
  quickHelpTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  quickHelpSubtitle: {
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
  categoryCard: {
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
  categoryContent: {
    flex: 1,
    marginLeft: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#5BAA94',
    marginBottom: 4,
  },
  categoryArticles: {
    fontSize: 12,
    color: '#289291',
    fontWeight: '600',
  },
  articleCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  articleTitle: {
    fontSize: 14,
    color: '#052D3C',
    flex: 1,
  },
  contactContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 8,
  },
  contactDescription: {
    fontSize: 14,
    color: '#5BAA94',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: '#034693',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});