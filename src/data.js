import overlayBackground from "./assets/pink-background.gif";
import profilePicture from "./assets/profile.jpg";
import imghc1 from "./assets/HC-D1.jpg";
import imghc2 from "./assets/HC-D2.jpg";
import GBD1 from "./assets/GB-D1.jpg";
import corebizimg from "./assets/corebiz.jpg";
import portfolioreact from "./assets/portfolioreact.jpg";
import upmedal from "./assets/upmedal.png";

export const data = {
  user: {
    background: overlayBackground,
    picture: profilePicture,
    name: "Camila Keiko",
    description: "Front-end Developer"
  },
  content: [
    {
      title: "Hiring Coders",
      posts: [
        {
          background: imghc1,
          link: "https://veggyurban.netlify.app/",
          title: "Desafio#1 Landing Page",
          description: "Descrição"
        },
        {
          background: imghc2,
          link: "https://camilakeiko-cadastros.netlify.app/",
          title: "Desafio#2 Cadastros",
          description: "Descrição"
        },
        {
          background: upmedal,
          link: "https://pt-br.reactjs.org/docs/hooks-state.html",
          title: "Desafio#4 Upmedal ecommerce",
          description: "Descrição"
        },
        {
          background: corebizimg,
          link: "https://github.com/cahkei/HIRINGCODERS-G9",
          title: "Desafio#5 Corebiz ecommerce",
          description: "Descrição"
        }
      ]
    },
    {
      title: "Go Beyond",
      posts: [
        {
          background: GBD1,
          link: "https://keikogobeyond.netlify.app/",
          title: "#1 Ecommerce"
        },
        {
          background: portfolioreact,
          link: "https://portfoliokeiko.netlify.app/",
          title: "#2 Portfolio"
        },
        {
          background: "https://images.unsplash.com/photo-1627399270231-7d36245355a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=70",
          link: "https:/",
          title: " #3 ? "
        } 
      ]
    },  
    {
      title: "Stacks",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
          title: "HTML5",
          description: "Descrição"
        },
        {
          background: "https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          title: "CSS",
          description: "Descrição"
        },
        {
          background: "https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          title: "Javascript",
          description: "Descrição"
        },
        {
          background: "https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "https://reactjs.org/",
          title: "React",
          description: "Descrição"
        }
      ]
    }
  ],
  navigation: {
    linkedin: "https://www.linkedin.com/in/camilakeikomaeda/",
    github: "https://github.com/cahkei",
    email: "camilakeikosm@gmail.com"
  }
}