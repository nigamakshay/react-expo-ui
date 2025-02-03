import React from 'react';
import { AuthenticatedUserProvider } from 'authenticatedUserProvider';
import RootNavigator from 'rootNavigator';

export default function Routes() {
  return (
        <AuthenticatedUserProvider>
          <RootNavigator />
        </AuthenticatedUserProvider>
  );
}
