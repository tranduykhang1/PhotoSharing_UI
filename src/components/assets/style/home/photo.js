const style = theme => ({
    cardContainer: {
        margin: '20px 3.3%',
        flexWrap: 'wrap !important',
        color: 'black'
            // justifyContent: 'center'
    },
    cardItems: {
        position: 'relative',
        flex: '20%',
        margin: '30px 10px',
        flexWrap: 'wrap !important',
        boxShadow: 'none !important',
        borderRadius: '20px',
        background: 'transparent',
        '&:hover': {
            '& $albumOption': {
                display: 'flex',
                opacity: '.9'
            },
            '& $bottomOption': {
                display: 'flex',
                opacity: '.9'
            },
        }

    },
    cardColumn: {
        position: 'relative',
        display: 'flex',
        flex: '20%',
        maxHeight: '400px',
        margin: '5px 5px',
        flexWrap: 'wrap !important',
        borderRadius: '20px',
    },
    image: {
        maxHeight: '410px',
        minHeight: "300px",
        height: '100%',
        width: '100%',
        cursor: 'zoom-in',
        borderRadius: '20px',
        transition: '.4s'
    },
    albumOption: {

        position: 'absolute',
        opacity: '0',
        width: '80%',
        left: '50%',
        top: '4%',
        justifyContent: 'center',
        transform: 'translateX(-50%)',
        borderRadius: '40px',
        padding: '5px 0',
        transition: '.3s'
    },
    select: {
        backgroundColor: '#e3e3e3',
        width: '70%',
        borderRadius: '10px 0 0 10px !important',
        outline: 'none',
        border: 'none',
        padding: '0 5px',
        '&::before': {
            border: 'none !important'
        },
        '&::after': {
            border: 'none !important',
            backgroundColor: 'white !important'
        }
    },
    saveImg: {
        backgroundColor: '#e60023',
        color: 'white !important',
        width: '40px',
        padding: '6px 0',
        borderRadius: '0 10px 10px 0',
        fontSize: '1em !important',
        textTransform: 'inherit',
        '&:hover': {
            backgroundColor: '#ff4b67',

        }
    },
    removeImg: {
        backgroundColor: '#e60023',
        color: 'white !important',
        width: '40px',
        marginLeft: '120px',
        padding: '6px 0',
        borderRadius: '10px',
        fontSize: '1em !important',
        textTransform: 'inherit',
        '&:hover': {
            backgroundColor: '#ff4b67',

        }
    },
    bottomOption: {
        position: 'absolute',
        bottom: '50px',
        left: '50%',
        width: '80%',
        transform: 'translateX(-50%)',
        opacity: '0',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: '.3s',
    },

    countReaction: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ff4b67',
        borderRadius: '10px',
        padding: '5px'
    },
    showUser: {
        backgroundColor: 'white',
        opacity: '.8',
        borderRadius: '40px',
        padding: '2px 6px',
        fontSize: '1em',
        color: 'black',
        textTransform: 'inherit',
        '&:hover': {
            backgroundColor: 'whitesmoke',
        }
    },
    photoTitle: {

        '& $textTitle': {
            fontSize: '15px',
            fontWeight: 'bold',
        }
    },
    textTitle: {
        textAlign: 'left',
        padding: '0 10px',
        fontSize: '1em',
        fontWeight: 'bold',
    },

    photoContainer: {
        margin: '50px auto',
        maxHeight: '700px',
        borderRadius: '40px',
        boxShadow: "0px 1px 15px 0px #c9c9c9",
        color: 'black',
        backgroundColor: 'white',
        position: 'relative'
    },
    infoContainer: {
        padding: '20px 30px'
    },
    titleAndDesc: {
        padding: '20px 0 10px 0px',
        borderBottom: '1px solid #d8d8d8',
    },
    selectAlbum: {
        background: '#e8e7e7 ',
        width: '100%',
        borderRadius: '10px 0 0 10px !important',
        justifyContent: 'center',
        outline: 'none',
        border: 'none',
        padding: '4px',
        '&::before': {
            border: 'none !important'
        },
        '&::after': {
            border: 'none !important',
            backgroundColor: 'white !important'
        }
    },
    photo: {
        width: '100%',
        height: '100%',
        borderRadius: '40px 0 0 40px !important',
    },
    userInfo: {
        margin: '20px 0px',
        color: 'black',
        justifyContent: 'left',
    },
    btnFollow: {
        textTransform: 'inherit',
        fontSize: '1em',
        fontWeight: 'bold',
        backgroundColor: '#ddd',
        borderRadius: '40px',
        padding: ' 10px 25px !important'
    },
    reaction: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: '100%',
        position: 'relative'
    },
    reactionHeart: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: '10px',
        right: '-80px'
    },
    commentContainer: {
        display: 'block !important',
        width: '100%',
        maxHeight: '250px',
        boxShadow: 'none !important',
        margin: '0'
    },
    commentContent: {
        display: 'block',
        maxHeight: '260px',
        overflow: 'auto',
        padding: '0 8px !important'

    },
    btnComment: {
        padding: '0px',
        borderRadius: "20px",
        backgroundColor: '#ddd',
        border: 'none'
    },
    photoHeart: {
        color: '#ff4b67',
        marginLeft: "3px"

    },
    //following
    followingTitle: {
        color: 'black',
        textAlign: 'center',
        margin: '20px 0'
    },
    followingAvatar: {
        width: '70px',
        height: '70px',
        border: '2px solid white',
        marginInlineEnd: '-20px'
    },
    createIcon: {
        cursor: "pointer",
        fontSize: "40px",
        fontWeight: "bold",
        backgroundColor: "black",
        color: "white",
        borderRadius: "40px",
        position: "absolute",
        right: "10px",
        bottom: "20px",
        position: "fixed",
        transition: '.5s',
        '&:hover': {
            backgroundColor: '#3b3b3b'
        }
    },
    createModal: {
        height: "600px",
        width: "100%",
        backgroundColor: "white",
        margin: "100px auto",
        borderRadius: "10px",
        padding: '20px 40px',
    },
    photoFrame: {
        flexDirection: 'column',
        backgroundColor: "#b8b8b8",
        height: '400px',
        width: '80%',
        borderRadius: "10px",
        margin: '50px 10px',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: '3px dashed grey'
    },
    photoTitle: {
        width: '100%',
    },
    photoDesc: {
        width: '100%',
    },
    createPhoto: {
        width: '100%',
        height: '400px',
        borderRadius: '10px'
    },
    createSelectAlb: {
        flexDirection: 'column'
    },
    createAlb: {
        width: '87%',
        padding: '10px',
        margin: '20px 0'
    },
    btnCreate: {
        width: '100%',
        color: 'white',
        textTransform: 'inherit',
        margin: '20px 0',
        backgroundColor: '#e60023',
        "&:hover": {
            backgroundColor: '#ff4b67',
        }
    },
    //album page
    moreIcon: {
        margin: '0 5px',
        padding: '5px',
        color: 'grey',
        borderRadius: '40px',
        backgroundColor: '#e7e5e5',
        cursor: 'pointer',
        fontSize: '2em',
        '&:hover': {
            backgroundColor: '#e1dfdf',
        }
    },



})

export default style