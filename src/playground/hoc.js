import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is {props.info}</p>
    </div>

)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAdmin && <p>this is private info, please dont share !</p>
            }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (
                    <div>
                        <WrappedComponent {...props} />
                    </div>
                ) : (
                    <div>
                        <p>You Not Login</p>
                    </div>
                )
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo  = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info='there are the details' />, document.getElementById('app') );
ReactDOM.render(<AuthInfo isAuthenticated={true} info='there are the details' />, document.getElementById('app') );