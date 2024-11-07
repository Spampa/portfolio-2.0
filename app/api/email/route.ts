import { NextResponse } from "next/server";
import Mailjet from 'node-mailjet';

interface Email {
    from: string,
    subject: string
    message: string
}

export async function POST(req: Request) {
    const mailjet = new Mailjet({ apiKey: process.env.MJ_PUBLIC, apiSecret: process.env.MJ_PRIVATE })
    const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: "pilot@mailjet.com",
                        Name: "Mailjet Pilot"
                    },
                    To: [
                        {
                            Email: "nicolo.spampa@gmail.com",
                            Name: "passenger 1"
                        }
                    ],
                    Subject: "Your email flight plan!",
                    TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                    HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })

    try {
        const email: Email = await req.json();

        return NextResponse.json({ response: 'Mail sended Succesfully' }, { status: 200 });
    }
    catch (err) {
        console.error('Error sending email:', err);
        return NextResponse.json({ response: 'Server Error, try later...' }, { status: 500 });
    }
}