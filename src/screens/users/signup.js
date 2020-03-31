import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  CheckBox
} from "react-native";
import { ProfileImg } from "../../styles/styled";
import styles from "../../styles/styles";
import colors from "../../styles/colors";

export default class UserSignUpScreen extends React.Component {
  submit = () => {
    this.props.navigation.navigate("UserFeed");
  };

  terms = () => {
    this.props.navigation.navigate("Terms");
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: colors.smoke, flex: 1 }}>
        <StatusBar backgroundColor={colors.smoke} barStyle="dark-content" />

        <View
          style={{
            height: "20%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../assets/images/aquiestoy.png")}
            style={{ resizeMode: "contain", width: 130, height: 130 }}
          />

          <Text
            style={{
              alignSelf: "center",
              fontFamily: "Kastelov--Axiforma-Bold",
              fontSize: 13,
              marginTop: -40,
              color: colors.lightGray
            }}
          >
            Crea tu cuenta, ¡es fácil!
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.select({ android: "height", ios: "padding" })}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.white,
              margin: 0,
              marginBottom: 0,
              borderTopStartRadius: 80,
              borderTopEndRadius: 80,
              flex: 1
            }}
          >
            <ScrollView horizontal={false}>
              <View style={{ alignItems: "center", flex: 1 }}>
                <ProfileImg style={{ marginTop: 30 }} />
                <Text
                  style={{
                    marginBottom: -60,
                    marginTop: 20,
                    fontFamily: "Kastelov--Axiforma-Bold",
                    fontSize: 18
                  }}
                >
                  Foto de perfil
                </Text>

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[
                    styles.loginInput,
                    { marginTop: 80, backgroundColor: colors.smoke }
                  ]}
                  placeholder="Nombre y Apellido"
                ></TextInput>

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Correo electrónico"
                ></TextInput>

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Domicilio"
                ></TextInput>

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Teléfono de contacto"
                ></TextInput>

                <View
                  style={{
                    marginTop: 20,
                    width: "90%",
                    justifyContent: "center",
                    backgroundColor: colors.smoke,
                    borderRadius: 10,
                    height: 48
                  }}
                >
                  <Picker
                    placeholder="Nacionalidad"
                    selectedValue={
                      (this.state && this.state.pickerValue) || "a"
                    }
                    onValueChange={value => {
                      this.setState({ pickerValue: value });
                    }}
                  >
                    <Picker.Item label="Afganistán" value="Afganistán" />
                    <Picker.Item label="Albania" value="Albania" />
                    <Picker.Item label="Alemania" value="Alemania" />
                    <Picker.Item label="Algeria" value="Algeria" />
                    <Picker.Item label="Andorra" value="Andorra" />
                    <Picker.Item label="Angola" value="Angola" />
                    <Picker.Item label="Anguila" value="Anguila" />
                    <Picker.Item label="Antártida" value="Antártida" />
                    <Picker.Item
                      label="Antigua y Barbuda"
                      value="Antigua y Barbuda"
                    />
                    <Picker.Item
                      label="Arabia Saudita"
                      value="Arabia Saudita"
                    />
                    <Picker.Item label="Argentina" value="Argentina" />
                    <Picker.Item label="Armenia" value="Armenia" />
                    <Picker.Item label="Aruba" value="Aruba" />
                    <Picker.Item label="Australia" value="Australia" />
                    <Picker.Item label="Austria" value="Austria" />
                    <Picker.Item label="Azerbaiyán" value="Azerbaiyán" />
                    <Picker.Item label="Bélgica" value="Bélgica" />
                    <Picker.Item label="Bahamas" value="Bahamas" />
                    <Picker.Item label="Bahrein" value="Bahrein" />
                    <Picker.Item label="Bangladesh" value="Bangladesh" />
                    <Picker.Item label="Barbados" value="Barbados" />
                    <Picker.Item label="Belice" value="Belice" />
                    <Picker.Item label="Benín" value="Benín" />
                    <Picker.Item label="Bhután" value="Bhután" />
                    <Picker.Item label="Bielorrusia" value="Bielorrusia" />
                    <Picker.Item label="Birmania" value="Birmania" />
                    <Picker.Item label="Bolivia" value="Bolivia" />
                    <Picker.Item
                      label="Bosnia y Herzegovina"
                      value="Bosnia y Herzegovina"
                    />
                    <Picker.Item label="Botsuana" value="Botsuana" />
                    <Picker.Item label="Brasil" value="Brasil" />
                    <Picker.Item label="Brunéi" value="Brunéi" />
                    <Picker.Item label="Bulgaria" value="Bulgaria" />
                    <Picker.Item label="Burkina Faso" value="Burkina Faso" />
                    <Picker.Item label="Burundi" value="Burundi" />
                    <Picker.Item label="Cabo Verde" value="Cabo Verde" />
                    <Picker.Item label="Camboya" value="Camboya" />
                    <Picker.Item label="Camerún" value="Camerún" />
                    <Picker.Item label="Canadá" value="Canadá" />
                    <Picker.Item label="Chad" value="Chad" />
                    <Picker.Item label="Chile" value="Chile" />
                    <Picker.Item label="China" value="China" />
                    <Picker.Item label="Chipre" value="Chipre" />
                    <Picker.Item
                      label="Ciudad del Vaticano"
                      value="Ciudad del Vaticano"
                    />
                    <Picker.Item label="Colombia" value="Colombia" />
                    <Picker.Item label="Comoras" value="Comoras" />
                    <Picker.Item
                      label="República del Congo"
                      value="República del Congo"
                    />
                    <Picker.Item
                      label="República Democrática del Congo"
                      value="República Democrática del Congo"
                    />
                    <Picker.Item
                      label="Corea del Norte"
                      value="Corea del Norte"
                    />
                    <Picker.Item label="Corea del Sur" value="Corea del Sur" />
                    <Picker.Item
                      label="Costa de Marfil"
                      value="Costa de Marfil"
                    />
                    <Picker.Item label="Costa Rica" value="Costa Rica" />
                    <Picker.Item label="Croacia" value="Croacia" />
                    <Picker.Item label="Cuba" value="Cuba" />
                    <Picker.Item label="Curazao" value="Curazao" />
                    <Picker.Item label="Dinamarca" value="Dinamarca" />
                    <Picker.Item label="Dominica" value="Dominica" />
                    <Picker.Item label="Ecuador" value="Ecuador" />
                    <Picker.Item label="Egipto" value="Egipto" />
                    <Picker.Item label="El Salvador" value="El Salvador" />
                    <Picker.Item
                      label="Emiratos Árabes Unidos"
                      value="Emiratos Árabes Unidos"
                    />
                    <Picker.Item label="Eritrea" value="Eritrea" />
                    <Picker.Item label="Eslovaquia" value="Eslovaquia" />
                    <Picker.Item label="Eslovenia" value="Eslovenia" />
                    <Picker.Item label="España" value="España" />
                    <Picker.Item
                      label="Estados Unidos de América"
                      value="Estados Unidos de América"
                    />
                    <Picker.Item label="Estonia" value="Estonia" />
                    <Picker.Item label="Etiopía" value="Etiopía" />
                    <Picker.Item label="Filipinas" value="Filipinas" />
                    <Picker.Item label="Finlandia" value="Finlandia" />
                    <Picker.Item label="Fiyi" value="Fiyi" />
                    <Picker.Item label="Francia" value="Francia" />
                    <Picker.Item label="Gabón" value="Gabón" />
                    <Picker.Item label="Gambia" value="Gambia" />
                    <Picker.Item label="Georgia" value="Georgia" />
                    <Picker.Item label="Ghana" value="Ghana" />
                    <Picker.Item label="Gibraltar" value="Gibraltar" />
                    <Picker.Item label="Granada" value="Granada" />
                    <Picker.Item label="Grecia" value="Grecia" />
                    <Picker.Item label="Groenlandia" value="Groenlandia" />
                    <Picker.Item label="Guadalupe" value="Guadalupe" />
                    <Picker.Item label="Guam" value="Guam" />
                    <Picker.Item label="Guatemala" value="Guatemala" />
                    <Picker.Item
                      label="Guayana Francesa"
                      value="Guayana Francesa"
                    />
                    <Picker.Item label="Guernsey" value="Guernsey" />
                    <Picker.Item label="Guinea" value="Guinea" />
                    <Picker.Item
                      label="Guinea Ecuatorial"
                      value="Guinea Ecuatorial"
                    />
                    <Picker.Item label="Guinea-Bissau" value="Guinea-Bissau" />
                    <Picker.Item label="Guyana" value="Guyana" />
                    <Picker.Item label="Haití" value="Haití" />
                    <Picker.Item label="Honduras" value="Honduras" />
                    <Picker.Item label="Hong kong" value="Hong kong" />
                    <Picker.Item label="Hungría" value="Hungría" />
                    <Picker.Item label="India" value="India" />
                    <Picker.Item label="Indonesia" value="Indonesia" />
                    <Picker.Item label="Irán" value="Irán" />
                    <Picker.Item label="Irak" value="Irak" />
                    <Picker.Item label="Irlanda" value="Irlanda" />
                    <Picker.Item label="Isla Bouvet" value="Isla Bouvet" />
                    <Picker.Item label="Isla de Man" value="Isla de Man" />
                    <Picker.Item
                      label="Isla de Navidad"
                      value="Isla de Navidad"
                    />
                    <Picker.Item label="Isla Norfolk" value="Isla Norfolk" />
                    <Picker.Item label="Islandia" value="Islandia" />
                    <Picker.Item
                      label="Islas Bermudas"
                      value="Islas Bermudas"
                    />
                    <Picker.Item label="Islas Caimán" value="Islas Caimán" />
                    <Picker.Item
                      label="Islas Cocos (Keeling)"
                      value="Islas Cocos (Keeling)"
                    />
                    <Picker.Item label="Islas Cook" value="Islas Cook" />
                    <Picker.Item
                      label="Islas de Åland"
                      value="Islas de Åland"
                    />
                    <Picker.Item label="Islas Feroe" value="Islas Feroe" />
                    <Picker.Item
                      label="Islas Georgias del Sur y Sandwich del Sur"
                      value="Islas Georgias del Sur y Sandwich del Sur"
                    />
                    <Picker.Item
                      label="Islas Heard y McDonald"
                      value="Islas Heard y McDonald"
                    />
                    <Picker.Item
                      label="Islas Maldivas"
                      value="Islas Maldivas"
                    />
                    <Picker.Item
                      label="Islas Malvinas"
                      value="Islas Malvinas"
                    />
                    <Picker.Item
                      label="Islas Marianas del Norte"
                      value="Islas Marianas del Norte"
                    />
                    <Picker.Item
                      label="Islas Marshall"
                      value="Islas Marshall"
                    />
                    <Picker.Item
                      label="Islas Pitcairn"
                      value="Islas Pitcairn"
                    />
                    <Picker.Item label="Islas Salomón" value="Islas Salomón" />
                    <Picker.Item
                      label="Islas Turcas y Caicos"
                      value="Islas Turcas y Caicos"
                    />
                    <Picker.Item
                      label="Islas Ultramarinas Menores de Estados Unidos"
                      value="Islas Ultramarinas Menores de Estados Unidos"
                    />
                    <Picker.Item
                      label="Islas Vírgenes Británicas"
                      value="Islas Vírgenes Británicas"
                    />
                    <Picker.Item
                      label="Islas Vírgenes de los Estados Unidos"
                      value="Islas Vírgenes de los Estados Unidos"
                    />
                    <Picker.Item label="Israel" value="Israel" />
                    <Picker.Item label="Italia" value="Italia" />
                    <Picker.Item label="Jamaica" value="Jamaica" />
                    <Picker.Item label="Japón" value="Japón" />
                    <Picker.Item label="Jersey" value="Jersey" />
                    <Picker.Item label="Jordania" value="Jordania" />
                    <Picker.Item label="Kazajistán" value="Kazajistán" />
                    <Picker.Item label="Kenia" value="Kenia" />
                    <Picker.Item label="Kirguistán" value="Kirguistán" />
                    <Picker.Item label="Kiribati" value="Kiribati" />
                    <Picker.Item label="Kuwait" value="Kuwait" />
                    <Picker.Item label="Líbano" value="Líbano" />
                    <Picker.Item label="Laos" value="Laos" />
                    <Picker.Item label="Lesoto" value="Lesoto" />
                    <Picker.Item label="Letonia" value="Letonia" />
                    <Picker.Item label="Liberia" value="Liberia" />
                    <Picker.Item label="Libia" value="Libia" />
                    <Picker.Item label="Liechtenstein" value="Liechtenstein" />
                    <Picker.Item label="Lituania" value="Lituania" />
                    <Picker.Item label="Luxemburgo" value="Luxemburgo" />
                    <Picker.Item label="México" value="México" />
                    <Picker.Item label="Mónaco" value="Mónaco" />
                    <Picker.Item label="Macao" value="Macao" />
                    <Picker.Item label="Macedônia" value="Macedônia" />
                    <Picker.Item label="Madagascar" value="Madagascar" />
                    <Picker.Item label="Malasia" value="Malasia" />
                    <Picker.Item label="Malawi" value="Malawi" />
                    <Picker.Item label="Mali" value="Mali" />
                    <Picker.Item label="Malta" value="Malta" />
                    <Picker.Item label="Marruecos" value="Marruecos" />
                    <Picker.Item label="Martinica" value="Martinica" />
                    <Picker.Item label="Mauricio" value="Mauricio" />
                    <Picker.Item label="Mauritania" value="Mauritania" />
                    <Picker.Item label="Mayotte" value="Mayotte" />
                    <Picker.Item label="Micronesia" value="Micronesia" />
                    <Picker.Item label="Moldavia" value="Moldavia" />
                    <Picker.Item label="Mongolia" value="Mongolia" />
                    <Picker.Item label="Montenegro" value="Montenegro" />
                    <Picker.Item label="Montserrat" value="Montserrat" />
                    <Picker.Item label="Mozambique" value="Mozambique" />
                    <Picker.Item label="Namibia" value="Namibia" />
                    <Picker.Item label="Nauru" value="Nauru" />
                    <Picker.Item label="Nepal" value="Nepal" />
                    <Picker.Item label="Nicaragua" value="Nicaragua" />
                    <Picker.Item label="Niger" value="Niger" />
                    <Picker.Item label="Nigeria" value="Nigeria" />
                    <Picker.Item label="Niue" value="Niue" />
                    <Picker.Item label="Noruega" value="Noruega" />
                    <Picker.Item
                      label="Nueva Caledonia"
                      value="Nueva Caledonia"
                    />
                    <Picker.Item label="Nueva Zelanda" value="Nueva Zelanda" />
                    <Picker.Item label="Omán" value="Omán" />
                    <Picker.Item label="Países Bajos" value="Países Bajos" />
                    <Picker.Item label="Pakistán" value="Pakistán" />
                    <Picker.Item label="Palau" value="Palau" />
                    <Picker.Item label="Palestina" value="Palestina" />
                    <Picker.Item label="Panamá" value="Panamá" />
                    <Picker.Item
                      label="Papúa Nueva Guinea"
                      value="Papúa Nueva Guinea"
                    />
                    <Picker.Item label="Paraguay" value="Paraguay" />
                    <Picker.Item label="Perú" value="Perú" />
                    <Picker.Item
                      label="Polinesia Francesa"
                      value="Polinesia Francesa"
                    />
                    <Picker.Item label="Polonia" value="Polonia" />
                    <Picker.Item label="Portugal" value="Portugal" />
                    <Picker.Item label="Puerto Rico" value="Puerto Rico" />
                    <Picker.Item label="Qatar" value="Qatar" />
                    <Picker.Item label="Reino Unido" value="Reino Unido" />
                    <Picker.Item
                      label="República Centroafricana"
                      value="República Centroafricana"
                    />
                    <Picker.Item
                      label="República Checa"
                      value="República Checa"
                    />
                    <Picker.Item
                      label="República Dominicana"
                      value="República Dominicana"
                    />
                    <Picker.Item
                      label="República de Sudán del Sur"
                      value="República de Sudán del Sur"
                    />
                    <Picker.Item label="Reunión" value="Reunión" />
                    <Picker.Item label="Ruanda" value="Ruanda" />
                    <Picker.Item label="Rumanía" value="Rumanía" />
                    <Picker.Item label="Rusia" value="Rusia" />
                    <Picker.Item
                      label="Sahara Occidental"
                      value="Sahara Occidental"
                    />
                    <Picker.Item label="Samoa" value="Samoa" />
                    <Picker.Item
                      label="Samoa Americana"
                      value="Samoa Americana"
                    />
                    <Picker.Item label="San Bartolomé" value="San Bartolomé" />
                    <Picker.Item
                      label="San Cristóbal y Nieves"
                      value="San Cristóbal y Nieves"
                    />
                    <Picker.Item label="San Marino" value="San Marino" />
                    <Picker.Item
                      label="San Martín (Francia)"
                      value="San Martín (Francia)"
                    />
                    <Picker.Item
                      label="San Pedro y Miquelón"
                      value="San Pedro y Miquelón"
                    />
                    <Picker.Item
                      label="San Vicente y las Granadinas"
                      value="San Vicente y las Granadinas"
                    />
                    <Picker.Item label="Santa Elena" value="Santa Elena" />
                    <Picker.Item label="Santa Lucía" value="Santa Lucía" />
                    <Picker.Item
                      label="Santo Tomé y Príncipe"
                      value="Santo Tomé y Príncipe"
                    />
                    <Picker.Item label="Senegal" value="Senegal" />
                    <Picker.Item label="Serbia" value="Serbia" />
                    <Picker.Item label="Seychelles" value="Seychelles" />
                    <Picker.Item label="Sierra Leona" value="Sierra Leona" />
                    <Picker.Item label="Singapur" value="Singapur" />
                    <Picker.Item label="Sint Maarten" value="Sint Maarten" />
                    <Picker.Item label="Siria" value="Siria" />
                    <Picker.Item label="Somalia" value="Somalia" />
                    <Picker.Item label="Sri lanka" value="Sri lanka" />
                    <Picker.Item label="Sudáfrica" value="Sudáfrica" />
                    <Picker.Item label="Sudán" value="Sudán" />
                    <Picker.Item label="Suecia" value="Suecia" />
                    <Picker.Item label="Suiza" value="Suiza" />
                    <Picker.Item label="Surinám" value="Surinám" />
                    <Picker.Item
                      label="Svalbard y Jan Mayen"
                      value="Svalbard y Jan Mayen"
                    />
                    <Picker.Item label="Swazilandia" value="Swazilandia" />
                    <Picker.Item label="Tayikistán" value="Tayikistán" />
                    <Picker.Item label="Tailandia" value="Tailandia" />
                    <Picker.Item label="Taiwán" value="Taiwán" />
                    <Picker.Item label="Tanzania" value="Tanzania" />
                    <Picker.Item
                      label="Territorio Británico del Océano Índico"
                      value="Territorio Británico del Océano Índico"
                    />
                    <Picker.Item
                      label="Territorios Australes y Antárticas Franceses"
                      value="Territorios Australes y Antárticas Franceses"
                    />
                    <Picker.Item
                      label="Timor Oriental"
                      value="Timor Oriental"
                    />
                    <Picker.Item label="Togo" value="Togo" />
                    <Picker.Item label="Tokelau" value="Tokelau" />
                    <Picker.Item label="Tonga" value="Tonga" />
                    <Picker.Item
                      label="Trinidad y Tobago"
                      value="Trinidad y Tobago"
                    />
                    <Picker.Item label="Tunez" value="Tunez" />
                    <Picker.Item label="Turkmenistán" value="Turkmenistán" />
                    <Picker.Item label="Turquía" value="Turquía" />
                    <Picker.Item label="Tuvalu" value="Tuvalu" />
                    <Picker.Item label="Ucrania" value="Ucrania" />
                    <Picker.Item label="Uganda" value="Uganda" />
                    <Picker.Item label="Uruguay" value="Uruguay" />
                    <Picker.Item label="Uzbekistán" value="Uzbekistán" />
                    <Picker.Item label="Vanuatu" value="Vanuatu" />
                    <Picker.Item label="Venezuela" value="Venezuela" />
                    <Picker.Item label="Vietnam" value="Vietnam" />
                    <Picker.Item
                      label="Wallis y Futuna"
                      value="Wallis y Futuna"
                    />
                    <Picker.Item label="Yemen" value="Yemen" />
                    <Picker.Item label="Yibuti" value="Yibuti" />
                    <Picker.Item label="Zambia" value="Zambia" />
                    <Picker.Item label="Zimbabue" value="Zimbabue" />
                  </Picker>
                </View>

                <View
                  style={{
                    marginTop: 20,
                    width: "90%",
                    justifyContent: "center",
                    backgroundColor: colors.smoke,
                    borderRadius: 10,
                    height: 48
                  }}
                >
                  <Picker
                    placeholder="Idioma"
                    selectedValue={
                      (this.state && this.state.pickerValue) || "a"
                    }
                    onValueChange={value => {
                      this.setState({ pickerValue: value });
                    }}
                  >
                    <Picker.Item label="Ingles" value="Ingles" />
                    <Picker.Item label="Ruso" value="Ruso" />
                    <Picker.Item label="Español" value="Español" />
                    <Picker.Item label="Aleman" value="Aleman" />
                    <Picker.Item label="Turco" value="Turco" />
                    <Picker.Item label="Persa" value="Persa" />
                    <Picker.Item label="Frances" value="Frances" />
                    <Picker.Item label="Japones" value="Japonés" />
                    <Picker.Item label="Portugues" value="Portugues" />
                    <Picker.Item label="Chino" value="Vietnamita" />
                    <Picker.Item label="Italiano" value="Italiano" />
                    <Picker.Item label="Arabe" value="Arabe" />
                    <Picker.Item label="Polaco" value="Polaco" />
                    <Picker.Item label="Griego" value="Griego" />
                    <Picker.Item label="Holandes" value="Holandes" />
                    <Picker.Item label="Indonesio" value="Indonesio" />
                    <Picker.Item label="Coreano" value="Coreano" />
                    <Picker.Item label="Checo" value="Checo" />
                    <Picker.Item label="Thai" value="Thai" />
                    <Picker.Item label="Ucraniano" value="Ucraniano" />
                    <Picker.Item label="Hebreo" value="Hebreo" />
                    <Picker.Item label="Sueco" value="Sueco" />
                    <Picker.Item label="Rumano" value="Rumano" />
                    <Picker.Item label="Hungaro" value="Húncaro" />
                    <Picker.Item label="Danes" value="Danés" />
                    <Picker.Item label="Eslovaco" value="Eslovaco" />
                    <Picker.Item label="Serbio" value="Serbio" />
                    <Picker.Item label="Bulgaro" value="Búlgaro" />
                    <Picker.Item label="Finlandes" value="Finlandés" />
                    <Picker.Item label="Croata" value="Croata" />
                    <Picker.Item label="Lituano" value="Lituano" />
                    <Picker.Item label="Hindi" value="Hindi" />
                    <Picker.Item label="Noruego" value="Noruego" />
                    <Picker.Item label="Esloveno" value="Esloveno" />
                    <Picker.Item label="Leton" value="Letón" />
                    <Picker.Item label="Estonio" value="Estónio" />
                    <Picker.Item label="Azerbaiyano" value="Azerbaiyano" />
                    <Picker.Item label="Catalan" value="Catalán" />
                    <Picker.Item label="Guarani" value="Guaraní" />
                  </Picker>
                </View>

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Nivel de estudio"
                ></TextInput>

                <View
                  style={{
                    marginTop: 20,
                    width: "90%",
                    justifyContent: "center",
                    backgroundColor: colors.smoke,
                    borderRadius: 10,
                    height: 48
                  }}
                >
                  <Picker
                    placeholder="Profesión"
                    selectedValue={
                      (this.state && this.state.pickerValue) || "a"
                    }
                    onValueChange={value => {
                      this.setState({ pickerValue: value });
                    }}
                  >
                    <Picker.Item label="Psicólogo" value="Psicólogo" />
                    <Picker.Item label="Psicopedagogo" value="Psicopedagogo" />
                    <Picker.Item label="Psiquiatra" value="Psiquiatra" />
                    <Picker.Item label="Counselor" value="Counselor" />
                    <Picker.Item label="Coach" value="Coach" />
                    <Picker.Item label="Empleado" value="Empleado" />
                    <Picker.Item label="Docente" value="Docente" />
                    <Picker.Item
                      label="Trabajador Social"
                      value="Trabajador Social"
                    />
                    <Picker.Item label="Independiente" value="Independiente" />
                    <Picker.Item label="Emprendedor" value="Emprendedor" />
                    <Picker.Item label="Desocupado" value="Desocupado" />
                    <Picker.Item label="Jubilado" value="Jubilado" />
                    <Picker.Item
                      label="Tareas Domésticas"
                      value="Tareas Domésticas"
                    />
                    <Picker.Item label="Artista" value="Artista" />
                    <Picker.Item label="Estudiante" value="Estudiante" />
                    <Picker.Item label="Oficios" value="Oficios" />
                    <Picker.Item label="Profesional" value="Profesional" />
                    <Picker.Item label="Religioso" value="Religioso" />
                    <Picker.Item
                      label="Acompañante Espiritual"
                      value="Acompañante Espiritual"
                    />
                    <Picker.Item label="Otra" value="Otra" />
                  </Picker>
                </View>

                <View style={{ flex: 1, flexDirection: "row", width: "90%" }}>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      placeholderTextColor={colors.darkWhite}
                      style={[
                        styles.loginInput,
                        { backgroundColor: colors.smoke }
                      ]}
                      placeholder="Edad"
                    ></TextInput>
                  </View>

                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        marginTop: 20,
                        justifyContent: "center",
                        backgroundColor: colors.smoke,
                        borderRadius: 10,
                        height: 48
                      }}
                    >
                      <Picker
                        placeholder="Sexo"
                        selectedValue={
                          (this.state && this.state.pickerValue) || "a"
                        }
                        onValueChange={value => {
                          this.setState({ pickerValue: value });
                        }}
                      >
                        <Picker.Item label="Hombre" value="hombre" />
                        <Picker.Item label="Mujer" value="mujer" />
                      </Picker>
                    </View>
                  </View>
                </View>

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Lugar de trabajo"
                />

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Puesto/rol"
                />

                <View style={{ flex: 1, flexDirection: "row", width: "90%" }}>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      placeholderTextColor={colors.darkWhite}
                      style={[
                        styles.loginInput,
                        { backgroundColor: colors.smoke, width: "90%" }
                      ]}
                      placeholder="Estado civil"
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <TextInput
                      placeholderTextColor={colors.darkWhite}
                      style={[
                        styles.loginInput,
                        { backgroundColor: colors.smoke, width: "100%" }
                      ]}
                      placeholder="Hijos"
                    />
                  </View>
                </View>

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Nro de personas con las que convive"
                />

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Personas a cargo"
                />

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[
                    styles.loginInput,
                    { backgroundColor: colors.smoke, textAlignVertical: "top" }
                  ]}
                  placeholder="Motivo por el cual solicitas contención..."
                  collapsable={true}
                  multiline
                  numberOfLines={4}
                ></TextInput>

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  secureTextEntry={true}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Contraseña"
                  collapsable={true}
                ></TextInput>

                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Bold",
                    color: colors.darkWhite,
                    marginTop: 30
                  }}
                >
                  Acepto los{" "}
                  <TouchableOpacity onPress={this.terms}>
                    <Text style={{ color: colors.gray }}>
                      términos y condiciones
                    </Text>
                  </TouchableOpacity>
                </Text>

                <TouchableOpacity
                  style={[styles.signUpButton, { marginBottom: 30 }]}
                  onPress={this.submit}
                >
                  <Text
                    style={{
                      fontFamily: "Kastelov--Axiforma-Bold",
                      color: "white",
                      textAlign: "center",
                      fontSize: 15,
                      color: colors.white
                    }}
                  >
                    Crear cuenta
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
