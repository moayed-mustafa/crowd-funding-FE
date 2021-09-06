import { withStyles } from "@material-ui/core/styles";
import { Radio } from "@material-ui/core";


const StyledRadio = withStyles({
	root: {
		color: "hsl(0, 2%, 64%)",
		"&$checked": {
			color: "hsl(176, 50%, 47%)",
		},
	},
	checked: {},
})((props) => <Radio color='default' {...props} />);

export default StyledRadio