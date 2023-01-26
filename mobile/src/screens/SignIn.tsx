import { useNavigation } from '@react-navigation/native';
import * as AuthSession from 'expo-auth-session';
import { TouchableOpacity, View, Text} from 'react-native';
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

export function SignIn() {
    const navigation = useNavigation()

    async function handleSignIn() {
        const CLIENT_ID = '12936690544-ohc4n6pia4usiln5tl14as96168mhopu.apps.googleusercontent.com'
        const REDIRECT_URI = 'https://auth.expo.io/@eduviezzer/mobile'
        const RESPONSE_TYPE = 'token'
        const SCOPE = encodeURI('profile email')

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
        const response = await AuthSession.startAsync({ authUrl})
        console.log(response)
        // navigation.navigate('home')
    }

    return (
        <View className="flex-1 bg-background px-8 py-16 justify-around items-center">
            <TouchableOpacity
                activeOpacity={0.7}
                className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
                onPress={handleSignIn}
            >
                <Feather 
                    name="log-in"
                    color={colors.violet[500]}
                    size={20}
                />

                <Text className="text-white ml-3 font-semibold text-base">
                    Entrar com Google
                </Text>
                
            </TouchableOpacity>
        </View>
    )
}