import colors from "./colors";

const styles = {
  scrollUp: {
    marginTop: 10,
    paddingVertical: 10,
  },

  cardDetails: {
    backgroundColor: colors.smoke,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 16,
    marginHorizontal: "5%",
    paddingBottom: 20,
  },

  cardDetailsDate: {
    alignItems: "flex-end",
    margin: 24,
    fontFamily: "Kastelov--Axiforma-Bold",
    color: colors.blue,
  },

  cardDetailsRef: {
    alignSelf: "flex-start",
    marginLeft: 16,
    fontFamily: "Kastelov--Axiforma-Bold",
    color: colors.blue,
    marginTop: 50,
  },

  cardDetailsTitle: {
    marginTop: 10,
    color: colors.green,
    fontFamily: "Kastelov--Axiforma-Bold",
    fontSize: 24,
  },

  ammountContainer: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    marginTop: 30,
  },

  ammountType: {
    alignSelf: "flex-start",
    fontFamily: "Kastelov--Axiforma-Bold",
    color: colors.darkWhite,
    fontSize: 12,
  },

  ammountCurrency: {
    alignSelf: "flex-end",
    fontFamily: "Kastelov--Axiforma-Bold",
    color: colors.black,
    fontSize: 12,
    marginTop: -17,
    marginLeft: 110,
  },

  ammountValue: {
    alignSelf: "center",
    fontFamily: "Kastelov--Axiforma-Bold",
    color: colors.green,
    fontSize: 22,
  },

  searchInput: {
    width: "93%",
    marginTop: 20,
    fontFamily: "Kastelov--Axiforma-Medium",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.smoke,
    color: colors.gray,
    paddingVertical: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemRef: {
    fontFamily: "Kastelov--Axiforma-Bold",
    color: colors.black,
    marginLeft: 10,
  },

  itemAmmount: {
    fontFamily: "Kastelov--Axiforma-Bold",
    color: colors.green,
    textAlign: "right",
    marginRight: 25,
  },

  cardChart: {
    height: 300,
    backgroundColor: colors.smoke,
    margin: 16,
    borderRadius: 20,
  },

  iconItemRef: {
    fontFamily: "Kastelov--Axiforma-Bold",
    color: colors.lightGray,
    marginTop: 20,
    marginLeft: 10,
  },

  iconItemDesc: {
    fontFamily: "Kastelov--Axiforma-Regular",
    color: colors.gray,
    marginTop: 0,
    marginLeft: 10,
    paddingRight: 20,
    fontSize: 14,
  },

  chatDateCollection: {
    color: colors.blue,
    marginVertical: 10,
    fontFamily: "Kastelov--Axiforma-Bold",
    fontSize: 10,
    textAlign: "center",
  },

  formContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    marginTop: "5%",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },

  loginInput: {
    width: "90%",
    marginTop: 20,
    fontFamily: "Kastelov--Axiforma-Medium",
    justifyContent: "center",
    backgroundColor: colors.lightWhite,
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },

  loginButton: {
    width: "70%",
    justifyContent: "center",
    backgroundColor: colors.green,
    paddingVertical: 10,
    borderRadius: 10,
  },

  signUpButton: {
    width: "80%",
    marginTop: 30,
    justifyContent: "center",
    backgroundColor: colors.green,
    paddingVertical: 10,
    borderRadius: 10,
  },

  diasbledSignUpButton: {
    width: "80%",
    marginTop: 30,
    justifyContent: "center",
    backgroundColor: colors.lightGray,
    paddingVertical: 10,
    borderRadius: 10,
  },

  pageTitle: {
    color: colors.green,
    fontFamily: "Kastelov--Axiforma-Medium",
    fontSize: 20,
  },

  dateReference: {
    color: colors.lightGray,
    fontFamily: "Kastelov--Axiforma-Bold",
    fontSize: 16,
    marginTop: 15,
  },

  dateDetails: {
    color: colors.gray,
    fontFamily: "Kastelov--Axiforma-Regular",
    fontSize: 14,
  },

  listRef: {
    margin: 24,
    fontFamily: "Kastelov--Axiforma-Bold",
    color: colors.darkWhite,
    fontSize: 18,
    marginBottom: 15,
  },

  annotation: {
    fontFamily: "Kastelov--Axiforma-Regular",
    fontSize: 13,
    marginTop: 15,
    width: 300,
    marginLeft: 20,
    alignSelf: "flex-start",
    color: colors.lightGray,
  },

  description: {
    textAlign: "center",
    marginBottom: 20,
    marginTop: 66,
    fontFamily: "Kastelov--Axiforma-Medium",
    fontSize: 13,
    color: colors.lightGray,
    marginHorizontal: 15,
  },

  messageReceiverContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
  },

  messageReceiverContainerDetails: {
    alignItems: "flex-start",
    marginVertical: 10,
    paddingHorizontal: 10,
    maxWidth: "78%",
  },

  messageReceiverUsername: {
    color: colors.lightGray,
    fontFamily: "Kastelov--Axiforma-Bold",
    fontSize: 15,
  },

  messageReceiverDate: {
    color: colors.darkWhite,
    fontFamily: "Kastelov--Axiforma-Bold",
    fontSize: 8,
    textAlign: "center",
  },

  messageReceiverBody: {
    color: colors.gray,
    fontFamily: "Kastelov--Axiforma-Regular",
    fontSize: 13,
    marginRight: 10,
  },

  messageSenderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
  },

  messageSenderBody: {
    color: colors.gray,
    fontFamily: "Kastelov--Axiforma-Regular",
    fontSize: 13,
    marginRight: 15,
  },

  messageSenderDate: {
    color: colors.darkWhite,
    fontFamily: "Kastelov--Axiforma-Bold",
    marginTop: -5,
    fontSize: 8,
    textAlign: "right",
    marginHorizontal: "10%",
  },

  messageSenderAvatarContainer: {
    width: 140,
    height: 50,
    backgroundColor: colors.lightWhite,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },

  messageSenderAvatar: {
    width: 10,
    height: 10,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 1000,
  },
};

export default styles;
