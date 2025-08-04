# AI News App


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start --tunnel
   ```

These are the available options to run the app from the output along with a QR Code for Expo Go:
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), (helps you try out the app directly on your mobile device (Android/iPhone))

Simplest one is:
Scan the QR Code with the Expo Go app from your mobile device and get the app running on your phone.

Get the Android app apk here: https://expo.dev/accounts/kite_1/projects/ainews/builds/9ddbad5c-90e6-4684-9391-5e4029dd31ca


## Explanation
- I have implemented mocked responses for all the GPT API calls since I did not have an API key for the same.
- All expected features are present including bookmarks, automatic real-time feed refresh, etc.
- Proper functional flow with proper handling of all possible edge cases
- Image upload feature included
- Post remove feature (from feed) included
- End-to-end flow works: Submission → (mock)GPT Validation & Editing → Feed Display

## Preview Screenshots
![WhatsApp Image 2025-08-04 at 06 01 11_14402d1e](https://github.com/user-attachments/assets/7a849a9c-a699-42c8-88f6-1a98d327ce2e)
![WhatsApp Image 2025-08-04 at 06 01 12_110cd9e5](https://github.com/user-attachments/assets/30147c78-f509-458b-8753-135ea23176af)
![WhatsApp Image 2025-08-04 at 06 01 12_cd50ee77](https://github.com/user-attachments/assets/73b554bd-cc20-462b-b398-e0ee1eabe667)
