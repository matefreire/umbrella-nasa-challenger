// Tipos para dados climáticos
export interface WeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: number;
  description: string;
  icon: string;
  location: string;
  timestamp: Date;
}

// Tipos para dados espaciais
export interface SpatialData {
  latitude: number;
  longitude: number;
  altitude: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

// Tipos para relatórios
export interface ClimateReport {
  id: string;
  title: string;
  description: string;
  data: WeatherData;
  spatialData: SpatialData;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos para seções da landing page
export interface LandingSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  animationType: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  triggerPoint: number;
}

// Tipos para animações GSAP
export interface GSAPAnimation {
  element: HTMLElement;
  duration: number;
  delay?: number;
  ease?: string;
  from?: Record<string, any>;
  to?: Record<string, any>;
}
