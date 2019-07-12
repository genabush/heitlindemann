import getImageButton from '../utils/getImageButton';

const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;

registerBlockType('gutenberguest/crisp-jobs-banner', {
    title: 'Custom Text Block with Jobs',

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
        },
        jobsBody: {
            type: 'array',
            source: 'children',
            selector: '.jobs__body'
        },
        jobsHeading: {
            type: 'array',
            source: 'children',
            selector: '.jobs__heading'
        },
        jobsList: {
            type: 'array',
            source: 'children',
            selector: '.jobs__list'
        },
        bannerUrl: {
            attribute: 'src',
            selector: '.img-block'
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
                <br />

                <PlainText
                    onChange={ content => setAttributes({ subtitle: content }) }
                    value={ attributes.subtitle }
                    placeholder="Text block subheading here"
                    className="subheading"
                />
                <br />

                <RichText
                    onChange={ content => setAttributes({ body: content }) }
                    value={ attributes.body }
                    multiline="p"
                    placeholder="Section content"
                />
                <br />

                <MediaUpload
                    onSelect={ media => { setAttributes({ bannerUrl: media.url }); } }
                    type="image"
                    render={ ({ open }) => getImageButton(open, attributes.bannerUrl) }
                />
                <br /><br />

                <PlainText
                    onChange={ content => setAttributes({ jobsHeading: content }) }
                    value={ attributes.jobsHeading }
                    placeholder="Requirements heading"
                    className="jobs-heading"
                />
                <br />

                <RichText
                    onChange={ content => setAttributes({ jobsBody: content }) }
                    value={ attributes.jobsBody }
                    multiline="p"
                    placeholder="Vacancy description"
                />
                <br />

                <RichText
                    onChange={ content => setAttributes({ jobsList: content }) }
                    value={ attributes.jobsList }
                    multiline="li"
                    placeholder="Requirements"
                />
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
                    <div className="text-center">
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
                    </div>

                    <div className="container__body">
                        {attributes.body}
                    </div>

                    <div className="img-block img-block--size1">
                        <img src={ attributes.bannerUrl } alt='' />
                    </div>
                    <div className="jobs">
                        <div className="jobs__body">
                            { attributes.jobsBody }
                        </div>
                        <div className="jobs-block">
                            <h3 className="jobs__heading">{ attributes.jobsHeading }</h3>
                            <ul className="jobs__list">
                                { attributes.jobsList }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

});