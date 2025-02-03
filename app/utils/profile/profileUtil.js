import i18n from 'i18n-js';

export const getProfileDisplayText = (options) => {
  if (!options || !options.mobile || !options.name) {
    return i18n.t('profileInfoRequired');
  }

  return options.name + ', ' + options.mobile;
}