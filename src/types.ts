export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string; // The Lucide icon string to map
  details: string[];
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  status: 'operational' | 'completed' | 'testing';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarSeed: string; // We can use avatar seed for high quality sci-fi avatars
  quote: string;
  neuralSync: string; // Sync percentage e.g. "98.4%"
}

export interface ContactFormData {
  fullName: string;
  neuralId: string;
  email: string;
  subject: string;
  message: string;
}
