import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'

export function HabitsEmpty() {
    const { navigate } = useNavigation()

    return (
        <Text  className="text-zinc-400 text-base">
            Você ainda não está monitorando nenhum hábito neste dia da semana, {' '}

            <Text 
                className='text-violet-400 text-base underline active:text-violet-500'
                onPress={() => navigate('new')}
            >
                cadastre um novo hábito aqui!
            </Text>
        </Text>
    )
}