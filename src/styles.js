import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    commentSectionTitle: {
        margin: 5,
        fontWeight: 'bold'
    },
    textInputSection: {
        backgroundColor: '#f2f2f2',
        padding: 5,
        borderRadius: 25,
        borderWidth: 0.6,
        borderColor: '#a5a5a5'
    },
    inputBox: {
        paddingHorizontal: 13,
        paddingVertical: 0,
        marginVertical: 0,
        color: '#000',
        minHeight: 40
    },
    textBox: {
        flexDirection: "row",
        paddingHorizontal: 13,
        paddingVertical: 0,
        marginVertical: 0,
        flex: 1,
        color: '#000'
    },
    commentName: {
        fontWeight: 'bold',
        paddingHorizontal: 13,
        color: '#000'
    },
    sendBtn: {
        marginHorizontal: 5,
        alignSelf: 'center'
    },
    sendImg: {
        width: 30,
        height: 30
    },
    ProfilePicture: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 10
    },
    commentCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 0,
        marginTop: 10,
        marginHorizontal: 10
    },
    optionPanel: {
        flexDirection: 'row',
        paddingLeft: 12,
        marginLeft: 5
    },
    commentOption: {
        marginRight: 20,
        marginVertical: 2
    },
    commentOptionText: {
        color: '#7c7c7c',
        fontWeight: '500'
    },
    replyComments: {
        flex: 1,
        paddingLeft: 67
    },


    seeMoreCommentsBtn: {
        paddingLeft: 77
    },
    seeMoreCommentsContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        paddingVertical: 0
    },
    seeMoreCommentsLoader: {
        marginLeft: 10
    },


    showRepliesContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginVertical: 0
    },
    showRepliesButton: {
        paddingLeft: 67,
        marginBottom: 0
    }
})