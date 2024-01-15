import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'pdftron-angular-sample',
  webDir: 'dist/pdftron-angular-sample',
  server: {
    androidScheme: 'https'
  }
};

export default config;
