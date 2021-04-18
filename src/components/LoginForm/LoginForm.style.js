import { style } from 'typestyle';

export const styles = {

    container: style({
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        border: 'solid',
        borderColor: '#00b4d8',
        borderRadius: '5px',
        borderWidth: '1px',
        height: '50%',
        width: '50%',
        backgroundColor: '#222a36',
        $nest: {
            '@media screen and (max-width: 700px)': {
                width: '75%',
            }
        }
    }),

    title: style({
        fontFamily: 'Antonio , sans-serif',
        alignSelf: 'center',
        fontSize: '60px',
        letterSpacing: '20px',
        color: '#ffffff',
        $nest: {
            '@media screen and (max-width: 700px)': {
                fontSize: '40px',
            }
        }
    }),

    form: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh'
    }),

    inputContainer: style({
        marginTop: "30px",
        display: 'flex',
        flexDirection: 'column'
    }),

    input: style({
        fontFamily: "PT Sans Narrow, sans-serif",
        paddingLeft: '10px',
        borderRadius: '5px',
        fontSize: '15px',
        color: '#ffffff',
        marginTop: '30px',
        height: '40px',
        backgroundColor: '#253244',
        borderTopStyle: "hidden",
        borderRightStyle: "hidden",
        borderLeftStyle: "hidden",
        borderBottomStyle: "hidden",
        $nest: {
            '&::placeholder': {
                color: '#bababa'
            },
            '@media screen and (max-width: 700px)': {
                marginTop: "10px",
                fontSize: '14px',
                height: '20px',
                padding: "5px",
            }
        }
    }),

    submit: style({
        marginTop: '40px',
        height: '50px',
        width: '100%',
        padding: "10px 15px 50px",
        fontFamily: "PT Sans Narrow, sans-serif",
        borderRadius: '5px',
        fontSize: '30px',
        color: '#ffffff',
        alignSelf: 'center',
        backgroundColor: '#2299b1',
        borderTopStyle: "hidden",
        borderRightStyle: "hidden",
        borderLeftStyle: "hidden",
        borderBottomStyle: "hidden",
        $nest: {
            '&:hover': {
                backgroundColor: '#111824',
                color: '#bfcba8',
                transition: '0.3s'
            },
            '@media screen and (max-width: 700px)': {
                marginTop: "10px",
                fontSize: '20px',
                height: '50px',
                padding: "5px",
            }
        }
    }),

    footer: style({
        marginTop: "15px",
        fontFamily: "PT Sans Narrow, sans-serif",
        color: "#bababa",
        alignSelf: 'center',
        $nest: {
            '&:hover': {
                textDecoration: "underline"
            },
        }
    }),

    invalidCredentials: style({
        fontFamily: "PT Sans Narrow, sans-serif",
        color: "#d10d0d",
        alignSelf: 'center',
        position: "absolute",
    })

}