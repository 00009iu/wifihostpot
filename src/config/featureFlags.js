import { getRemoteConfig } from 'firebase/remote-config';

export const FeatureFlags = {
  get: async (key) => {
    await fetchAndActivate(getRemoteConfig());
    return getValue(key).asBoolean();
  }
};