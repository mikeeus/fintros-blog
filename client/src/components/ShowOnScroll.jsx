import { Fade } from "@material-ui/core";

function ShowOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ treshold: 100 });

  return (
    <Fade appear={false} in={!trigger}>
      {children}
    </Fade>
  );
}

ShowOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};