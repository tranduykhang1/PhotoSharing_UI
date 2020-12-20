const style = theme => ({
    cardContainer: {
        margin: '20px 3.3%',
        flexWrap: 'wrap !important',
        // justifyContent: 'center'
    },
    cardItems: {
        position: 'relative',
        flex: '20%',
        margin: '30px 10px',
        flexWrap: 'wrap !important',
        cursor: 'pointer',
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
                opacity: '.8'
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
        cursor: 'pointer'
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
        backgroundColor: 'white',
        width: '70%',
        borderRadius: '10px 0 0 10px',
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
        padding: '10px 0',
        borderRadius: '0 10px 10px 0',
        '&:hover': {
            backgroundColor: '#ff4b67',

        }
    },
    bottomOption: {
        position: 'absolute',
        top: '75%',
        left: '50%',
        width: '80%',
        transform: 'translateX(-50%)',
        opacity: '0',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: '.3s'
    },
    showUser: {
        backgroundColor: 'white',
        borderRadius: '40px',
        padding: '10 5px',
        color: 'black',
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
    photoContainer: {
        margin: '70px auto',
        height: '750px',
        borderRadius: '40px',
        boxShadow: "0px 1px 15px 0px #c9c9c9",
        color: 'black'

    },
    infoContainer: {
        padding: '20px 30px'
    },
    selectAlbum: {
        backgroundColor: '#d5d5d5',
        width: '100%',
        borderRadius: '10px 0 0 10px',
        outline: 'none',
        border: 'none',
        padding: '6.7px',
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
        maxHeight: '450px',
        height: '100%',
        borderRadius: '40px 0 0 40px',
    },
    userInfo: {
        margin: '40px 0px',
        color: 'black',
        justifyContent: 'left',
    },
    btnFollow: {
        textTransform: 'inherit',
        fontSize: '1.1em',
        fontWeight: 'bold',
        backgroundColor: '#ddd',
        borderRadius: '40px',
        padding: ' 10px 25px !important'
    },
    reaction: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',

    },
    photoHeart: {
        color: 'grey',
    },
    photoHeartActive: {
        color: '#ff4b67'
    }




})

export default style