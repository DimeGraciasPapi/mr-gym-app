import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children, addUserMessage}) => {
  const planS = ()=>{
    const message = createChatBotMessage(<div>
      <p>👋 ¡Hola! Aquí tienes una lista de nuestros planes disponibles:</p>
    </div>
    ,{
      widget: "plansBtn"
    });
    updateState(message)
  };

  const planSmart =() =>{
    const message = createChatBotMessage(<div>
      <p>🌟 ¡Descubre nuestro Plan Smart!</p>
      <p>📅 Acceso en línea por 3 meses a solo S/119.90.</p>
      <p>🚫 Sin multa por cancelación.</p>
      <p>👉 ¡Únete ahora!</p>
    </div>
    ,{
      widget: "plansBtn"
    })
    updateState(message)
  }
  const planBlack = ()=>{
    const message = createChatBotMessage(<div>
      <p>🎉 ¡Descubre nuestro Plan Black!</p>
      <p>📅 Acceso en línea por 1 mes a solo S/79.90.</p>
      <p>🚫 Sin multa por cancelación.</p>
      <p>👉 ¡Únete ahora!</p>
    </div>
    ,{
      widget: "plansBtn"
    })
    updateState(message)
  };

  const horariosInfo = () =>{
    const message = createChatBotMessage(<div>
      <p>⏰ HORARIO</p>
    </div>
    ,{
      widget: "horaRario"
    })
    updateState(message)
  };

  const normasGym = () =>{
    const message = createChatBotMessage('hora de entrada',{
      widget: "startSlow"      
    })
    updateState(message)
  }

  const ubication = () =>{
    const message = createChatBotMessage('Nos ubicamos en:JR. JOSE OLAYA # 365 - EL TAMBO',{
      widget: "startSlow"
    })
    updateState(message)
  };

  const redesSociales = () =>{
    const message = createChatBotMessage('<FontAwesomeIcon icon={faWhatsapp}/>',{
      widget: "redesSociales"
    })
    updateState(message)
  };

// BRINDA NOMBRE
  const initialAction =() =>{
    const message = createChatBotMessage(<div>
      <p>👋 ¡Hola! Antes de empezar, ¿podrías proporcionarnos tu nombre, por favor?</p>
    </div>
    );
    updateState(message)
  };

  const afterNameMessage = (name) =>{
    console.log(name)
    const message = createChatBotMessage(`👋 ¡Hola ${name}! ¿En qué puedo ayudarte hoy?`,{
      widget: "startSlow"
    })
    updateState(message)
  };

  const showUserMessage = (message)=>{
    addUserMessage(message);
  }
  const finalResult = (option) =>{
    const message = createChatBotMessage("final")
    updateState(message);
  }

  const updateState = (message, checker = "name") => {
    setState((prev) =>({
      ...prev,
      messages: [...prev.messages, message],
      checker
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterNameMessage,
            finalResult,
            planS,
            planSmart,
            planBlack,
            horariosInfo,
            normasGym,
            ubication,
            redesSociales,
            showUserMessage: showUserMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
