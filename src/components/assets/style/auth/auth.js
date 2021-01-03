import img from "../../img/login-background.jpg"

const style = theme => ({
    authContainer: {
        // height: '650px',
        maxHeight: '800px',
        margin: '50px auto',
        boxShadow: '1px 1px 6px 2px #e3e3e3;'
    },
    loginForm: {
        padding: '50px 0',

    },
    registerForm: {
        padding: '10px 0',

        height: 'auto'
    },
    forgotPasswordForm: {
        marginTop: '40px',
        boxShadow: '1px 5px 6px 3px #a4a4a4',
        padding: '40px',
        borderRadius: '10px'
    },
    updatePasswordForm: {
        marginTop: '40px',
        boxShadow: '1px 5px 6px 3px #a4a4a4',
        padding: '40px',
        borderRadius: '10px'
    },
    image: {
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    logo: {
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center'
    },
    loginTitle: {
        marginBottom: '30px',
        textTransform: 'uppercase',
    },
    formControl: {
        // marginLeft: '17%',
        padding: "2% 15%"
    },
    formItem: {
        margin: '15px 0;'
    },
    registerNow: {
        margin: '15px 0'
    },
    registerContainer: {
        margin: 'auto'
    },
    link: {
        color: '#002fe7',
        textDecoration: 'none'
    },
})

export default style