const style = theme => ({
    appBar: {
        position: 'sticky',
        top: '0',
        zIndex: '2',
        backgroundColor: "white",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        padding: '5px 0',
        flexWrap: 'none !important'
    },
    search: {
        backgroundColor: '#e5e5e5',
        borderRadius: "40px",
        padding: '5px 20px',
        width: "55%",
        margin: '0 5px',
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        width: '70px',
        height: '70px',
        padding: "0 1%"
    },
    menuLink: {
        textDecoration: 'none !important',
        color: 'black',
        margin: '0 1px',
        padding: '5px 15px',
        fontSize: '1.2em',
        fontWeight: "bold",
        transition: '.4s',
        '&:hover': {
            color: 'black',
            backgroundColor: 'whitesmoke',
            padding: '19px 15px',
            borderRadius: ' 40px',
        }
    },
    searchInput: {
        width: '95%',
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
        fontSize: '1.7em !important',
        color: 'grey',
        cursor: 'pointer',
        transition: '.3s',
        padding: '15px 15px',
        '&:hover': {
            backgroundColor: 'whitesmoke',
            borderRadius: '50%',
        }
    },
    rightItem: {
        margin: '0',
    },
    btnLogin: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: 'black',
        transition: '.3s',
        borderRadius: '40px',
        '&:hover': {
            backgroundColor: 'whitesmoke',
            padding: '19px 15px',

        }
    }
})

export default style