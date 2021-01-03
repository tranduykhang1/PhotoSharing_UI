const style = theme => ({
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black'
    },
    userAvatar: {
        width: '100px',
        height: '100px',
        fontSize: '4em'
    },
    userProfile: {
        margin: '50px 0'
    },
    follow: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.2em',
        margin: '5px 0'
    },
    albumItems: {
        display: 'flex',
        alignItems: 'center',

        width: '187px',
        height: '200px',
        margin: '0 30px',
        padding: '0',
        cursor: 'pointer'
    },
    photo: {
        flex: 'auto',
        width: '100%',
        minWidth: '103px',
        height: '180px',
        maxWidth: '250px',
        marginInlineEnd: '-54px',
        borderRadius: '20px'
    },
    icon: {
        fontSize: '2.5em',
        fontWeight: 'bold',
        transition: '.3s',
        padding: '15px',
        borderRadius: '40px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#e0dfdf',
        }
    },
    updateProfile: {
        color: 'black',
        margin: '100px auto'
    },
    labelImage: {
        fontSize: '1em',
        margin: '0 10px !important',
        cursor: 'pointer',
        borderRadius: '40px',
        backgroundColor: '#e0dfdf',
        padding: '10px'
    },
    AccordionDetails: {
        width: '80%',
        margin: 'auto',
        display: 'block',
    },
    albumItem: {
        position: 'relative',
    },
    updateContainer: {
        position: 'absolute',
        top: '20px',
        left: '90%',
        transform: 'translateX(-90%)',
        zIndex: '3',
        backgroundColor: 'white',
        opacity: '.7',
        padding: '5px 7px',
        borderRadius: '40px',
        '&:hover': {
            opacity: '.5',
        }
    },
    listAlbums: {
        flexWrap: 'wrap !important'
            // justifyContent: 'space-between'
    }
})

export default style;