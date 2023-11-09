import { GiBiceps } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { MdSportsGymnastics } from "react-icons/md";

export const DATA = {
  GymGo: [
    {
      title: "Cardio y Ritmo",
      Icon: BsFillHeartPulseFill,
      color: "#7BC7FC",
      description: "¿Estás buscando una manera de mejorar tu salud cardiovascular? ¡Tenemos la solución perfecta para ti en nuestro gimnasio! Ofrecemos una amplia variedad de máquinas de cardio, desde cintas de correr y bicicletas estáticas, todas diseñadas para ayudarte a aumentar tu resistencia y mejorar la salud de tu corazón.",
      img_src: "gym_1.jpeg",
      to: "cardio-ritmo",
      isLeft: false,
      list: [
        {
          title:"Cardio General",
          src_img:"cardio-1.jpeg",
          description: "Estos ejercicios se centran en el fortalecimiento del sistema cardiovascular, lo que incluye el corazón, los pulmones y los vasos sanguíneos.",
          to:"general",
          links:[
            "https://www.youtube.com/embed/9GInaGRIggE?si=kYKqhkfyBvZM5xWY",
            "https://www.youtube.com/embed/7x4aywfS_Po?si=viA8-Wa4aS0ML958",
            "https://www.youtube.com/embed/_rO3AcSAt_U?si=tp6dQL545s5BJtz7"
          ]
        },
        {
          title: "Rutina de cardio HIIT",
          src_img: "cardio-2.jpeg",
          description:"El entrenamiento HIIT (High-Intensity Interval Training), en el contexto del gimnasio y la actividad física, es una forma de ejercicio cardiovascular de alta intensidad que combina ráfagas cortas de actividad intensa con intervalos de descanso o actividad de menor intensidad.",
          to: "hiit",
          links:[
            "https://www.youtube.com/embed/7x4aywfS_Po?si=K9V1fN9jPRSmxsDp"
          ]
        },
        {
          title: "Rutina de cardio y Abdominales",
          src_img: "cardio-3.jpeg",
          description: "La combinación de ejercicio cardiovascular y entrenamiento de abdominales en el gimnasio es una estrategia efectiva para trabajar tanto la resistencia cardiovascular como la fuerza y tonificación de los músculos abdominales.",
          to: "abdominal",
          links:[
            "https://www.youtube.com/embed/_rO3AcSAt_U?si=5CJHIVPj1U1ScOfV"
          ]
        }
      ]
    },
    {
      title: "Fuerza y Resistencia",
      Icon: GiBiceps,
      color: "#91D079",
      description: "¿Quieres fortalecer tus músculos y mejorar tu fuerza física? ¡Tenemos lo que necesitas en nuestro gimnasio! Contamos con una amplia variedad de equipos de entrenamiento de fuerza, desde pesas libres y máquinas de musculación hasta entrenamientos de alta intensidad y clases de levantamiento de pesas.",
      img_src: "gym_2.jpeg",
      to: "fuerza-resistencia",
      isLeft: true,
      list: [
        {
          title: "Biceps de acero",
          src_img: "fuerza-1.jpeg",
          description: "Los bíceps, en el contexto del gimnasio y el entrenamiento físico, se refieren a un grupo de músculos ubicados en la parte delantera del brazo. ",
          to: "bicep",
          links: [
            "https://www.youtube.com/embed/z7YXe6znsJo?si=utVNqb8qnVoy0-2U",
            "https://www.youtube.com/embed/siB4joWehyI?si=-b4M13CKnBb93d4y",
            "https://www.youtube.com/embed/SuQActpPCCM?si=o-Kw6JjYLOZA943u",
            "https://www.youtube.com/embed/0YbBlQbrtIE?si=MUIrFdwtLBw-UA6a"
          ]
        },
        {
          title: "Triceps de acero",
          src_img: "fuerza-2.jpeg",
          description:"Los tríceps, en el contexto del gimnasio y el ejercicio, se refieren a un grupo de músculos ubicados en la parte posterior del brazo. ",
          to: "tricep",
          links: [
            "https://www.youtube.com/embed/sXeYi7-y_6E?si=JaMhswCPT6DpaiA8",
            "https://www.youtube.com/embed/SoMXTIOc164?si=3H0aGhdCTdtxU0ec",
            "https://www.youtube.com/embed/siB4joWehyI?si=RdrjRBB2hRLwQvEY"
          ]
        },
        {
          title: "Espalda definida",
          src_img: "fuerza-3.jpeg",
          description: "El entrenamiento de espalda es esencial para lograr un desarrollo muscular equilibrado y una buena postura.",
          to: "espalda",
          links: [
            "https://www.youtube.com/embed/wzIsWDRQmVs?si=0Ar4YIXGPMQwA-Uf",
            "https://www.youtube.com/embed/d6jb5Q7G3wo?si=itNV2LJdSIdxMxBi",
            "https://www.youtube.com/embed/kOtqPcMFecE?si=VAvCcz4fKhcXxEpw",
            "https://www.youtube.com/embed/DIsPA-waA3k?si=Yt6tKMTJRgWV9iGj"
          ]
        },
        {
          title: "Pecho marcado",
          src_img: "fuerza-4.jpeg",
          description: " Los músculos pectorales tienen una forma anatómica que puede dividirse en dos partes principales: el pectoral mayor y el pectoral menor.",
          to: "pecho",
          links: [
            "https://www.youtube.com/embed/VB09kLgJDo0?si=Qlh4p759uDADPKkY",
            "https://www.youtube.com/embed/dddJSNgFsjI?si=OB8jYQTNdnyI6bQw",
            "https://www.youtube.com/embed/Vh9pL_2NMiQ?si=x9kVOPuYT6k4oNs-",
            "https://www.youtube.com/embed/AtPyiRWZhdw?si=14YnrotPwRrWbgTR"
          ]
        },
        {
          title: "Piernas de acero",
          src_img: "fuerza-5.jpeg",
          description: "Trabajar las piernas es crucial para lograr un equilibrio muscular completo y una base sólida para el rendimiento atlético. ",
          to: "pierna",
          links: [
            "https://www.youtube.com/embed/TtHdztYBZx8?si=5QM96qfUERb8HkEB",
            "https://www.youtube.com/embed/njkH7t8s--A?si=O3etMi84gSxRJq1R",
            "https://www.youtube.com/embed/4Xknk-xu41U?si=XTGpCoTfQYlBkpSl"
          ]
        },
        {
          title: "Pantorrillas definidas",
          src_img: "fuerza-6.jpeg",
          description:"Los ejercicios específicos para las pantorrillas, como elevaciones de talones, flexiones plantares y saltos, son comunes para fortalecer y tonificar estos músculos.",
          to: "pantorrilla",
          links: [
            "https://www.youtube.com/embed/4Xknk-xu41U?si=lPw7NW7n1T6dk5PR",
            "https://www.youtube.com/embed/XYJ6f_1Fkjg?si=U-iRVRCQRGdepaSA",
            "https://www.youtube.com/embed/BVIhpyt4VXs?si=UO86DnnwXHjeoeP-",
            "https://www.youtube.com/embed/LFR7BPbLmTc?si=-FIINf2OKZxGQmrF"
          ]
        }
      ]
    },
    {
      title: "Cuerpo y Mente",
      color: "#E486CA",
      Icon: MdSportsGymnastics,
      description: "¿Estás buscando una manera de mejorar tu salud cardiovascular? ¡Tenemos la solución perfecta para ti en nuestro gimnasio! Ofrecemos una amplia variedad de máquinas de cardio, desde cintas de correr y bicicletas estáticas, todas diseñadas para ayudarte a aumentar tu resistencia y mejorar la salud de tu corazón.",
      img_src: "gym_3.jpeg",
      to: "cuerpo-mente",
      isLeft: false,
      list: [
        {
          title: "Tipo de Cuerpo",
          src_img: "cuerpo-1.jpeg",
          description: "Hay tres clases de cuerpo que define el metabolismo del cuerpo.",
          to: "cuerpo",
          links: [
            "https://www.youtube.com/embed/VCd34a7zqic?si=8QxTnOB9Capm1gMU"
          ]
        },
        {
          title: "Endomorfo",
          src_img: "cuerpo-2.jpeg",
          description: "Complexión delgada.",
          to: "endomorfo",
          links:[
            "https://www.youtube.com/embed/lwYfl_greBM?si=n0LpuwCjZU7_iYFy"
          ]
        },
        {
          title: "Mesomorfo",
          src_img: "cuerpo-3.jpeg",
          description: "Complexión atletica.",
          to: "mesomorfo",
          links:[
            "https://www.youtube.com/embed/cS4PaHI_nho?si=TrqEYPghTMGuaCyJ"
          ]
        },
        {
          title: "Ectomorfo",
          src_img: "cuerpo-4.jpeg",
          description: "Complexión Blanda y redonda.",
          to: "ectomorfo",
          links:[
            "https://www.youtube.com/embed/kjzqXcgqzQA?si=UHMktSvAqMoDDUGv"
          ]
        }
      ]
    },
  ]
}
