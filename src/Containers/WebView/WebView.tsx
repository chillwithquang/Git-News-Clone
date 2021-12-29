import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebViewProps } from '@/types';
import { WebView } from 'react-native-webview';
import { makeStyledComponent } from '@/Utils/styled';

const StyledSafeAreaView = makeStyledComponent(SafeAreaView);

const WebViewContainer = (props: WebViewProps) => {
  const { route } = props;

  const webViewRef = useRef(null);
  const { uri } = route.params;

  return (
    <StyledSafeAreaView
      bgColor="transparent"
      flex="1"
      edges={['right', 'top', 'left']}
    >
      <WebView
        ref={webViewRef}
        source={{ uri }}
        originWhitelist={['*']}
        startInLoadingState={false}
        cacheEnabled={true}
        allowUniversalAccessFromFileURLs={true}
        onNavigationStateChange={navState => {
          if (navState.canGoBack) {
            webViewRef.current.goBack();
          }
        }}
      />
    </StyledSafeAreaView>
  );
};

export default React.memo(WebViewContainer);
