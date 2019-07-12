const { RichText, PlainText, InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

const crispTextBlockAllowedInners = ['core/gallery', 'core/image', 'core/columns', 'gutenberguest/crisp-post-snapshot'];

registerBlockType('gutenberguest/crisp-text-block', {
    title: 'Custom Text Block',

    category: 'common',

    attributes: {
        title: {
            type: 'string'
        },
        subtitle: {
            type: 'string'
        },
        body: {
            type: 'array',
            source: 'children',
            selector: '.container__body'
        }
    },

    edit({ attributes, className, setAttributes }) {
        return (
            <div className="container">
                <PlainText
                    onChange={ content => setAttributes({ title: content }) }
                    value={ attributes.title }
                    placeholder="Text block heading here"
                    className="heading"
                />

                <PlainText
                    onChange={ content => setAttributes({ subtitle: content }) }
                    value={ attributes.subtitle }
                    placeholder="Text block subheading here"
                    className="subheading"
                />

                <RichText
                    onChange={ content => setAttributes({ body: content }) }
                    value={ attributes.body }
                    multiline="p"
                    placeholder="Section content"
                />

                <strong>Additional elements:</strong>
                <InnerBlocks allowedBlocks={ crispTextBlockAllowedInners } />
            </div>
        );
    },

    save({ attributes }) {

        // Change heading styles
        let headingClass = 'text-block__title';
        if(attributes.className && attributes.className.indexOf('text-block--white') !== -1
            && attributes.className.indexOf('text-block--heading-inverse') === -1) {
            headingClass = 'text-block__title2';
        }

        if(attributes.className && attributes.className.indexOf('text-block--grey') !== -1
            && attributes.className.indexOf('text-block--heading-inverse') !== -1) {
            headingClass = 'text-block__title2';
        }

        return (
            <section className={attributes.className + ' text-block'}>
                <div className="container">
                    {attributes.title && (
                        <h2 className={headingClass}>
                            {attributes.title}
                        </h2>
                    )}

                    {attributes.subtitle && (
                        <h3 className="text-block__subtitle">
                            {attributes.subtitle}
                        </h3>
                    )}

                    <div className="container__body">
                        {attributes.body}
                    </div>

                </div>

                <InnerBlocks.Content />

            </section>
        );
    }

});