const { Button } = wp.components;

export default (openEvent, imageUrl, imageAlt) => {
    if(imageUrl) {
        return (
            <img src={ imageUrl } alt={ imageAlt } onClick={ openEvent } className="image" />
        );
    }
    else {
        return (<Button onClick={ openEvent } className="button button-large"> Pick an image </Button>);
    }
};