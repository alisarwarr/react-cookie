import Cookies from 'js-cookie';


export default function App(): JSX.Element {

    // Function to get a cookie
    const getCookie = () => {
        return Cookies.get('rememberMe');
    };
    // Function to set a cookie
    const setCookie = () => {
        Cookies.set('rememberMe', true, { expires: 7 });
        window.document.getElementById("rememberMe")!.innerHTML = getCookie();
    };
    // Function to remove a cookie
    const removeCookie = () => {
        Cookies.remove('rememberMe');
        window.document.getElementById("rememberMe")!.innerHTML = getCookie();
    };


    return (
        <div className="App">
            <h1>rememberMe:</h1>
            <p id="rememberMe">{getCookie()}</p>
            <button onClick={setCookie}>Set Cookie</button>
            <button onClick={removeCookie}>Remove Cookie</button>
        </div>
    )
}