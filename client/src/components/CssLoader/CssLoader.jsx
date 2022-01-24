import "./style.css";
import { Card, CardHeader, CardContent, Typography, Chip, CardActions } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

const CssLoader = () => {
    const cards = ["1", "2", "3", "4"];

    return (
        <div>
            {cards.map((item, index) => {
                return (
                    <Card key={index} className="card">
                        <CardHeader
                            avatar={<Avatar className="profilePic animate din" />}
                            title={<Typography className="comment br animate w30"></Typography>}
                        />
                        <div style={{ marginLeft: "10px" }}>
                            <Chip className="chip br animate" />
                            <Chip className="chip br animate" />
                            <Chip className="chip br animate" />
                        </div>

                        <CardContent>
                            <Typography className="comment br animate w100"></Typography>
                            <Typography className="desc animate w100"></Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography
                                style={{ marginLeft: "15px" }}
                                className="chip-sm br animate"
                            ></Typography>

                            <Typography
                                style={{ marginLeft: "15px" }}
                                className="chip-sm br animate"
                            ></Typography>

                            <Typography
                                style={{ marginLeft: "15px" }}
                                className="chip-sm br animate"
                            ></Typography>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
};

export default CssLoader;
