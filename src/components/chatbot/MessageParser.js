import React from 'react';

const MessageParser = ({ children, actions }) => {
 //EN ESTE APARTADO SE HACE EL GUARDADO DEL COMPONENTE "NAME"
  const parse = (message) => {
    if(children.props.state.checker === "name"){
          actions.afterNameMessage(message);
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
