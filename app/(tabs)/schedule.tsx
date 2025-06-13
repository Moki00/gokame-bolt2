import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ChevronRight,
  Plus,
} from 'lucide-react-native';

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Computer Diagnostic',
      date: '2025-01-15',
      time: '10:00 AM',
      technician: 'Mike Johnson',
      location: 'On-site',
      status: 'confirmed',
    },
    {
      id: 2,
      service: 'WiFi Setup',
      date: '2025-01-18',
      time: '2:00 PM',
      technician: 'Sarah Chen',
      location: 'Remote',
      status: 'pending',
    },
  ];

  const availableSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Schedule Service</Text>
        <Text style={styles.headerSubtitle}>Book your tech support appointment</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Book New Appointment */}
        <TouchableOpacity style={styles.bookButton}>
          <Plus size={24} color="#ffffff" />
          <View style={styles.bookContent}>
            <Text style={styles.bookTitle}>Book New Appointment</Text>
            <Text style={styles.bookSubtitle}>Schedule a service visit</Text>
          </View>
          <ChevronRight size={20} color="#ffffff" />
        </TouchableOpacity>

        {/* Upcoming Appointments */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {upcomingAppointments.map((appointment) => (
            <TouchableOpacity key={appointment.id} style={styles.appointmentCard}>
              <View style={styles.appointmentHeader}>
                <Text style={styles.appointmentService}>{appointment.service}</Text>
                <View style={[
                  styles.statusBadge,
                  appointment.status === 'confirmed' ? styles.confirmedBadge : styles.pendingBadge
                ]}>
                  <Text style={[
                    styles.statusText,
                    appointment.status === 'confirmed' ? styles.confirmedText : styles.pendingText
                  ]}>
                    {appointment.status.toUpperCase()}
                  </Text>
                </View>
              </View>
              
              <View style={styles.appointmentDetails}>
                <View style={styles.appointmentRow}>
                  <Calendar size={16} color="#5BAA94" />
                  <Text style={styles.appointmentText}>
                    {new Date(appointment.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </Text>
                </View>
                
                <View style={styles.appointmentRow}>
                  <Clock size={16} color="#5BAA94" />
                  <Text style={styles.appointmentText}>{appointment.time}</Text>
                </View>
                
                <View style={styles.appointmentRow}>
                  <User size={16} color="#5BAA94" />
                  <Text style={styles.appointmentText}>{appointment.technician}</Text>
                </View>
                
                <View style={styles.appointmentRow}>
                  <MapPin size={16} color="#5BAA94" />
                  <Text style={styles.appointmentText}>{appointment.location}</Text>
                </View>
              </View>
              
              <View style={styles.appointmentActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Reschedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.cancelButton]}>
                  <Text style={[styles.actionButtonText, styles.cancelButtonText]}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Booking */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Quick Booking</Text>
          <Text style={styles.sectionSubtitle}>Available time slots for today</Text>
          
          <View style={styles.slotsGrid}>
            {availableSlots.map((slot, index) => (
              <TouchableOpacity key={index} style={styles.slotButton}>
                <Text style={styles.slotText}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Service Types */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Computer Repair</Text>
            <Text style={styles.serviceDescription}>Hardware and software troubleshooting</Text>
            <Text style={styles.servicePrice}>Starting at $75</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Network Setup</Text>
            <Text style={styles.serviceDescription}>WiFi configuration and optimization</Text>
            <Text style={styles.servicePrice}>Starting at $50</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Device Training</Text>
            <Text style={styles.serviceDescription}>Learn to use your devices effectively</Text>
            <Text style={styles.servicePrice}>Starting at $40</Text>
          </TouchableOpacity>
        </View>

        {/* Emergency Service */}
        <View style={styles.emergencyContainer}>
          <Text style={styles.emergencyTitle}>Need Emergency Service?</Text>
          <Text style={styles.emergencyDescription}>
            We offer same-day emergency support for critical tech issues.
          </Text>
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.emergencyButtonText}>Request Emergency Service</Text>
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
  bookButton: {
    backgroundColor: '#289291',
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
  bookContent: {
    flex: 1,
    marginLeft: 12,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  bookSubtitle: {
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
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#5BAA94',
    marginBottom: 16,
  },
  appointmentCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  appointmentService: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#052D3C',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  confirmedBadge: {
    backgroundColor: '#e8f5e8',
  },
  pendingBadge: {
    backgroundColor: '#fff3cd',
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  confirmedText: {
    color: '#28a745',
  },
  pendingText: {
    color: '#856404',
  },
  appointmentDetails: {
    marginBottom: 16,
  },
  appointmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  appointmentText: {
    fontSize: 14,
    color: '#052D3C',
    marginLeft: 8,
  },
  appointmentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#034693',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flex: 0.48,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e74c3c',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  cancelButtonText: {
    color: '#e74c3c',
  },
  slotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  slotButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 8,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  slotText: {
    fontSize: 14,
    color: '#052D3C',
    fontWeight: '600',
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#052D3C',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#5BAA94',
    marginBottom: 8,
  },
  servicePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#289291',
  },
  emergencyContainer: {
    backgroundColor: '#e74c3c',
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  emergencyDescription: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  emergencyButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  emergencyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e74c3c',
  },
});