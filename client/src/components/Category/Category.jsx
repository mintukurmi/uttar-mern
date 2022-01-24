import { Chip } from "@material-ui/core";

const Category = ({ category }) => {
    return (
        <Chip
            style={{ margin: "5px", fontSize: "12px", textTransform: "capitalize" }}
            color={category?.color}
            size="small"
            label={category?.name}
        />
    );
};

export default Category;
