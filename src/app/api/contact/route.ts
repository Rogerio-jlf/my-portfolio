import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validação do e-mail no backend
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com(\.[a-zA-Z]{2,})?$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "E-mail inválido." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Novo contato do site",
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${message}</p>`,
    });

    return NextResponse.json(
      { success: true, message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Erro ao enviar email", error },
      { status: 500 }
    );
  }
}
