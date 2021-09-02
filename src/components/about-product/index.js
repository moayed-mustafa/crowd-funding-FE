const About = ({
	title = "The title",
	mainTypography = "Main Paragraph",
	secondaryTypography = "secondaryParagraph",
}) => {
	return (
		<div>
			<h3>{title}</h3>
			<p className='description-paragraph'>{mainTypography}</p>
			<p className='description-paragraph'>{secondaryTypography}</p>
		</div>
	);
};

export default About;
