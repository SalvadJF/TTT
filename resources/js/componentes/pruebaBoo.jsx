import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import {createRoot} from 'react-dom/client'

const Example = () => {
    return (
        <Alert dismissible variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Change this and that and try again.</p>
        </Alert>
      );
}

export default Example

if (document.getElementById("pruebaBoo")){
    createRoot(document.getElementById("pruebaBoo")).render(<Example/>)
}
