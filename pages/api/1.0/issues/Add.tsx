import DatabaseHandler from "../../../../util/DatabaseClient";


export default function Add(req: any, res: any) {
    const body = req.body;

    console.log(req.body)

    if (body.title === undefined || body.content === undefined) {
        res.status(400).send("Missing title or content");
        return;
    }

    // TODO: fetch the user id from the session
    DatabaseHandler.AddIssue(-1, body.title, body.content)
    res.status(200).send("Success");
}