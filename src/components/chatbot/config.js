import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './pages/Avatar';
import StartBtn from './StartBtn/StartBtn.js';
import StartSlow from './StartSlow/StartSlow.js';
import PlansBtn from './plansBtn/plansBtn.js';
import RedesSociales from './class/RedesSociales.js';
import HorariOr from './class/horario.js'

const config = {
  botName: "MR GYM",
  initialMessages: [createChatBotMessage(
  <div>
    <p>🏋️‍♂️ ¡Bienvenido a MR GYM!</p>
    <p>Estamos emocionados de tenerte con nosotros. ¡Prepárate para alcanzar tus metas de fitness y sentirte mejor que nunca!</p>
  </div>
  
  ,{
    widget: "startBtn"
  })],
  customComponents:{
    botAvatar:(props) =>  <Avatar {...props} />,    
  },
  state:{
    checker: null,
    userData:{
      //POR  VER===============>
      option: ""
    }
  },
  widgets:[
    {
      widgetName: 'startBtn',
      widgetFunc: (props) => <StartBtn {...props}/>,
    },
    {
      widgetName: 'startSlow',
      widgetFunc: (props) => <StartSlow {...props}/>,
    },
    {
      widgetName: 'plansBtn',
      widgetFunc: (props) => <PlansBtn {...props}/>,
    },
    {
      widgetName: 'redesSociales',
      widgetFunc: (props) => <RedesSociales{...props}/>,
    },
    {
      widgetName: 'horaRario',
      widgetFunc: (props) => <HorariOr{...props}/>,
    }      
  ]
};

export default config;
