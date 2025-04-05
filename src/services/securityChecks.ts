import {useFreeRasp} from 'freerasp-react-native';
import {Alert} from 'react-native';

const config = {
  androidConfig: {
    packageName: 'com.rnapptemplate',
    certificateHashes: [],
  },
  iosConfig: {
    appBundleId: 'com.franceto.rickandmorty-02',
    appTeamId: '',
  },
  watcherMail: '',
  isProd: true,
};

const actions = {
  // Android & iOS
  privilegedAccess: () => {
    Alert.alert('Attention', 'Privileged access detected');
  },
  // Android & iOS
  appIntegrity: () => {
    Alert.alert('Attention', 'App integrity detected');
  },
  // Android & iOS
  unofficialStore: () => {
    Alert.alert('Attention', 'Unofficial store detected');
  },
  // Android & iOS
  hooks: () => {
    Alert.alert('Attention', 'Hooks detected');
  },
  // Android & iOS
  deviceBinding: () => {
    Alert.alert('Attention', 'Device binding detected');
  },
  // Android & iOS
  secureHardwareNotAvailable: () => {
    Alert.alert('Attention', 'Secure hardware not available');
  },
  // Android & iOS
  systemVPN: () => {
    Alert.alert('Attention', 'System VPN detected');
  },
  // Android & iOS
  passcode: () => {
    Alert.alert('Attention', 'Passcode detected');
  },
  // iOS only
  deviceID: () => {
    Alert.alert('Attention', 'Device ID detected');
  },
  // Android only
  obfuscationIssues: () => {
    Alert.alert('Attention', 'Obfuscation issues detected');
  },
  // Android only
  devMode: () => {
    Alert.alert('Attention', 'Dev mode detected');
  },
  // Android only
  adbEnabled: () => {
    Alert.alert('Attention', 'Adb enabled detected');
  },
  // Android & iOS
  screenshot: () => {
    Alert.alert('Attention', 'Screenshot detected');
  },
  // Android & iOS
  screenRecording: () => {
    Alert.alert('Attention', 'Screen recording detected');
  },
};

export const useSecurityChecks = () => {
  useFreeRasp(config, actions);
};
