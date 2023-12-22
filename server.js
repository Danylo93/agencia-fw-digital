const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000/enviar-email",
    methods: "POST",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.post("/enviar-email", async (req, res) => {
  try {
    const { nome, email, mensagem } = req.body;

    // Configurar o transporte do nodemailer usando a HostGator
    const transporter = nodemailer.createTransport({
      host: "smtp.blessme.store", // Substitua com o servidor SMTP da HostGator
      port: 465,
      secure: true,
      auth: {
        user: "contato@blessme.store", // Substitua com o seu e-mail corporativo
        pass: "Jesus@2023", // Substitua com a sua senha
      },
    });

    // Definir as opções do e-mail
    const mailOptions = {
      from: "danylo.oliveira@gmail.com",
      to: "contato@blessme.store",
      subject: "Novo formulário de contato",
      text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`,
    };

    // Enviar o e-mail
    const info = await transporter.sendMail(mailOptions);

    console.log("E-mail enviado:", info.response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
