import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.render("index", {
        title: "User Registration",
        error: null,
        user: null
    });
});

app.post("/register", (req: Request, res: Response) => {
    const username = req.body.username;
    const age = req.body.age;

    if (!username || !age) {
        return res.render("index", {
            title: "User Registration",
            error: "Please enter username and age",
            user: null
        });
    }

    res.render("index", {
        title: "User Registration",
        error: null,
        user: username
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});