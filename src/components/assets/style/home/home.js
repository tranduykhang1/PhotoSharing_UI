const style = theme => ({
    appBar: {
        position: 'sticky',
        top: '0',
        zIndex: '2',
        backgroundColor: "white",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        padding: '0px 0',
        flexWrap: 'none !important'
    },
    search: {
        backgroundColor: '#e5e5e5',
        borderRadius: "40px",
        padding: '0px 20px',
        width: "55%",
        margin: '0 5px',
        display: 'flex',
        alignItems: 'center'
    },
    searchExpand: {
        backgroundColor: 'white',
        padding: '20px 30px',
        width: '61%',
        height: 'auto',
        position: 'absolute',
        left: '360px',
        top: '60px',
        boxShadow: '1px 4px 4px -2px #606060'
    },
    searchPrev: {
        display: 'flex !important'
    },
    searchItems: {
        padding: '5px 15px',
        margin: '0 7px',
        width: 'auto',
        backgroundColor: '#e5e5e5',
        borderRadius: '20px',

    },
    logo: {
        width: '60px',
        height: '60px',
        padding: "0px 3px   "
    },
    menuLink: {
        textDecoration: 'none !important',
        color: 'black',
        margin: '0 1px',
        padding: '5px 10px',
        fontSize: '1em',
        fontWeight: "bold",
        transition: '.4s',
        '&:hover': {
            color: 'black',
            backgroundColor: 'whitesmoke',
            padding: '13px 10px',
            borderRadius: ' 40px',
        }
    },
    searchInput: {
        width: '90%',
        border: 'none',
        padding: '5px 5px',
        fontSize: '1.2em',

        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        }
    },
    dropDownMenu: {
        margin: '0 30px'
    },
    icon: {
        fontSize: '1.3em !important',
        color: 'grey',
        cursor: 'pointer',
        transition: '.3s',
        padding: '13px 13px',
        '&:hover': {
            backgroundColor: 'whitesmoke',
            borderRadius: '50%',
        }
    },
    rightItem: {
        margin: '0',
    },
    btnLogin: {
        fontSize: '1em',
        fontWeight: 'bold',
        color: 'black',
        transition: '.3s',
        borderRadius: '40px',
        '&:hover': {
            backgroundColor: 'whitesmoke',
            padding: '13px 10px',

        }
    },
    profileContainer: {
        backgroundColor: "white",
        width: "200px",
        position: "absolute",
        right: "0px",
        top: "60px",
        padding: "10px 20px",
        borderRadius: "10px",
        fontWeight: "bold",
        boxShadow: '0 0 3px #bababa'
    }

})

export default style