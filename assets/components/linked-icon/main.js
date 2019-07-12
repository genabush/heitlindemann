const { MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;

registerBlockType('gutenberguest/linked-icon', {
    title: 'Linked Icon Block',

    category: 'common',

    attributes: {
        imageAlt: {
            attribute: 'alt',
            selector: '.linked-icon__img'
        },
        imageUrl: {
            attribute: 'src',
            selector: '.linked-icon__img'
        },
        link: {
            type: 'string'
        },
        caption: {
            type: 'string'
        }
    },

    edit({ attributes, className, setAttributes }) {
        const getImageButton = (openEvent) => {
            if(attributes.imageUrl) {
                return (
                    <img
                        src={ attributes.imageUrl }
                        alt={ attributes.imageAlt }
                        onClick={ openEvent }
                        className="image"
                    />
                );
            }
            else {
                return (<Button onClick={ openEvent } className="button button-large"> Pick an image </Button>);
            }
        };

        return (
            <div className="container">
                <MediaUpload
                    onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
                    type="image"
                    value={ attributes.imageID }
                    render={ ({ open }) => getImageButton(open) }
                />
                <br /><br />
                <PlainText
                    onChange={ content => setAttributes({ caption: content }) }
                    value={ attributes.caption }
                    placeholder="Add Caption"
                    className="caption"
                />
                <br /><br />
                <PlainText
                    onChange={ content => setAttributes({ link: content }) }
                    value={ attributes.link }
                    placeholder="Add Link"
                    className="link"
                />
            </div>
        );
    },

    save({ attributes }) {
        let classNameBase = 'icons-block';
        if(attributes.className) {
            classNameBase = attributes.className;
        }

        let innerClassName      = classNameBase + '__inner',
            imgClassName        = classNameBase + '__img linked-icon__img',
            headingClassName    = classNameBase + '__heading';

        return (
            <div className={ classNameBase }>
                <a href={ attributes.link }>
                    <div className={ innerClassName }>
                        <img className={ imgClassName } src={ attributes.imageUrl } alt={ attributes.imageAlt } />
                        <h3 className={ headingClassName }>{ attributes.caption }</h3>
                    </div>
                </a>
            </div>
        );
    }

});