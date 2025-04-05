import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze, enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import CharactersStack from './features/Characters';
import {SWRConfig} from 'swr';
import storage from './services/storage';
import {useSecurityChecks} from '@services/securityChecks';

enableFreeze(true);
enableScreens(true);

function App(): React.JSX.Element {
  useSecurityChecks();
  return (
    <SWRConfig
      value={{
        provider: () => storage,
      }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <CharactersStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </SWRConfig>
  );
}

export default App;
