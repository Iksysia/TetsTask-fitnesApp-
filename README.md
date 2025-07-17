## Get started

1. Before start create ``.env`` file in root project folder
2. fill it with: 
   ``` 
   EXPO_PUBLIC_API_BASE_URL= 
   EXPO_PUBLIC_API_KEY= 
   ``` 
   and add exact values of your key and url.

3. Install dependencies

   ```bash
   npm install
   ```
4. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo**

To avoid problems during testing, use ``Expo GO`` and a ``real device``.
If you use an emulator, you may experience problems sending requests.

