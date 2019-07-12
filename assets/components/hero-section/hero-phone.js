import getImageButton from '../utils/getImageButton';

const { MediaUpload, RichText, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;

registerBlockType('gutenberguest/hero-phone', {
    title: 'Callback Sidebar',

    category: 'common',

    attributes: {
        iconUrl: {
            attribute: 'src',
            selector: '.phone__handset img'
        },
        intro: {
            type: 'array',
            source: 'children',
            selector: '.phone__description'
        },
        phoneToShow: {
            source: 'text',
            selector: '.phone__link'
        },
        phoneToCall: {
            attribute: 'data-phone',
            selector: '.open-btn'
        }
    },

    edit({ attributes, className, setAttributes }) {
        // Icon, phone, call_to_phone
        return (
            <div className="container">
                <MediaUpload
                    onSelect={ media => { setAttributes({ iconUrl: media.url }); } }
                    type="image"
                    value={ attributes.imageID }
                    render={ ({ open }) => getImageButton(open, attributes.iconUrl) }
                />
                <br /><br />
                <RichText
                    onChange={ content => setAttributes({intro: content}) }
                    value={ attributes.intro }
                    multiline="p"
                    placeholder="Call to action text"
                />
                <br /><br />
                <PlainText
                    onChange={ content => setAttributes({ phoneToShow: content }) }
                    value={ attributes.phoneToShow }
                    placeholder="Phone link text"
                />
                <br /><br />
                <PlainText
                    onChange={ content => setAttributes({ phoneToCall: content }) }
                    value={ attributes.phoneToCall }
                    placeholder="Link phone number"
                />
            </div>
        );
    },

    save({ attributes }) {
        return (
            <div className="phone">
                <div className="phone__show_block">
                <span className="phone__handset">
                    <img src={ attributes.iconUrl } alt="Call" />
                </span>
                </div>
                <div className="phone__hide_block">
                    <div className="phone__description">
                        { attributes.intro }
                    </div>

                    <a className="phone__link" href={`tel:${ attributes.phoneToCall }`}>
                        { attributes.phoneToShow }
                    </a>

                    <button className="open-btn" data-phone={ attributes.phoneToCall }></button>
                </div>
            </div>
        );
    }

});