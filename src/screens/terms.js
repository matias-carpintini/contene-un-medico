import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View
} from "react-native";
import colors from "../styles/colors";

export default class TermsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: colors.dark,
          flexDirection: "column",
          flex: 1
        }}
      >
        <StatusBar backgroundColor={colors.dark} barStyle="white-content" />
        <ScrollView>
          <View
            style={{
              width: "100%",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: "5%",
              paddingBottom: 20
            }}
          >
            <Image
              source={require("../assets/images/aquiestoy.png")}
              style={{
                resizeMode: "contain",
                width: 150,
                marginTop: 50
              }}
            />
            <View style={{ alignItems: "flex-start" }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 16,
                  marginTop: 10,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                TÉRMINOS Y CONDICIONES & POLÍTICA DE PRIVACIDAD
              </Text>
              <Text
                style={{
                  color: colors.darkRed,
                  fontSize: 14,
                  marginTop: 10,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                IMPORTANTE
              </Text>
              <Text
                style={{
                  color: colors.red,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                NO SOMOS UN SERVICIO DE EMERGENCIAS. SI ESTÁS EN PELIGRO O EN
                UNA EMERGENCIA SANITARIA LLAMÁ AL 911 O NÚMERO DE ASISTENCIA DE
                EMERGENCIA LOCAL. PODÉS CONSULTAR EL LISTADO DE NÚMEROS DE
                URGENCIAS EN LA MAYORÍA DE LOS PAÍSES AQUÍ
                [HTTP://AYUDA.AQUIESTOY.LIVE]
              </Text>
              <Text
                style={{
                  color: colors.red,
                  fontSize: 12,
                  marginTop: 10,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                SI SOS MENOR DE 18 AÑOS, NO PODÉS UTILIZAR NUESTROS SERVICIOS.
                SIN EMBARGO, SI CORRES RIESGO DE SER ABUSADO O TRATADO CON
                NEGLIGENCIA POR MAYORES, LLAMÁ AL 911 O AL NÚMERO DE EMERGENCIAS
                LOCAL.
              </Text>
              <Text
                style={{
                  color: colors.red,
                  fontSize: 12,
                  marginTop: 10,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                AQUÍ ESTOY NO BRINDA NI SUSTITUYE NINGÚN TIPO DE CUIDADO NI
                SERVICIO PROFESIONAL DE SALUD, MÉDICO, PSIQUIÁTRICO, MENTAL, NI
                TERAPIA DE CUALQUIER TIPO.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  marginTop: 20,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                1. FINALIDAD Y CARACTERÍSTICAS DEL SERVICIO DE AQUÍ ESTOY
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                Todos los servicios que Aquí Estoy (en adelante “Aquí Estoy” y
                “nosotros”) brinda a sus usuarios tienen por única finalidad
                conectar personas que deseen comunicarse, proporcionando un
                espacio virtual de encuentro y empatía entre estas. La
                interconexión de personas que Aquí Estoy realiza, comprende la
                prestación de un servicio neutro y automatizado, estableciendo
                conexiones en base a parámetros que los propios usuarios
                ingresan. De este modo, conecta a los usuarios que se registren
                como voluntarios para escuchar empáticamente a otros (los
                “Voluntarios”), con el resto de los usuarios que se registren
                para ser escuchados (los “Usuarios”), pudiendo a su vez los
                Voluntarios también ser Usuarios.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Aquí Estoy no realiza un control ni un procesamiento activo de
                las comunicaciones que los Voluntarios y los Usuarios mantienen,
                las cuales poseen carácter privado y estrictamente confidencial.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Cuando armes tu usuario, sea para participar como Usuario o como
                Voluntario, y así acceder y utilizar nuestra plataforma (en
                adelante los “Servicios”), te pedimos que leas detenidamente el
                presente documento. Al registrarte o utilizar los Servicios
                estás aceptando los presentes términos y condiciones del
                Servicio (en adelante, “Términos del Servicio”), nuestra
                política de privacidad (en adelante, la “Política de Privacidad”
                y en conjunto con los Términos del Servicio, los “Términos”)
                descriptos posteriormente. Si no aceptas los Términos no podrás
                utilizar los Servicios.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Estos Términos regirán la forma en qué Aquí Estoy presta sus
                Servicios y la forma en que tratamos tus datos personales,
                describirán qué datos recolectamos mediante los Servicios, y
                explicará de qué modo usamos, transferimos y almacenamos los
                datos luego de recolectarlos. Estos Términos te informarán si
                hemos revelado cualquier dato suyo y a quién, y te informará qué
                opciones tienes en cómo nosotros manejaremos y utilizaremos esos
                datos. Esperamos que, si tomas conocimiento de cómo y por qué
                nosotros utilizamos tu información, esto te ayudará a tomar una
                decisión informada sobre utilizar nuestros Servicios.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Los Voluntarios y Usuarios se comprometen utilizar los Servicios
                de Aquí Estoy exclusivamente para los fines previstos en los
                presentes Términos.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  marginTop: 20,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                2. CONSEJOS DE SEGURIDAD
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Aquí Estoy desalienta los encuentros físicos entre Voluntarios
                y Usuarios, o entre Usuarios o entre Voluntarios, para evitar
                situaciones confusas en que las personas puedan vivir hechos de
                inseguridad.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Por temas de seguridad, queda terminantemente prohibido
                planear u organizar todo tipo de encuentros físicos y/o
                presenciales entre los Voluntarios y Usuarios a través de la
                plataform
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Todo uso que se haga de los servicios de Aquí Estoy con el
                objetivo de organizar una reunión o encuentro físico y/o
                presencial entre Voluntarios y Usuarios constituirá una Conducta
                Prohibida.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                En ese sentido tanto Voluntarios como Oyentes asumen total
                responsabilidad por las consecuencias que puedan derivar de
                dicha Conducta Prohibida. La violación de esta disposición, como
                la de cualquier otra Conducta Prohibida, faculta, a Aquí Estoy a
                suspender y/o deshabilitar definitivamente al usuario infractor.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Para proteger la privacidad y seguridad de los usuarios de
                Aquí Estoy, es importante no comunicarse entre Usuarios o con
                Voluntarios fuera de la plataforma de Aquí Estoy.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Las personas con las que te contactes a través de la
                plataforma de Aquí Estoy sólo sabrán el nombre que haya indicado
                como “usuario”. Desaconsejamos proporcionar datos personales
                tales como nombre completo, número de documento, domicilio,
                lugar de trabajo, datos de familiares o cualquier otro tipo de
                información de índole personal.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Ningún representante de Aquí Estoy te contactará para
                solicitarle información personal, bancaria, ni tampoco para
                requerir que hagas ningún tipo de pago.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Si cualquier otro Usuario o Voluntario te solicita dinero o
                que realices pagos de cualquier tipo, o que compres cualquier
                tipo de bien o servicio, en nombre de Aquí Estoy, denúncialo.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Todos los Usuarios deben prestar especial atención a las
                “Conductas Prohibidas” previstas en los Términos. Si detectas o
                presumes que cualquier otro Usuario o Voluntario incumple en
                modo alguno los Términos, denúncialo.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Si te sentís incomodo en la conversación, abandónala.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Voluntarios y Usuarios se comprometen a respetar los consejos de
                seguridad establecidos por Aquí Estoy para la plataforma y los
                Servicios.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Aquí Estoy no asumirá responsabilidad alguna, bajo ningún
                concepto, de los actos ilegales objeto de sanciones civiles o
                penales que puedan cometer sus Voluntario y Usuarios.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Aquí Estoy no se hace responsable por las conductas de los
                Voluntarios y Usuarios dentro o fuera de la plataforma. De
                realizarse algún encuentro físico y/o presencial entre los
                Voluntarios y Usuarios, Aquí Estoy no se responsabilizará por
                los incidentes, lesiones, daños y perjuicios y/o delitos que se
                puedan ocasionar a raíz de dicho encuentro.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Aquí Estoy no asumirá responsabilidad alguna por los actos
                cometidos o los problemas ocasionados, independientemente de su
                naturaleza, por actuales o antiguos Voluntarios y Usuarios en el
                marco de situaciones derivadas del uso de la plataforma.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Aquí Estoy no tiene la posibilidad de controlar ni dirigir lo
                que los Voluntarios y Usuarios hacen o dicen, ni es responsable
                por sus acciones o conductas (dentro o fuera de la aplicación)
                ni por el contenido que comparten.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                En caso de incumplimiento de los dispuesto en este apartado
                sobre CONSEJOS DE SEGURIDAD, los Voluntarios y Usuarios liberan
                a Aquí Estoy de cualquier tipo de reclamo, queja, demanda,
                controversia o conflicto, conocidos o desconocidos,
                relacionados, derivados o conectados de algún modo con dicho
                encuentro físico y/o presencial.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  marginTop: 20,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                3. CONSENTIMIENTO. MODIFICACIONES A ESTOS TÉRMINO
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                En Aquí Estoy nos preocupamos por ti y siempre estamos
                intentando mejorar el Servicio de Aquí Estoy. Por ello, estos
                Términos podrán ser modificados de vez en cuando. Cualquier
                cambio será notificado y publicado en nuestra plataforma y
                podrás leerlos la próxima vez qué te conectes. Continuar con la
                utilización de los Servicios luego de la modificación de los
                Términos implica que has revisado y aceptado los nuevos
                Términos.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  marginTop: 20,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                4. NATURALEZA DE LOS SERVICIOS
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Nuestro Servicio está destinado a que puedas entablar una
                conversación de empatía con un Voluntario. Sin embargo, queremos
                dejar en claro que el uso de nuestro Servicio no implica que se
                ha creado una relación de abogado-cliente, médico-paciente,
                psicólogo-paciente, ni ningún otro tipo de relación que demande
                confidencialidad o título habilitante. Nosotros no somos tu
                médico, abogado, psicólogo, psiquiatra, madre o mejor amigo.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                AQUÍ ESTOY NO BRINDA NI SUSTITUYE NINGÚN TIPO DE CUIDADO NI
                SERVICIO PROFESIONAL DE SALUD, MÉDICO, PSIQUIÁTRICO, MENTAL, NI
                TERAPIA DE CUALQUIER TIPO. AQUÍ ESTOY TAMPOCO VALIDA O CONFIRMA
                LAS PROFESIONES QUE LOS VOLUNTARIOS DENUNCIAN EN SUS PERFILES.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Si crees que estás experimentando una situación que requiera una
                emergencia médica, o tu vida o la de los qué te rodean está en
                riesgo, llama inmediatamente al 911 o al servicio de emergencias
                de tu localidad. Asimismo, si estás experimentando algún
                problema clínico o médico de corto, mediano o largo plazo,
                consulta con un médico o profesional de la salud.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  marginTop: 20,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                5. RESPONSABILIDAD POR EL USO DE NUESTRO SERVICIO
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Tú asumes todo riesgo por el uso de nuestro Servicio. Ni Aquí
                Estoy ni ningún empleado, agente, proveedor o miembro del equipo
                de Aquí Estoy, ni ninguna entidad o persona con la que Aquí
                Estoy mantenga una relación contractual o comercial será
                responsable por tus acciones o las de terceros durante, después
                o como resultado del uso de nuestro Servicio.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Al aceptar estos Términos y Utilizar nuestros Servicios, estás
                aceptando mantener indemne e indemnizar a Aquí Estoy cualquier
                daño resultante de: (i) el uso de los Servicios, (ii) el
                incumplimiento de los Términos y/o de la ley, y (iii) reclamos
                realizados por terceros en relación al incumplimiento de los
                Términos.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                En Aquí Estoy trabajamos para qué el Servicio esté siempre
                disponible. Los Servicios se proporcionan tal cual se describen
                y según la disponibilidad del momento. Nosotros ponemos nuestros
                mejores esfuerzos y estamos constantemente tratando de mejorar,
                pero no podemos brindar garantías. Aquí Estoy y todos los que
                trabajan con nosotros negamos expresamente toda garantía de
                cualquier tipo. Especialmente, Aquí Estoy y los que trabajan con
                nosotros no garantizamos que nuestros Servicios: (i) cumplan con
                tus requerimientos, (ii) sean ininterrumpidos, o (iii) cumplan
                con tus expectativas. Las renuncias a responsabilidad anteriores
                se aplican a todos los daños o lesiones, incluidos los causados
                por cualquier falla en el desempeño, error, omisión,
                interrupción, eliminación, defecto o demora en la operación o
                transmisión, incluyendo negligencia, o cualquier otra causa de
                acción.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  marginTop: 20,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                6. CONDUCTAS PROHIBIDA
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Nos reservamos el derecho de restringir el acceso a Aquí Estoy
                de cualquier persona que realice alguna de las conductas qué se
                detallan a continuación (las “Conductas Prohibidas”):
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Usar el Servicio en forma contraria a la regulación vigente.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Utilizar los Servicios de Aquí Estoy para planear o concretar
                encuentros físicos o presenciales.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Utilizar los Servicios de Aquí Estoy para comercializar
                cualquier tipo de bien o servicio.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Amenazar, acosar o comunicarse de cualquier otra manera
                inadecuada con otro Usuario o Voluntario o con el equipo de Aquí
                Estoy.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Utilizar una identificación falsa.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Usar el servicio para tratar de explotar o dañar a menores
                exponiéndolos a contenido inapropiado.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Hacer capturas de pantalla, copiar o compartir conversaciones
                o información sobre la plataforma de Aquí Estoy, excepto cuando
                se reporte un comportamiento que se considere ilegal o abusivo.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Enviar, recibir, cargar, descargar, usar o reutilizar
                contenido que no cumpla con los Términos.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Recolectar información personal de un Usuario o Voluntario
                para enviar, spam, comercializar o enviar a terceras personas.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Llevar a cabo conductas que pudieran lesionar la habilidad de
                las personas para utilizar el Servicio o que exponga a cualquier
                tipo de responsabilidad a Aquí Estoy o a los usuarios de Aquí
                Estoy.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Copiar, adaptar, descompilar, realizar ingeniería inversa,
                intentar descubrir el código fuente o hacer un trabajo derivado
                del servicio o cualquier parte del Servicio.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Intentar interferir con el correcto funcionamiento de Aquí
                Estoy.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Por favor ten en cuenta que en caso de que se realice una
                captura de pantalla, se haga una copia, comparta o haga pública
                las conversaciones con qué se llevan a cabo dentro del Servicio
                de Aquí Estoy, no podremos controlar lo que suceda con esa
                información. Aquí Estoy no tiene posibilidad de acceder a la
                información o las imágenes una vez que se hagan públicas.
                Tampoco se compromete a intentar hacerlo.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Nos reservamos el derecho a remover de la plataforma a cualquier
                Voluntario o Usuario que haga pública cualquier interacción con
                Aquí Estoy.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Si sospechas de comportamientos ilegales o abusivos en la
                plataforma de Aquí Estoy, por favor mándanos un correo a la
                siguiente casilla de correo electrónico:
                reclamos@aquiestoy.live.
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  marginTop: 20,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                7. POLÍTICA DE PRIVACIDAD
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                En Aquí Estoy respetamos y nos comprometemos a preservar la
                confidencialidad de los datos personales de los Voluntarios y
                Usuarios
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                a. ¿Cómo procesamos los datos personales?
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Procesamos únicamente los datos personales de quien utilice los
                Servicios. Los datos personales que almacenamos son los
                siguientes:
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Para los Usuarios: dirección de correo electrónico y apodo del
                usuario
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Para los Voluntarios: [Nombre, mail, Edad, Nacionalidad,
                Lenguajes, profesión, cursos realizados, información adicional].
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                b. Cesión de datos personales a terceros por parte de los
                Voluntarios
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Los Voluntarios podrán compartir los datos que le compartas
                durante una conversación en las siguientes circunstancias:
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Cuando tú se lo indiques
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Cuando crea que tu vida o la vida de otra persona corra
                riesgo.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Cuando tengas sospechas de que eres menor de 18 años y has
                sufrido algún tipo de daño, abuso o estés en riesgo de sufrirlo.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Cuando brindes información sobre un presunto abusador que
                ponga en peligro a otras personas y deba acudir a los servicios
                públicos para ese tipo de situaciones.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Cuando indiques que estás poniendo en peligro tu salud o la
                salud de otras personas.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Al aceptar esta Política de Privacidad estás aceptando qué los
                Voluntarios puedan mostrar tus datos en los supuestos aquí
                detallados.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                c. ¿Qué hacemos con tus datos personales?
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Cuando inicias una conversación, Aquí Estoy usará tu correo
                electrónico para conectarte con un Voluntario. Los Voluntarios
                no tienen acceso a tu correo electrónico. Los Voluntarios
                tendrán únicamente la información que les brindes durante la
                conversación entre ustedes.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                El sistema utilizado para prestar nuestros Servicios no almacena
                el contenido de las conversaciones pero sí almacena información
                sobre (i) cuándo se realizó la llamada; (ii) desde dónde se
                hizo; (iii) cuánto duró y (iv) quiénes participaron.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Si utilizas el Servicio de Aquí Estoy después de aceptar estos
                Términos, estarás consintiendo a que Aquí Estoy:
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Realice el tratamiento y el almacenamiento de los datos que
                quieras compartir con nosotros a fin que puedas utilizar el
                Servicios sea como Voluntario o Usuario;
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Comparta tus datos con proveedores de soporte IT y de
                almacenamiento de datos aun cuando tales proveedores se
                encuentren fuera de tu país. En este caso, Aquí Estoy
                garantizará que tales proveedores a los que se le comparta los
                datos, se obliguen en los mismos términos que Aquí Estoy en
                materia de protección de datos personales.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Aquí Estoy no utiliza tus datos para ninguna otra actividad que
                la establecida en estos Términos.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                d. Encuestas
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Al finalizar la conversación, existe la posibilidad de que
                recibas un hipervínculo que remita a una encuesta o de que te
                pidamos que completes una encuesta online. Esto nos dará la
                posibilidad de saber más de tus preferencias y mejorar nuestro
                Servicio.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Algunas políticas que rodean la encuesta:
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Las respuestas son anónimas.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - No estás obligado a responder todas las preguntas.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                e. ¿Dónde almacenamos tus datos personales y por cuánto tiempo
                lo hacemos?
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Almacenamos tus datos personales en centros de datos que
                cumplen, y/o se encuentran ubicados en jurisdicciones que
                cumplen, con los estándares de la General Data Protection
                Regulation. Aquí Estoy ha verificado que todos nuestros
                proveedores de IP y almacenamiento de datos cumplen y se han
                obligado a respetar los estándares de protección de la
                legislación Argentina. Al aceptar estos Términos estás
                consintiendo que almacenemos tus datos tal como se prevé en este
                punto y siempre garantizando el estándar de protección de esta
                Política de Privacidad
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Cuando existan acuerdos de transferencias de datos personales
                fuera de tu país, Aquí Estoy tomará las medidas apropiadas para
                garantizar el cumplimiento de la legislación de protección de
                datos aplicable a su país.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Aquí Estoy retiene y almacena tus datos por el tiempo en qué
                seas Usuario o Voluntario. Sin en un momento decides dejar de
                serlo, entonces eliminaremos tus datos de nuestra base de datos.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Si transcurrido un plazo de 5 años, no vuelves a usar nuestros
                Servicios, también eliminaremos tus datos. Si pasado ese plazo
                nos vuelves a contactar, vas a aparecer como un usuario nuevo.
                No tendremos a disposición ningún tipo de información relativa a
                antiguas conversaciones.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                f. ¿Compartimos tus datos personales?
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                No compartiremos tus datos personales sin tu consentimiento,
                excepto que estemos obligados o nos sea permitido por ley, o nos
                sea requerido por una autoridad judicial o administrativa.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                g. ¿Cuáles son tus derechos? ¿A quién debería contactar?
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Todo Usuario o Voluntario tiene derecho sobre sus datos
                personales. Estos derechos son:
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Derecho a acceder a tus datos que Aquí Estoy tiene
                almacenados.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Derecho de rectificar alguno o todos tus datos que Aquí Estoy
                tiene almacenados.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                - Derecho de restringir o cancelar el procesamiento de tus datos
                personales. Ten en cuenta que en este caso, ya no podrás
                utilizar nuestros Servicios.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Aquí Estoy se compromete a ayudar a sus usuarios a ejercer sus
                derechos relacionados con la protección de datos personales.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Para tener acceso a tu información tienes que enviar correo
                electrónico a la casilla contacto@aquiestoy.live con el asunto
                que indique “Solicitud de acceso a datos”.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Si quieres eliminar tus datos personales deberás enviar un
                correo electrónico a la casilla contacto@aquiestoy.live.
                Recibirás una respuesta a tu solicitud en el transcurso de 30
                días y haremos todo el esfuerzo necesario para evacuar el
                requerimiento lo antes posible. Si existe algún impedimento
                legal para borrar los datos de nuestros registros te lo haremos
                saber.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Para cualquier otra consulta puedes mandar un correo electrónico
                a la casilla contacto@aquiestoy.live.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                h. ¿Cómo resguardar tus datos personales?
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Siempre ten cuidado y se responsable con tus datos personales y
                no divulgues tu información personal. Aquí Estoy no puede
                controlar, lo que los Voluntarios u otras personas no miembros
                de Aquí Estoy puedan hacer con la información personal qué les
                brindes.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 14,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                En Argentina la AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en
                su carácter de órgano de control de la Ley N° 25.326, tiene la
                atribución de atender las denuncias y reclamos que interpongan
                quienes resulten afectados en sus derechos por incumplimiento de
                las normas vigentes en materia de protección de datos
                personales.
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                Puedes consultar la legislación de la mayoría de los países
                [hipervínculo
                https://unctad.org/en/Pages/DTL/STI_and_ICTs/ICT4D-Legislation/eCom-Data-Protection-Laws
                .aspx]
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  marginTop: 20,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Bold"
                }}
              >
                8. LEY APLICABLE. USUARIOS INTERNACIONALES
              </Text>
              <Text
                style={{
                  color: colors.smoke,
                  fontSize: 12,
                  textAlign: "left",
                  fontFamily: "Kastelov--Axiforma-Regular"
                }}
              >
                Estos Términos y la provisión de nuestros Servicios se regirán y
                serán interpretados conforme las leyes de la República
                Argentina. En caso de conflicto, mediante la aceptación de los
                Términos y uso de los Servicios, usted acepta expresamente la
                prórroga de competencia hacia los tribunales ordinarios de la
                Ciudad de Buenos Aires, renunciando a cualquier otra que pudiera
                corresponder en virtud del territorio.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
