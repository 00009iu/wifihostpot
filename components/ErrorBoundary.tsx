import React from 'react';

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error Boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text>Something went wrong. Please restart the app.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}
