import './Card.css';

function Card(props) {
    //props.className is the css property of the props.children
    const classes = 'card ' + props.className;
    return (
        //children will be what's b/n the opening and closing tag in the Card component
        <div className={classes}>{props.children}</div>
    )
}

export default Card;