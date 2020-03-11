
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthnenticated? <WrappedComponent {...props} /> : <p>You are not authenticated!</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="This is the detail" />, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthnenticated={true} info="This is the detail" />, document.querySelector('#app'));