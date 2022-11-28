const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const sendmail = (req, res) => {
    const { message } = req.body
    const token = process.env.PW
    const mail = 'cuidadomascotascondominio@gmail.com'
    if(!token || token == undefined || token == null){
        return res.status(400).send({message:"No se ha entregado la contraseña de aplicación para el correo"})
    }
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user:'cuidadomascotascondominio@gmail.com',
            pass: token
        }
    })
    let directory =[
        
    ]
    const mailOptions = {
        from: `Administrador <${mail}>`,
        to:directory,
        subject:'Retiro de mascota',
        text: `Hola, se ha realizado de forma correcta el envio de los correos, el mensaje era ${message}`,
        html:`
            <h1>Felicitaciones, se ha realizado el retiro de su mascota correctamente</h1>
            <p>${message}</p>
        `
    }
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            return res.status(400).send({message:'Error al enviar el correo'})
        }
        return res.status(200).send({message:'Mensaje enviado'})
    })

    transporter.verify().then(()=>{
        console.log('Servidor de correos habilitado')
    }).catch(err=>{
        console.log('Error al utilizar servidor de correos')
    })
}

module.exports = sendmail