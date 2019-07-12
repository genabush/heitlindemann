import getImageButton from '../../utils/getImageButton';

const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;

registerBlockType('gutenberguest/hero-section-slider-slide', {
    title: 'Hero Section Slide',

    category: 'layout',

    attributes: {
        slogan: {
            type: "array",
            source: 'children',
            selector: '.main-slider__container'
        },
        backgroundUrl: {
            attribute: 'value',
            selector: '.main-slider__slidebg'
        },
        external: {
            type: 'string'
        }
    },

    edit({ attributes, className, setAttributes }) {
        return (
            <div className="container">
                <MediaUpload
                    onSelect={ media => { setAttributes({ backgroundUrl: media.url }); } }
                    type="image"
                    value={ attributes.imageID }
                    render={ ({ open }) => getImageButton(open, attributes.backgroundUrl) }
                />
                <br /><br />
                <RichText
                    onChange={ content => setAttributes({slogan: content}) }
                    value={ attributes.slogan }
                    multiline="p"
                    placeholder="Slide description"
                />
                <br/><br/>
                <PlainText
                    onChange={ content => setAttributes({ external: content }) }
                    value={ attributes.external }
                    placeholder="External link"
                    className="heading"
                />
            </div>
        );
    },

    save({ attributes }) {
        const onSlideClick = link => {
            if(link) {
                return `document.location.href = '${link}'`;
            }

            return true;
        };

        return (
            <div className="main-slider__slide"
                 style={{
                     "background" : `url('${ attributes.backgroundUrl }') 50% 50% /cover no-repeat`
                 }}

                 onClick={ onSlideClick(attributes.external) }
            >
                <input type="hidden" className="main-slider__slidebg" value={ attributes.backgroundUrl } />
                <div className="main-slider__container container">
                    { attributes.slogan }
                </div>
            </div>
        );
    }

});