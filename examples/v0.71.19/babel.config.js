module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'code-updater/babel-plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        allowlist: ['CODE_UPDATER_SUPABASE_URL'],
        path: '.env',
      },
    ],
  ],
};
