import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,  View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text 
        ellipsizeMode='middle' // coloca reticencias em um Text
        selectable   // torna selecionavel o texto     
      >quele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.
      2 Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.
      3 Porque ele te livrará do laço do passarinheiro, e da peste perniciosa.
      4 Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás; a sua verdade será o teu escudo e broquel.
      5 Não terás medo do terror de noite nem da seta que voa de dia,
      6 Nem da peste que anda na escuridão, nem da mortandade que assola ao meio-dia.
      7 Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti.
      8 Somente com os teus olhos contemplarás, e verás a recompensa dos ímpios.
      9 Porque tu, ó Senhor, és o meu refúgio. No Altíssimo fizeste a tua habitação.
      10 Nenhum mal te sucederá, nem praga alguma chegará à tua tenda.
      11 Porque aos seus anjos dará ordem a teu respeito, para te guardarem em to</Text>

      {/* Limita a quantidade de linhas */}
      <TextInput 
      placeholder="Text" 
      style={{borderWidth: 1, width: "80%"}}   
      autoFocus //O cursor ficará piscando ao clicar/
      editable = {false}
      // numero de linhas que aparecem
      > 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
