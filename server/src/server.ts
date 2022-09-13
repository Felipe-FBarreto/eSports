import express from "express";


const booksByCategoty = [
  {
    categoty: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker"
      },
      {
        title:"O homem mais rico da Babilônia",
        author: "George S. Clason"
      },
      {
        title:"Pai rico, pai pobre",
        author:"Robert T. Kiyosaki e Sharon L. Lechter"
      }
    ]
  },
  {
    categoty: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury"
      },
      {
        title:"Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury"
      },
      {
        title:"Os 7 hábitos das pessoas altamente eficazes",
        author:"Stephen R. Covey"
      }
    ]
  }
]

const app = express();

app.get('/ads', (req,res) =>{ // req = buscar as informações // res = mostras as informações
  return res.json(booksByCategoty)
} )

app.listen(3333)