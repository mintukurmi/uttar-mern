import Category from "../Category/Category";
import "./style.css";
import { Chip } from "@material-ui/core";

const CategoryList = ({ categories }) => {
    if (categories?.length === 0) {
        return (
            <div style={{ marginTop: "15px", marginBottom: "25px" }}>
                <Chip className="chip br animate" />
                <Chip className="chip br animate" />
                <Chip className="chip br animate" />
                <Chip className="chip br animate" />
                <Chip className="chip br animate" />
                <Chip className="chip br animate" />
            </div>
        );
    }

    return (
        <div style={{ marginTop: "15px", marginBottom: "25px" }}>
            {categories?.map((category, index) => {
                return <Category key={index} category={category} />;
            })}
        </div>
    );
};

export default CategoryList;
