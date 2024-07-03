import "../styles/styles.css"
import {LoginForm} from "@vaadin/react-components";


const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <LoginForm no-autofocus />
        </div>
    );
}


export default Login;